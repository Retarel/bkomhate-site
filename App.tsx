import React, { useState, useContext, createContext, useEffect, useRef } from 'react';
import { useCodewords } from './hooks/useCodewords';
import type { Codeword } from './types';

// --- ICONS --- //
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v4H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-2 6V6a2 2 0 114 0v4H8z" clipRule="evenodd" />
  </svg>
);
const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);
const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
    </svg>
);
const ExportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 6a1 1 0 011-1h2a1 1 0 110 2H5a1 1 0 01-1-1zm12 0a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1zM4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm3 5a1 1 0 000 2h6a1 1 0 100-2H7z" />
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);
const ImportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

// --- AUTHENTICATION --- //
const ADMIN_PASSWORD = 'b_komhate_admin'; // It's recommended to change this password

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('is_authenticated') === 'true');

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('is_authenticated', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('is_authenticated');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

// --- UI COMPONENTS --- //

const Header: React.FC = () => (
  <header className="bg-black/50 border-b-2 border-amber-500/50 p-4">
    <div className="container mx-auto text-center">
      <h1 className="font-display text-4xl md:text-5xl text-amber-400 tracking-widest">
        B_KOMHATE
      </h1>
      <p className="text-stone-400 text-sm tracking-wider">ГЕНЕРАТОР КОДОВЫХ СЛОВ</p>
    </div>
  </header>
);

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(password)) {
      setError('Неверный пароль');
      setPassword('');
    } else {
      setError('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-sm p-8 bg-stone-800/50 border border-stone-700 rounded-md">
        <h2 className="font-display text-3xl text-center text-stone-200 mb-6">ВХОД В ПАНЕЛЬ</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 mb-4 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
            aria-label="Password"
          />
          <button type="submit" className="w-full flex items-center justify-center font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors">
            <LockIcon />
            ВОЙТИ
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

const CodewordManager: React.FC<{ codeword: Codeword, onUpdate: Function, onDelete: Function }> = ({ codeword, onUpdate, onDelete }) => {
    const [tempUsedMessage, setTempUsedMessage] = useState(codeword.usedMessage);
    const url = `${window.location.origin}${window.location.pathname}?c=${codeword.id}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(url)}`;
    
    const handleUpdateMessage = () => {
        onUpdate(codeword.id, { usedMessage: tempUsedMessage });
    };

    const handleDownloadQR = async () => {
        try {
            const response = await fetch(qrCodeUrl);
            if (!response.ok) throw new Error('QR code fetch failed');
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            // Sanitize codeword for filename
            const sanitizedWord = codeword.word.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            link.setAttribute('download', `qr_${sanitizedWord}.png`);
            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Failed to download QR code', error);
            alert('Не удалось скачать QR-код.');
        }
    };

    return (
        <div className="bg-stone-800/70 border border-stone-700 p-4 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <div className="flex flex-col items-center justify-center space-y-2">
                <img src={qrCodeUrl} alt="QR Code" className="w-36 h-36 border-2 border-stone-600 rounded-md"/>
                <button 
                    onClick={handleDownloadQR} 
                    className="flex items-center justify-center gap-2 w-full bg-stone-600 hover:bg-stone-500 text-stone-200 px-3 py-2 rounded-md text-sm transition-colors"
                >
                    <DownloadIcon />
                    Скачать QR
                </button>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-amber-400 hover:text-amber-300 break-all text-center pt-1">{url}</a>
            </div>
            <div className="md:col-span-2 space-y-3">
                <div>
                    <label className="text-sm font-bold text-stone-400 block">Кодовое слово:</label>
                    <p className="text-lg bg-stone-900 p-2 rounded-md font-bold text-stone-100 break-words">{codeword.word}</p>
                </div>
                <div>
                    <label htmlFor={`usedMsg_${codeword.id}`} className="text-sm font-bold text-stone-400 block">Сообщение (если использовано):</label>
                    <div className="flex gap-2">
                        <input
                            id={`usedMsg_${codeword.id}`}
                            type="text"
                            value={tempUsedMessage}
                            onChange={(e) => setTempUsedMessage(e.target.value)}
                            className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-3 py-1 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                        />
                        <button onClick={handleUpdateMessage} className="bg-stone-600 hover:bg-stone-500 text-stone-200 px-3 rounded-md text-sm">Сохранить</button>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                    <label htmlFor={`toggle_${codeword.id}`} className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id={`toggle_${codeword.id}`} className="sr-only" checked={codeword.isUsed} onChange={() => onUpdate(codeword.id, { isUsed: !codeword.isUsed })} />
                            <div className={`block ${codeword.isUsed ? 'bg-amber-500' : 'bg-stone-600'} w-14 h-8 rounded-full transition-colors`}></div>
                            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${codeword.isUsed ? 'transform translate-x-6' : ''}`}></div>
                        </div>
                        <div className="ml-3 text-stone-300 font-semibold">{codeword.isUsed ? 'ИСПОЛЬЗОВАНО' : 'АКТИВНО'}</div>
                    </label>
                    <button onClick={() => onDelete(codeword.id)} className="flex items-center gap-1 bg-red-800 hover:bg-red-700 text-stone-100 px-3 py-2 rounded-md text-sm transition-colors">
                        <TrashIcon /> Удалить
                    </button>
                </div>
            </div>
        </div>
    );
};

const Dashboard: React.FC = () => {
    const { logout } = useAuth();
    const { codewords, addCodeword, updateCodeword, deleteCodeword, replaceAllCodewords } = useCodewords();
    const [newWord, setNewWord] = useState('');
    const [newUsedMessage, setNewUsedMessage] = useState('Этот код уже был использован.');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAddCodeword = (e: React.FormEvent) => {
        e.preventDefault();
        if (newWord.trim()) {
            addCodeword(newWord.trim(), newUsedMessage.trim());
            setNewWord('');
        }
    };
    
    const handleExport = () => {
        const dataStr = JSON.stringify(codewords, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'b_komhate_codewords.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result;
                if (typeof text !== 'string') throw new Error("File is not readable");
                const importedData = JSON.parse(text);
                // Basic validation
                if (Array.isArray(importedData) && importedData.every(item => 'id' in item && 'word' in item)) {
                    replaceAllCodewords(importedData);
                } else {
                    alert('Ошибка: файл имеет неверный формат.');
                }
            } catch (error) {
                alert(`Ошибка при чтении файла: ${error}`);
            }
        };
        reader.readAsText(file);
        // Reset file input
        if (event.target) {
            event.target.value = '';
        }
    };
  
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-display text-4xl text-stone-200">Панель управления</h2>
                <button onClick={logout} className="bg-stone-700 hover:bg-stone-600 text-stone-200 font-semibold py-2 px-4 rounded-md transition-colors">Выйти</button>
            </div>
            
            <div className="bg-stone-800/50 border border-stone-700 p-6 rounded-md mb-8">
                 <h3 className="font-display text-2xl text-amber-400 mb-4">Управление данными</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <button onClick={handleImportClick} className="flex items-center justify-center font-display text-lg bg-stone-600 text-stone-100 py-2 rounded-md hover:bg-stone-500 transition-colors">
                        <ImportIcon/> Импорт
                     </button>
                     <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".json" />
                     <button onClick={handleExport} className="flex items-center justify-center font-display text-lg bg-stone-600 text-stone-100 py-2 rounded-md hover:bg-stone-500 transition-colors">
                        <ExportIcon/> Экспорт
                     </button>
                 </div>
                 <p className="text-xs text-stone-400 mt-2 text-center">Используйте импорт/экспорт для создания публичного файла `b_komhate_codewords.json`.</p>
            </div>

            <div className="bg-stone-800/50 border border-stone-700 p-6 rounded-md mb-8">
                <h3 className="font-display text-2xl text-amber-400 mb-4">Добавить новый код</h3>
                <form onSubmit={handleAddCodeword} className="space-y-4">
                    <input
                        type="text"
                        value={newWord}
                        onChange={(e) => setNewWord(e.target.value)}
                        placeholder="Новое кодовое слово"
                        className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                    />
                    <input
                        type="text"
                        value={newUsedMessage}
                        onChange={(e) => setNewUsedMessage(e.target.value)}
                        placeholder="Сообщение если код использован"
                        className="w-full bg-stone-900 text-stone-200 border border-stone-600 rounded-md px-4 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                    />
                    <button type="submit" className="w-full font-display text-xl bg-amber-500 text-stone-900 py-2 rounded-md hover:bg-amber-400 transition-colors">
                        Создать QR-код
                    </button>
                </form>
            </div>

            <div className="space-y-4">
                {codewords.map(cw => (
                    <CodewordManager key={cw.id} codeword={cw} onUpdate={updateCodeword} onDelete={deleteCodeword} />
                ))}
            </div>
        </div>
    );
};

const AdminPage: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Dashboard /> : <AdminLogin />;
};

const CodePage: React.FC<{codeId: string}> = ({ codeId }) => {
  const [codeword, setCodeword] = useState<Codeword | null | undefined>(undefined);
  const [status, setStatus] = useState<'loading' | 'found' | 'not-found' | 'error'>('loading');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchCodewords = async () => {
      try {
        // We add a cache-busting query parameter to ensure we get the latest version
        const response = await fetch(`/b_komhate_codewords.json?v=${Date.now()}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const codewords: Codeword[] = await response.json();
        const foundCodeword = codewords.find(cw => cw.id === codeId);
        if (foundCodeword) {
          setCodeword(foundCodeword);
          setStatus('found');
        } else {
          setStatus('not-found');
        }
      } catch (error) {
        console.error("Failed to fetch codewords:", error);
        setStatus('error');
      }
    };

    fetchCodewords();
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
      <div className="w-full max-w-2xl bg-stone-800/50 border-2 border-stone-700 p-8 rounded-lg">
        <p className="text-stone-400 font-display text-2xl">ВАШЕ КОДОВОЕ СЛОВО:</p>
        <p className="text-amber-400 font-bold text-3xl md:text-5xl my-4 break-words select-all">{codeword?.word}</p>
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-3 mt-6 bg-stone-700 hover:bg-amber-500 hover:text-stone-900 text-stone-200 font-display text-2xl py-3 rounded-md transition-all duration-300"
        >
          {copied ? <CheckIcon/> : <CopyIcon/>}
          {copied ? 'СКОПИРОВАНО!' : 'СКОПИРОВАТЬ КОД'}
        </button>
      </div>
    </div>
  );
};


// --- APP --- //

const App: React.FC = () => {
  // Simple router based on URL query parameters and hash
  const urlParams = new URLSearchParams(window.location.search);
  const codeId = urlParams.get('c');

  // If a code ID is in the URL, that's the highest priority.
  if (codeId) {
    return (
        <div className="min-h-screen bg-stone-900 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23292524%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')]">
            <Header />
            <main>
                <CodePage codeId={codeId} />
            </main>
        </div>
    );
  }

  // If no code ID, it's the admin interface.
  // Redirect root to /#/admin for user convenience.
  if (window.location.pathname.endsWith('/') && !window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname + '#/admin');
  }

  // The admin page is only accessible via #/admin hash
  if (window.location.hash !== '#/admin') {
      return (
         <div className="min-h-screen bg-stone-900 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23292524%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')]">
            <Header />
            <main>
                <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
                    <h2 className="font-display text-6xl text-red-500">404</h2>
                    <p className="text-stone-300 text-xl mt-2">Страница не найдена.</p>
                     <a href="/#/admin" className="text-amber-400 hover:text-amber-300 mt-4">Перейти в панель управления</a>
                </div>
            </main>
        </div>
      );
  }
  
  return (
    <AuthProvider>
        <div className="min-h-screen bg-stone-900 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23292524%22%20fill-opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')]">
            <Header />
            <main>
                <AdminPage />
            </main>
        </div>
    </AuthProvider>
  );
};

export default App;
