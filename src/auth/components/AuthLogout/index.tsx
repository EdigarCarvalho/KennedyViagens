import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import { Button } from '../../../components/Button/index.stitches';


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
        <Button onClick={handleClick}>logout</Button>
      </>
    )
}
  
export default AuthLogin;
