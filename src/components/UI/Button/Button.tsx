import React, { ReactEventHandler } from 'react';
import { ButtonStyle, Icon } from './Button.styles';

interface ButtonProps {
  icon?: string;
  title?: string;
  modifier?: string;
  children?: React.ReactNode;
  onClick?: ReactEventHandler;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyle
      onClick={props.onClick}
      icon={props.icon}
      modifier={props.modifier}
      title={props.title}
    >
      {props.children}
      {props.icon && <Icon className='material-icons'>{props.icon}</Icon>}
    </ButtonStyle>
  );
};

export default Button;
