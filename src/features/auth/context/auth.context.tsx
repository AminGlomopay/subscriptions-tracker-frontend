import { createContext, useContext, type FC, type PropsWithChildren } from 'react';
import { useCurrentUser } from '../hooks/use-current-user';
import type { TAuthContext } from '../types/auth.types';

const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: user, isLoading } = useCurrentUser();

  const value: TAuthContext = {
    isAuthenticated: !!user,
    user: user ?? null,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
