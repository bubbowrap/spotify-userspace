import styled from 'styled-components';
import theme from 'styles/theme';
const { weights, fontSize } = theme;

export const UserLoginBox = styled.div`
  align-self: center;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${fontSize.xl};
  font-weight: ${weights.bold};
  margin: 0 0 1.25rem 0;
`;
