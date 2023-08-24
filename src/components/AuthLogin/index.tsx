import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form'; // Importe o tipo SubmitHandler

interface FormValues {
  email: string;
  password: string;
}

function AuthLogin() {
    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm<FormValues>(); 
    const navigate = useNavigate();

    const sendRequest: SubmitHandler<FormValues> = async (data) => { 
      try {        
        const { email, password } = data;
        if(email && password){
          await login(email , password);
          navigate('/dashboard'); 
        }
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <>
        <form onSubmit={handleSubmit(sendRequest)}>
            <label htmlFor="">Email</label>
            <input type="text" {...register("email")} />
            <label htmlFor="">Senha</label>
            <input type="password" {...register("password")} />

            <button type='submit'>Entrar</button>
        </form>
      </>
    )
}
  
export default AuthLogin;
