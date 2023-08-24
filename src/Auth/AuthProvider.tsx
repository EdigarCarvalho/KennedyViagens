
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/User";

function AuthProvider({children}: {children: JSX.Element}) {
    const [user, setUser] = useState< User | null >;
    
    const signin = ( email: string, password: string) => {

    }

    const signout = () => {

    }

    return (
      <AuthContext.Provider value={ user , signin, signout }>
        {children}
      </AuthContext.Provider>
    )
  }
  
  export default AuthProvider;
  