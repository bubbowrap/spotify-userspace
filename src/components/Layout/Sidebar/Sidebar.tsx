import User from 'components/User/User';
import Navigation from 'components/Navigation/Navigation';
import Styled from './Sidebar.styles';

const Sidebar = () => {
  return (
    <Styled>
      <div>
        <User />
        <Navigation />
      </div>
    </Styled>
  );
};

export default Sidebar;
