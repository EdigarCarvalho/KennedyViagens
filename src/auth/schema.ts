import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(5).required("Campo obrigatório")
});