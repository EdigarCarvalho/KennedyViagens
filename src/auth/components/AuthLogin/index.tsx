import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { ErrorText, Form, FormField, Label } from "./index.stitches";
import { Button } from "../../../components/Button/index.stitches";
import { Input } from "../../../components/Input/index.stitches";
import * as form from '@radix-ui/react-form';
import { CompanyName, SubTitle } from "../../../pages/Auth/index.stitches";

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
      if (email && password) {
        await login(email, password);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(sendRequest)}>
      <FormField  name="email">
          <Label > Email </Label>
          <form.Control asChild>
            <Input  type="email" required {...register("email")}/>
          </form.Control>
          <ErrorText  match="valueMissing">
            Por favor digite o seu e-mail
          </ErrorText>
          <ErrorText match="typeMismatch">
            Por favor forneça um email válido
          </ErrorText>
      </FormField>

      <FormField  name="password">
          <Label > Senha </Label>
          <form.Control asChild>
            <Input type="password" required {...register("password")} />
          </form.Control>
          <ErrorText  match="valueMissing">
            Por favor digite a sua senha
          </ErrorText>
          <ErrorText match="typeMismatch">
            Por favor forneça uma senha válida
          </ErrorText>
      </FormField>

      <form.Submit asChild>
        <Button >
          Entrar
        </Button>
      </form.Submit>
    </Form>
  );
}

export default AuthLogin;
