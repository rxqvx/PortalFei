
import React from "react";
import { createContext } from "react"

export const AppContext = createContext({
    username: String,
    setUsername: Function,
    nickname: String,
    setNickname: Function,
});

export const AppContextProvider: React.FC = ({ children }) => {
    const [username, setUsername] = React.useState<String>('');
    const [nickname, setNickname]= React.useState<String>('');
    return (
        <AppContext.Provider value={{ username, setUsername: setUsername, nickname, setNickname: setNickname }}>
            {children}
        </AppContext.Provider>
    )
}