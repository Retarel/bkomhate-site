
import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Codeword } from '../types';
import { CopyIcon, CheckIcon } from './icons';

interface CodewordDisplayProps {
  codeId: string;
}

const CodewordDisplay: React.FC<CodewordDisplayProps> = ({ codeId }) => {
  const [codeword, setCodeword] = useState<Codeword | null>(null);
  const [status, setStatus] = useState<'loading' | 'found' | 'not-found' | 'error'>('loading');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeId) {
      const fetchCodeword = async () => {
        try {
          const docRef = doc(db, 'codewords', codeId);

          // Atomically increment the view count.
          // This is done before getDoc to not slow down the user view.
          // We don't await this so it happens in the background.
          updateDoc(docRef, {
            viewCount: increment(1)
          }).catch(err => {
            console.warn("Failed to track view count:", err);
          });
          
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCodeword({ id: docSnap.id, ...docSnap.data() } as Codeword);
            setStatus('found');
          } else {
            setStatus('not-found');
          }
        } catch (err) {
          console.error("Failed to fetch codeword from Firestore:", err);
          setStatus('error');
        }
      };

      fetchCodeword();
    }
  }, [codeId]);

  const handleCopy = () => {
    if (codeword && !codeword.isUsed) {
      navigator.clipboard.writeText(codeword.word);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <p className="font-display text-2xl text-stone-400 animate-pulse">ПОИСК КОДА...</p>
      </div>
    );
  }

  if (status === 'not-found' || status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
        <h2 className="font-display text-6xl text-red-500">404</h2>
        <p className="text-stone-300 text-xl mt-2">Код не найден.</p>
        <p className="text-stone-500">Возможно, ссылка неверна или код был удален.</p>
      </div>
    );
  }

  if (codeword && codeword.isUsed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
        <h2 className="font-display text-5xl text-amber-500">КОД ИСПОЛЬЗОВАН</h2>
        <p className="text-stone-300 text-xl mt-4 max-w-lg">{codeword.usedMessage}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
      <div className="w-full max-w-2xl bg-stone-800/50 border-2 border-stone-700 p-8 rounded-lg shadow-2xl">
        <p className="text-stone-400 font-display text-2xl">
          {codeword?.introText || "ВАШЕ КОДОВОЕ СЛОВО:"}
        </p>
        <p className="text-amber-400 font-bold text-3xl md:text-5xl my-4 break-words select-all">
          {codeword?.word}
        </p>
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-3 mt-6 bg-stone-700 hover:bg-amber-500 hover:text-stone-900 text-stone-200 font-display text-2xl py-3 rounded-md transition-all duration-300 disabled:opacity-50"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'СКОПИРОВАНО!' : 'СКОПИРОВАТЬ КОД'}
        </button>
      </div>
    </div>
  );
};

export default CodewordDisplay;
