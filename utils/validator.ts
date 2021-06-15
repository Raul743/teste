import * as yup from 'yup';

import { specialCharactersRegex } from './regex';

export const credentialsValidator = yup.object().shape({
  email: yup.string().email(),
  password: yup.string(),
});

export const removeEspecialChars = (str: string) => str.replace(specialCharactersRegex, '');
