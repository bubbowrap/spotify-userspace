import { useContext } from 'react';
import { Button } from 'components/UI';
import HamburgerIcon from 'components/UI/HamburgerIcon/HamburgerIcon';
import StateContext from 'context/state-context';
import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, breakpoints } = theme;

const Bar = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.darkestBlue};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.25rem;
  height: 60px;
  z-index: 999;

  @media screen and ${breakpoints.md} {
    position: relative;
    background: none;
    padding: 0;
    height: auto;
  }
`;

const PageTitle = styled.h1`
  margin: 0;
`;

interface BarProps {
  children?: React.ReactNode;
}

const Topbar: React.FC<BarProps> = ({ children }) => {
  const stateCtx = useContext(StateContext);

  return (
    <Bar>
      <HamburgerIcon />
      <PageTitle>{children}</PageTitle>
      <Button
        modifier='icon'
        icon='logout'
        title='logout'
        onClick={stateCtx.logout}
      />
    </Bar>
  );
};

export default Topbar;
