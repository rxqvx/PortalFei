import React from "react";
import { createContext } from "react";

interface IAppContext {
  username: string;
  setUsername: (x: any) => void;
  nickname: string;
  setNickname: (x: any) => void;
}

export const AppContext = createContext<IAppContext>(
  {} as unknown as IAppContext
);

export const AppContextProvider: React.FC = ({ children }) => {
  const [username, setUsername] = React.useState<string>("undefinedUser");
  const [nickname, setNickname] = React.useState<string>("undefinedNick");

  return (
    <AppContext.Provider
      value={{
        username,
        setUsername: setUsername,
        nickname,
        setNickname: setNickname,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
