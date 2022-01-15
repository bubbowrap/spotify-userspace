import { useContext } from 'react';
import { Button } from 'components/UI';
import styled from 'styled-components';
import AuthContext from 'context/auth-context';

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageTitle = styled.h1`
  margin: 0;
`;

interface BarProps {
  children?: React.ReactNode;
}

const Topbar: React.FC<BarProps> = ({ children }) => {
  const authCtx = useContext(AuthContext);

  return (
    <Bar>
      <PageTitle>{children}</PageTitle>
      <Button
        modifier='icon'
        icon='logout'
        title='logout'
        onClick={authCtx.logout}
      />
    </Bar>
  );
};

export default Topbar;
