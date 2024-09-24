import { createContext, useContext, useState } from "react";

export interface MyContextType {
    languange: string;
    setLanguange: (value: string) => void;
    isDark: boolean;
    setIsDark: (value: boolean) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
}

export interface MyProviderProps {
    children: React.ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [languange, setLanguange] = useState<string>(localStorage.getItem("language") || "en");
    const [isDark, setIsDark] = useState<boolean>(localStorage.getItem("theme") === "dark" ? true : false);
    return (
        <MyContext.Provider value={{ languange, setLanguange, isDark, setIsDark }}>
            {children}
        </MyContext.Provider>
    );
}