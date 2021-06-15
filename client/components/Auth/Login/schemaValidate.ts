import * as Yup from 'yup';
const sms = 'Campo obrigatório';

export const validate = Yup.object({
  email: Yup.string().email().required(sms),
  password: Yup.string().min(8, 'Must be 8 caracteres').required(sms),
});

export const initialValues = { email: '', password: '' };
