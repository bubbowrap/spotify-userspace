import { useContext } from 'react';
import StateContext from 'context/state-context';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/UI/ErrorFallback/ErrorFallback';
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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <User />
        <Navigation />
        <NowPlaying />
      </ErrorBoundary>
    </SidebarStyle>
  );
};

export default Sidebar;
