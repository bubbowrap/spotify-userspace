import { useContext } from 'react';
import StateContext from 'context/state-context';
import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, transitions, breakpoints } = theme;

interface HamburgerProps {
  active?: boolean;
}

const HamburgerIco = styled.div<HamburgerProps>`
  display: block;
  transform: scale(50%);

  &:hover {
    cursor: pointer;
  }

  @media screen and ${breakpoints.md} {
    display: none;
  }

  span {
    width: 50px;
    height: 5px;
    background-color: ${colors.white};
    display: block;
    margin: 8px auto;
    transition: all ${transitions.base};
  }

  ${(props) =>
    props.active &&
    `
    span {
      transition: all ${transitions.base};
    }
    
  span:nth-child(1) {
    -webkit-transform: translateY(13px);
    -ms-transform: translateY(13px);
    -o-transform: translateY(13px);
    transform: translateY(13px);
  }

  span:nth-child(3) {
    -webkit-transform: translateY(-13px);
    -ms-transform: translateY(-13px);
    -o-transform: translateY(-13px);
    transform: translateY(-13px);
  }`}
`;
const HamburgerIcon: React.FC<HamburgerProps> = ({ active }) => {
  const stateCtx = useContext(StateContext);

  return (
    <HamburgerIco
      onClick={stateCtx.toggleSidebar}
      active={stateCtx.sidebarActive}
    >
      <span></span>
      <span></span>
      <span></span>
    </HamburgerIco>
  );
};

export default HamburgerIcon;
