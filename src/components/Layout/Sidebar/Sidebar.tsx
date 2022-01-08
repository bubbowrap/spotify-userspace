import User from 'components/User/User';
import Navigation from 'components/Navigation/Navigation';
import Styled from './Sidebar.styles';
const Sidebar = () => {
  return (
    <Styled>
      <User />
      <Navigation />
    </Styled>
  );
};

export default Sidebar;
