import React, { ReactEventHandler } from 'react';
import { ButtonStyle, Icon } from './Button.styles';

const Button: React.FC<{
  icon?: string;
  children?: React.ReactNode;
  onClick?: ReactEventHandler;
}> = (props) => {
  return (
    <ButtonStyle onClick={props.onClick}>
      {props.children}
      {props.icon && <Icon className='material-icons'>{props.icon}</Icon>}
    </ButtonStyle>
  );
};

export default Button;
