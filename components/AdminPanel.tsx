
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Codeword } from '../types';
import CodewordManagerItem from './CodewordManagerItem';
import { SaveIcon } from './icons';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

const AdminPanel: React.FC = () => {
  const { logout, changePassword } = useAuth();
  
  const [codewords, setCodewords] = useState<Codeword[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [newWord, setNewWord] = useState('');
  const [newUsedMessage, setNewUsedMessage] = useState('Этот код уже был использован.');
  const [newIntroText, setNewIntroText] = useState('ВАШЕ КОДОВОЕ СЛОВО:');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const q = query(collection(db, "codewords"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, 
      (querySnapshot) => {
        const words = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Codeword));
        setCodewords(words);
        setIsLoaded(true);
      },
      (error) => {
        console.error("Error fetching codewords from Firestore:", error);
        alert("Не удалось загрузить данные. Проверьте настройки Firebase и подключение к сети.");
        setIsLoaded(true);
      }
    );
    return () => unsubscribe();
  }, []);


  const handleAddCodeword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newWord.trim()) {
      try {
        await addDoc(collection(db, 'codewords'), {
          word: newWord.trim(),
          isUsed: false,
          usedMessage: newUsedMessage.trim() || 'Этот код уже был использован.',
          introText: newIntroText.trim() || 'ВАШЕ КОДОВОЕ СЛОВО:',
          createdAt: serverTimestamp(),
          viewCount: 0 // Initialize view count
        });
        setNewWord('');
        setNewIntroText('ВАШЕ КОДОВОЕ СЛОВО:');
        setNewUsedMessage('Этот код уже был использован.');
      } catch (error) {
        console.error("Error adding codeword to Firestore: ", error);
        alert('Ошибка при добавлении кода.');
      }
    }
  };
  
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (window.confirm('Вы уверены, что хотите изменить пароль?')) {
      try {
        await changePassword(newPassword);
        alert('Пароль успешно изменен!');
        setNewPassword('');
      } catch (error: any) {
        alert(`Ошибка изменения пароля: ${error.message}`);
      }
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-4xl text-stone-200">Панель управления</h2>
        <button
          onClick={logout}
          className="bg-stone-700 hover:bg-stone-600 text-stone-200 font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Выйти
        </button>
      </div>

      <div className="bg-stone-800/50 border border-stone-700 p-6 rounded-md mb-8">
        <h3 className="font-display text-2xl text-amber-400 mb-4">Изменить пароль</h3>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <input
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Новый пароль (минимум 6 символов)"
            className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
          />
          <button type="submit" className="w-full flex items-center justify-center font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors">
            <SaveIcon />
            Сохранить пароль
          </button>
        </form>
      </div>

      <div className="bg-stone-800/50 border border-stone-700 p-6 rounded-md mb-8">
        <h3 className="font-display text-2xl text-amber-400 mb-4">Добавить новый код</h3>
        <form onSubmit={handleAddCodeword} className="space-y-4">
          <input
            type="text"
            value={newIntroText}
            onChange={e => setNewIntroText(e.target.value)}
            placeholder="Вступительный текст (обращение)"
            className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
          />
          <input
            type="text"
            value={newWord}
            onChange={e => setNewWord(e.target.value)}
            placeholder="Новое кодовое слово"
            required
            className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
          />
          <input
            type="text"
            value={newUsedMessage}
            onChange={e => setNewUsedMessage(e.target.value)}
            placeholder="Сообщение если код использован"
            className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
          />
          <button type="submit" className="w-full font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors">
            Создать QR-код
          </button>
        </form>
      </div>
      
      {!isLoaded && <p className="text-center font-display text-2xl text-stone-400 animate-pulse">ЗАГРУЗКА КОДОВ...</p>}
      
      <div className="space-y-4">
        {isLoaded && codewords.map(codeword => (
          <CodewordManagerItem key={codeword.id} codeword={codeword} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
