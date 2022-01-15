import User from 'components/User/User';
import NowPlaying from 'components/User/NowPlaying';
import Navigation from 'components/Navigation/Navigation';
import Styled from './Sidebar.styles';
const Sidebar = () => {
  return (
    <Styled>
      <User />
      <Navigation />
      <NowPlaying />
    </Styled>
  );
};

export default Sidebar;
