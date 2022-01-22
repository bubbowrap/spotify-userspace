import styled from 'styled-components';
import theme from 'styles/theme';
const { breakpoints } = theme;

const Styled = styled.main`
  display: grid;
  grid-row-gap: 2.5rem;
  padding: 5rem 1rem 2rem;
  width: 100%;
  align-content: start;

  @media screen and ${breakpoints.md} {
    padding: 2rem;
  }
`;

export default Styled;
