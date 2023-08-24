import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import AuthLogin from "../../components/AuthLogin";
import AuthLogout from "../../components/AuthLogout";


function Auth() {
  const { isLoggedIn} = useContext(AuthContext);


    return (
      <>
        <h1>Auth</h1>
        { isLoggedIn 
        ? <AuthLogout />
        : <AuthLogin />}

      </>
    )
  }
  
  export default Auth;
  