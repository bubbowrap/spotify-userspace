import styled from 'styled-components';
import theme from 'styles/theme';
const { weights, fontSize } = theme;

export const UserLoginBox = styled.div`
  align-self: center;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${fontSize.xxl};
  font-weight: ${weights.bold};
  line-height: 1.25;
  margin: 0 0 1.25rem 0;
`;

export const Tagline = styled.p`
  margin-bottom: 2rem;
`;
