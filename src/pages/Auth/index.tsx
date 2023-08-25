import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import AuthLogin from "../../auth/components/AuthLogin/index";
import AuthLogout from "../../auth/components/AuthLogout";


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
  