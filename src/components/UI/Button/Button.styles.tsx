import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, weights, fontSize, transitions } = theme;

interface ButtonProps {
  icon?: string;
  modifier?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
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

  ${(props) =>
    props.modifier === 'icon' &&
    `
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
