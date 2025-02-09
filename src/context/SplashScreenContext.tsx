// context/SplashScreenContext.tsx
"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SplashScreenContextType {
  showSplash: boolean;
  setShowSplash: (value: boolean) => void;
}

const SplashScreenContext = createContext<SplashScreenContextType | undefined>(undefined);

export const useSplashScreen = (): SplashScreenContextType => {
  const context = useContext(SplashScreenContext);
  if (!context) {
    throw new Error('useSplashScreen must be used within a SplashScreenProvider');
  }
  return context;
};

interface SplashScreenProviderProps {
  children: ReactNode;
}

export const SplashScreenProvider: React.FC<SplashScreenProviderProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <SplashScreenContext.Provider value={{ showSplash, setShowSplash }}>
      {children}
    </SplashScreenContext.Provider>
  );
};
