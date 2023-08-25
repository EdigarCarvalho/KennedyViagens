import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";


export const PrivateRoute = ({children} : {children : JSX.Element}) => {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn ? children : <Navigate to="/"/>;
}