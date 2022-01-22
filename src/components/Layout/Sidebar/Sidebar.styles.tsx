import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, transitions, breakpoints } = theme;

interface SidebarProps {
  active?: boolean;
}

const SidebarStyle = styled.div<SidebarProps>`
  max-width: 300px;
  flex: 1 0 300px;
  top: 60px;
  background: ${colors.darkestBlue};
  height: 100vh;
  position: fixed;
  margin-left: -300px;
  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  transition: all ${transitions.base};
  z-index: 999;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  ${(props) =>
    props.active &&
    `
    margin-left: 0;
    box-shadow: 5px 0 30px 10px rgb(2, 6, 23, 0.3);
  `}

  @media screen and ${breakpoints.md} {
    position: sticky;
    flex: 1 0 33%;
    margin-left: 0;
    top: 0;
  }
`;

export default SidebarStyle;
