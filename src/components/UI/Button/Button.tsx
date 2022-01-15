import React, { ReactEventHandler } from 'react';
import { ButtonStyle, Icon } from './Button.styles';

interface ButtonProps {
  icon?: string;
  title?: string;
  modifier?: string;
  children?: React.ReactNode;
  onClick?: ReactEventHandler;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  modifier,
  title,
  children,
  onClick,
}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      icon={icon}
      modifier={modifier}
      title={title}
    >
      {children}
      {icon && <Icon className='material-icons'>{icon}</Icon>}
    </ButtonStyle>
  );
};

export default Button;
