import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form"; // Importe o tipo SubmitHandler
import { ErrorText, Form, FormField } from "./index.stitches";
import * as Label from "@radix-ui/react-label";
import { Button } from "../../../components/Button/index.stitches";
import { Input } from "../../../components/Input/index.stitches";
import { loginSchema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  email: string;
  password: string;
}

function AuthLogin() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(loginSchema) 
  });
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
        <FormField>
          <Label.Root htmlFor="email"> Email </Label.Root>
          <Input type="text" id="firstName" {...register("email")} />
          <ErrorText>{errors.email?.message}</ErrorText>
        </FormField>

        <FormField>
          <Label.Root htmlFor="password"> Senha </Label.Root>
          <Input type="password" id="password" {...register("password")} />
          <ErrorText>{errors.password?.message}</ErrorText>
        </FormField>

        <Button type="submit">Entrar</Button>
      </Form>

  );
}

export default AuthLogin;
