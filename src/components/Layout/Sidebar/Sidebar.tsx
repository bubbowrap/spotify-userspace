import { useContext } from 'react';
import StateContext from 'context/state-context';
import User from 'components/User/User';
import NowPlaying from 'components/User/NowPlaying';
import Navigation from 'components/Navigation/Navigation';
import SidebarStyle from './Sidebar.styles';

interface SidebarProps {
  active?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const stateCtx = useContext(StateContext);

  return (
    <SidebarStyle active={stateCtx.sidebarActive}>
      <User />
      <Navigation />
      <NowPlaying />
    </SidebarStyle>
  );
};

export default Sidebar;
