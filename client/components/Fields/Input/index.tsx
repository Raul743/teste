import { FC } from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import { useField, ErrorMessage } from 'formik';
import { inputProps } from '../types';
import '../../../../styles/Home.module.css';

const TextInput: FC<inputProps> = ({ type, label, icon, name, value, placeholder, data }) => {
  const [field, meta] = useField(name);

  if (!name) {
    return <label className="errorLabel">Esperava receber um "name"!</label>;
  }

  return (
    <FormGroup className="mb-4">
      {type !== 'select' ? (
        <>
          <Label>{label}</Label>
          <Input
            {...field}
            type={type}
            id="exampleEmail"
            placeholder={placeholder}
            className={`${meta?.touched && meta?.error && 'is-invalid'}`}
          />
          <ErrorMessage name={field.name} component="div" className="error" />
        </>
      ) : (
        <></>
      )}
    </FormGroup>
  );
};

export default TextInput;
