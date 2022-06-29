
import React from "react";
import { createContext } from "react"

export const AppContext = createContext({
    username: String,
    setUsername: Function
});

export const AppContextProvider: React.FC = ({ children }) => {
    const [username, setUsername] = React.useState<String>('');
    return (
        <AppContext.Provider value={{ username, setUsername: setUsername }}>
            {children}
        </AppContext.Provider>
    )
}