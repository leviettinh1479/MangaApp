import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  isLogin: boolean;
  setisLogin: React.Dispatch<React.SetStateAction<boolean>>;
  infoUser: any; // Thay thế any bằng kiểu dữ liệu thích hợp của infoUser
  setinfoUser: React.Dispatch<React.SetStateAction<any>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);
  const [infoUser, setinfoUser] = useState({});

  return (
    <AppContext.Provider value={{ isLogin, setisLogin, infoUser, setinfoUser }}>
      {children}
    </AppContext.Provider>
  );
};