import { createContext, useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";




//types


type AuthContextType = {
    isAuthenticated: boolean;
    user: UserType | null;
    AuthFunction: () => Promise<void>;
}

type AuthProviderProps = {
    children: JSX.Element | JSX.Element[];
}

type UserType = {
    id: string;
    token: string;
    refreshToken: String;
}
//*****

//Creating Context 
export const AuthContext = createContext({} as AuthContextType);



//Starting Component
export const AuthProvider = ({ children }: AuthProviderProps) => {

    //States

    const [user, setUser] = useState<UserType | null>(null);

    //*****
    //Variables
    const isAuthenticated = !!user;

    //*********

    //Functions

    const AuthFunction = async () => {
        fetch("http://localhost:4000/login",);

        setCookie(undefined, 'luckytalks.token', token, {
            maxAge: 60 * 60 * 2, // 2 hours;
            httpOnly: true
        })
        setCookie(undefined, 'luckytalks.rtoken', refreshToken, {
            maxAge: 60 * 60 * 720, // 30 days;
            httpOnly: true
        })

        setUser(user)

        Router.push("/profile")
    }

    //*********

    // component return
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, AuthFunction }}>
            {children}
        </AuthContext.Provider>
    )
}