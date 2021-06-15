import { FC } from 'react';
import { Button } from 'reactstrap';
import { ButtonProps } from './types';

const ButtonComponent: FC<ButtonProps> = ({ title, color, type }) => {
  return (
    <Button color={color} type={type} style={{ width: '100%' }}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
