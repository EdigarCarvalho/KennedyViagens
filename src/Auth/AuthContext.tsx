import { createContext } from "react";

export type AuthContextType = {
    isLoggedIn: boolean;
    token :string | null ;
    login: ( email: string , password: string ) => void;
    logout: ( token: string ) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);
  