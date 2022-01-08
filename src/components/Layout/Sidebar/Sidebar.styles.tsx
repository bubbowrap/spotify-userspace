import styled from 'styled-components';
import theme from 'styles/theme';
const { colors } = theme;

const Styled = styled.div`
  flex: 1 0 auto;
  max-width: 300px;
  background: ${colors.darkestBlue};
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export default Styled;
