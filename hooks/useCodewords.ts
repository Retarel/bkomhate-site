import { useState, useEffect, useCallback } from 'react';
import type { Codeword } from '../types';

const STORAGE_KEY = 'b_komhate_codewords_v1';

export const useCodewords = () => {
  const [codewords, setCodewords] = useState<Codeword[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedItems = window.localStorage.getItem(STORAGE_KEY);
      if (storedItems) {
        setCodewords(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Failed to load codewords from local storage", error);
    }
    setIsLoaded(true);
  }, []);

  const saveCodewords = useCallback((items: Codeword[]) => {
    try {
      // Sort by newest first before saving
      const sortedItems = items.sort((a, b) => parseInt(b.id.split('-')[0], 36) - parseInt(a.id.split('-')[0], 36));
      setCodewords(sortedItems);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedItems));
    } catch (error)
      {
      console.error("Failed to save codewords to local storage", error);
    }
  }, []);

  const addCodeword = (word: string, usedMessage: string) => {
    const newCodeword: Codeword = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`,
      word,
      isUsed: false,
      usedMessage: usedMessage || 'Этот код уже был использован.',
    };
    saveCodewords([newCodeword, ...codewords]);
  };

  const updateCodeword = (id: string, updates: Partial<Omit<Codeword, 'id'>>) => {
    const updatedCodewords = codewords.map(cw => 
      cw.id === id ? { ...cw, ...updates } : cw
    );
    saveCodewords(updatedCodewords);
  };

  const deleteCodeword = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить этот код? Это действие необратимо.')) {
      const filteredCodewords = codewords.filter(cw => cw.id !== id);
      saveCodewords(filteredCodewords);
    }
  };
  
  const getCodewordById = (id: string): Codeword | undefined => {
    return codewords.find(cw => cw.id === id);
  };

  const replaceAllCodewords = (newCodewords: Codeword[]) => {
    if (window.confirm('Вы уверены? Это действие заменит все существующие кодовые слова. Рекомендуется сначала сделать экспорт.')) {
      saveCodewords(newCodewords);
    }
  };

  return { codewords, addCodeword, updateCodeword, deleteCodeword, getCodewordById, replaceAllCodewords, isLoaded };
};