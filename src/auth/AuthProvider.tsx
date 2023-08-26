import  { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../hooks/useApi";

function AuthProvider({ children }: { children: JSX.Element }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );
  //    localStorage.getItem("access_token")
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);
    const { login : signin, logout : signout} = useApi();

  useEffect(() => {
     token ? localStorage.setItem("access_token", token) 
           : localStorage.removeItem("access_token");
    
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const { access_token } = await signin(email, password);

      if (access_token) {
        setIsLoggedIn(true);
        setToken(access_token);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      if (token) {
        // await signout(token);
        setToken(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
