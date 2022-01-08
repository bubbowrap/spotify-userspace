import styled from 'styled-components';
import theme from 'styles/theme';

const { colors } = theme;

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  border-top: thin solid ${colors.darkestGrey};
  border-bottom: thin solid ${colors.darkestGrey};
`;
