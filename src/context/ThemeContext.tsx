'use client';

import { PropsWithChildren, createContext, useState } from 'react';
export type ContextType = { toggle: () => void; mode: 'dark' | 'light' };

export const ThemeContext = createContext<ContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
