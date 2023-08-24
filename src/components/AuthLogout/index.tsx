import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthContext';


function AuthLogin() {
    const { token , logout} = useContext(AuthContext);

    const handleClick = async () => {
        try {        

             await logout(token ? token : "");
          } catch (error) {
            console.log(error);
          }
        
    }

    return (
      <>
        <button onClick={handleClick}>logout</button>
      </>
    )
}
  
export default AuthLogin;
