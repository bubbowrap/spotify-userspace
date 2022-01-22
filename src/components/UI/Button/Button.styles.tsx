import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, weights, fontSize, fonts, transitions } = theme;

interface ButtonProps {
  icon?: string;
  title?: string;
  modifier?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  border-radius: 2rem;
  border: none;
  text-transform: uppercase;
  padding: 1.25rem 3rem;
  background-color: ${colors.green};
  font-weight: ${weights.bolder};
  font-size: ${fontSize.sm};
  letter-spacing: 1.5px;
  transition: all ${transitions.base};
  cursor: pointer;
  will-change: transform;

  &:hover {
    background-color: ${colors.lighterGreen};
    transform: scale(1.025);
  }

  ${(props) =>
    props.modifier === 'icon' &&
    `
    background: ${colors.darkestBlue};
    color: ${colors.lightGrey};
    padding: 0 1rem;
    width: 48px;
    height: 48px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    
    &:hover {
      color: ${colors.white};
      background: ${colors.darkestBlue};
      width: auto;
      transform: scale(1);
      padding: 0 1.25rem;

      i:before {
        content: '${props.title}';
        display: block;
        opacity: 1;
        font-family: ${fonts.primary};
        font-weight: ${weights.bolder};
        font-size: ${fontSize.sm};
        text-transform: uppercase;
        letter-spacing: 1.5px;        
        margin-right: 0.5rem;
      }
    }

    i {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &:before {
        opacity: 0;
        transition: opacity ${transitions.base};
      }
    }
  `}

  ${(props) =>
    props.modifier === 'outline' &&
    `
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
export const Icon = styled.i`
  margin-left: 1.5rem;
`;
