import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// FIX: Removed v9 imports and added firebase/app for v8 User type.
import firebase from 'firebase/compat/app';
import { auth } from '../services/firebase';

interface AuthContextType {
  // FIX: Use firebase.User type from v8 API.
  currentUser: firebase.User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<any>;
  logout: () => Promise<void>;
  changePassword: (pass: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // FIX: Use firebase.User type from v8 API.
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // FIX: Use v8 namespaced onAuthStateChanged method.
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = (email: string, pass: string) => {
    // FIX: Use v8 namespaced signInWithEmailAndPassword method.
    return auth.signInWithEmailAndPassword(email, pass);
  };

  const logout = () => {
    // FIX: Use v8 namespaced signOut method.
    return auth.signOut();
  };

  const changePassword = (pass: string) => {
    if (auth.currentUser) {
       if (!pass || pass.length < 6) {
        return Promise.reject(new Error("Пароль должен содержать не менее 6 символов."));
      }
      // FIX: Use v8 namespaced updatePassword method on the user object.
      return auth.currentUser.updatePassword(pass);
    }
    return Promise.reject(new Error("Пользователь не авторизован."));
  };

  const value = {
    currentUser,
    loading,
    login,
    logout,
    changePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};