
import React from "react";
import { createContext } from "react"
import * as SecureStore from 'expo-secure-store'

export const AppContext = createContext({
    username: String,
    setUsername: Function,
    nickname: String,
    setNickname: Function,
});


export const AppContextProvider: React.FC = ({ children }) => {
    const [username, setUsername] = React.useState<string>('undefinedUser');
    const [nickname, setNickname] = React.useState<string>('undefinedNick');

    return (
        <AppContext.Provider value={{ username, setUsername: setUsername, nickname, setNickname: setNickname }}>
            {children}
        </AppContext.Provider>
    )
}