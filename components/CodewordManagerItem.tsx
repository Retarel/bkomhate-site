
import React, { useState } from 'react';
import { Codeword } from '../types';
import { TrashIcon, DownloadIcon, EyeIcon } from './icons';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

interface CodewordManagerItemProps {
  codeword: Codeword;
}

const CodewordManagerItem: React.FC<CodewordManagerItemProps> = ({ codeword }) => {
  const [usedMessage, setUsedMessage] = useState(codeword.usedMessage);
  const [introText, setIntroText] = useState(codeword.introText || 'ВАШЕ КОДОВОЕ СЛОВО:');

  const docRef = doc(db, 'codewords', codeword.id);

  const handleUpdate = async (update: Partial<Codeword>) => {
    try {
      await updateDoc(docRef, update);
    } catch (error) {
      console.error("Error updating codeword: ", error);
      alert("Ошибка при обновлении кода.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить этот код? Это действие необратимо.')) {
      try {
        await deleteDoc(docRef);
      } catch (error) {
        console.error("Error deleting codeword: ", error);
        alert("Ошибка при удалении кода.");
      }
    }
  };

  const qrLink = `${window.location.origin}${window.location.pathname}?c=${codeword.id}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(qrLink)}`;

  const downloadQR = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      if (!response.ok) throw new Error('QR code fetch failed');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const safeWord = codeword.word.replace(/[^a-z0-9а-яё]/gi, '_').toLowerCase();
      a.setAttribute('download', `qr_${safeWord}.png`);
      document.body.appendChild(a);
      a.click();
      a.parentNode?.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download QR code", error);
      alert('Не удалось скачать QR-код.');
    }
  };

  return (
    <div className="bg-stone-800/70 border border-stone-700 p-4 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
      <div className="flex flex-col items-center justify-center space-y-2">
        <img src={qrCodeUrl} alt="QR Code" className="w-36 h-36 border-2 border-stone-600 rounded-md" />
        <button onClick={downloadQR} className="flex items-center justify-center gap-2 w-full bg-stone-600 hover:bg-stone-500 text-stone-200 px-3 py-2 rounded-md text-sm transition-colors">
          <DownloadIcon />
          Скачать QR
        </button>
        <a href={qrLink} target="_blank" rel="noopener noreferrer" className="text-xs text-amber-400 hover:text-amber-300 break-all text-center pt-1">
          {qrLink}
        </a>
      </div>

      <div className="md:col-span-2 space-y-3">
        <div>
          <label htmlFor={`introText_${codeword.id}`} className="text-sm font-bold text-stone-400 block">Вступительный текст:</label>
          <input
            id={`introText_${codeword.id}`}
            type="text"
            value={introText}
            onChange={e => setIntroText(e.target.value)}
            onBlur={() => handleUpdate({ introText })}
            className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-3 py-1 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
          />
        </div>
        <div>
          <label className="text-sm font-bold text-stone-400 block">Кодовое слово:</label>
          <p className="text-lg bg-stone-900 p-2 rounded-md font-bold text-stone-100 break-words">{codeword.word}</p>
        </div>
        <div>
          <label htmlFor={`usedMsg_${codeword.id}`} className="text-sm font-bold text-stone-400 block">Сообщение (если использовано):</label>
          <input
            id={`usedMsg_${codeword.id}`}
            type="text"
            value={usedMessage}
            onChange={e => setUsedMessage(e.target.value)}
            onBlur={() => handleUpdate({ usedMessage })}
            className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-3 py-1 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
          />
        </div>

        <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
          <label htmlFor={`toggle_${codeword.id}`} className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id={`toggle_${codeword.id}`} className="sr-only" checked={codeword.isUsed} onChange={() => handleUpdate({ isUsed: !codeword.isUsed })} />
              <div className={`block ${codeword.isUsed ? 'bg-amber-500' : 'bg-stone-600'} w-14 h-8 rounded-full transition-colors`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${codeword.isUsed ? 'transform translate-x-6' : ''}`}></div>
            </div>
            <div className="ml-3 text-stone-300 font-semibold">{codeword.isUsed ? 'ИСПОЛЬЗОВАНО' : 'АКТИВНО'}</div>
          </label>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-stone-400" title="Количество просмотров">
                <EyeIcon />
                <span className="font-bold text-lg">{codeword.viewCount || 0}</span>
            </div>
            <button onClick={handleDelete} className="flex items-center gap-1 bg-red-800 hover:bg-red-700 text-stone-100 px-3 py-2 rounded-md text-sm transition-colors">
              <TrashIcon /> Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodewordManagerItem;
