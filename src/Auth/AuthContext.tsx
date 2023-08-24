import { createContext } from "react";
import { User } from "../types/User"

export type AuthContextType = {
    user: User | null;
    singin: ( email: string , password: string ) => Promise<boolean>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(null!);
  