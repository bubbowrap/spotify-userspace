import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, weights, fontSize, transitions } = theme;

export const ButtonStyle = styled.button`
  border-radius: 2rem;
  border: none;
  text-transform: uppercase;
  padding: 1.25rem 2rem;
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
`;

export const Icon = styled.i`
  margin-right: 1.5rem;
`;
