import * as form from '@radix-ui/react-form';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { Form, FormField } from "./index.stitches";
import { Button, ErrorText, Input, Label } from "../../../components";
import { useMutation } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";
import { FormValues } from "../../../interfaces";
import { useContext } from 'react';

function AuthLogin() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const loginMutation = useMutation(
    async (data: FormValues) => {
      const { email, password } = data;
      if (email && password) {
        await login(email, password);
        navigate("/dashboard");
      }
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const sendRequest: SubmitHandler<FormValues> = async (data) => {
    loginMutation.mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(sendRequest)}>
      <FormField name="email">
        <Label> Email </Label>
        <form.Control asChild>
          <Input type="email" required {...register("email")} />
        </form.Control>
        <ErrorText match="valueMissing">Por favor digite o seu e-mail</ErrorText>
        <ErrorText match="typeMismatch">Por favor forneça um email válido</ErrorText>
      </FormField>

      <FormField name="password">
        <Label> Senha </Label>
        <form.Control asChild>
          <Input type="password" required {...register("password")} />
        </form.Control>
        <ErrorText match="valueMissing">Por favor digite a sua senha</ErrorText>
        <ErrorText match="typeMismatch">Por favor forneça uma senha válida</ErrorText>
      </FormField>

      <form.Submit asChild>
        <Button>
          {loginMutation.isLoading ? (
            <ClipLoader size={14} color={"white"} />
          ) : (
            "Entrar"
          )}
        </Button>
      </form.Submit>
    </Form>
  );
}

export default AuthLogin;
