import React, { ReactEventHandler } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
const { colors, weights, fontSize, transitions } = theme;

interface ButtonProps {
  icon?: string;
  title?: string;
  modifier?: string;
  children?: React.ReactNode;
  onClick?: ReactEventHandler;
}

const Button: React.FC<ButtonProps> = (props) => {
  const ButtonStyle = styled.button`
    border-radius: 2rem;
    border: none;
    text-transform: uppercase;
    padding: 1.25rem 3rem;
    background-color: ${colors.green};
    font-weight: ${weights.bold};
    font-size: ${fontSize.sm};
    letter-spacing: 1.5px;
    transition: all ${transitions.base};
    cursor: pointer;
    will-change: transform;

    &:hover {
      background-color: ${colors.lighterGreen};
      transform: scale(1.025);
    }

    ${props.modifier === 'icon' &&
    css`
      background: ${colors.darkestBlue};
      color: ${colors.lightGrey};
      padding: 0;
      width: 48px;
      height: 48px;

      &:hover {
        color: ${colors.white};
        background: ${colors.darkestBlue};
      }

      i {
        margin: 0;
      }
    `}

    ${props.modifier === 'outline' &&
    css`
      padding: 1rem 3rem;
      background: transparent;
      color: ${colors.lightGrey};
      border: 2px solid ${colors.lightGrey};

      &:hover {
        color: ${colors.white};
        border-color: ${colors.white};
        background-color: transparent;
      }
    `}
  `;

  const Icon = styled.i`
    margin-left: 1.5rem;
  `;
  return (
    <ButtonStyle onClick={props.onClick} title={props.title}>
      {props.children}
      {props.icon && <Icon className='material-icons'>{props.icon}</Icon>}
    </ButtonStyle>
  );
};

export default Button;
