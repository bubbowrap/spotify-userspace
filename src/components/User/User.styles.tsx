import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, weights, fontSize } = theme;

export const UserContainer = styled.div`
  display: flex;
  padding: 2rem 1rem 2rem 2rem;
  border-bottom: thin solid ${colors.darkestGrey};
`;

export const Image = styled.img`
  flex: 0 1 20%;
`;

export const UserTextContainer = styled.div`
  flex-basis: auto;
  margin-left: 1rem;
`;

export const Username = styled.p`
  font-size: ${fontSize.md};
  margin: 0 0 0.25rem 0;
`;

export const UserDetails = styled.span`
  font-size: ${fontSize.sm};
  color: ${colors.lightGrey};
`;

export const UserCount = styled.span`
  font-weight: ${weights.bold};
  color: ${colors.white};
`;
