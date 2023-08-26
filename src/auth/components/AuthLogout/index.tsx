import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import { Button } from '../../../components/Button/index.stitches';
import { Title } from '../../../components/ToolCard/index.stitches';


function AuthLogin() {
    const { token , logout } = useContext(AuthContext);

    const handleClick = async () => {
      try {        
        await logout(token  ? token : "");
      } catch (error) {
        console.log(error);
      }
    }

    return (

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center'}}>
        <Title>Deseja encerrar a sessão?</Title>
        <Button onClick={handleClick}>logout</Button>
      </div>
 
    )
}
  
export default AuthLogin;
