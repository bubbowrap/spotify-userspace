import { useContext } from 'react';
import { UserLoginBox, Title } from './UserLogin.styles';
import { Button } from 'components/UI';
import Noise from 'components/Layout/Background/Noise';
import AuthContext from 'context/auth-context';

const UserLogin = () => {
  const authCtx = useContext(AuthContext);

  const handleClick = () => {
    // has to redirect this way for the server stuff to work
    window.location.href = '/login';
  };

  const logoutBtn = {
    color: 'white',
    border: 'none',
    background: 'none',
    display: 'block',
    margin: '1rem auto',
    fontSize: '20px',
  };

  return (
    <>
      <UserLoginBox>
        <Title>Spotify UserSpace</Title>
        <Button onClick={handleClick}>Connect to Spotify</Button>
        <button onClick={authCtx.logout} style={logoutBtn}>
          Logout
        </button>
      </UserLoginBox>
      <Noise />
    </>
  );
};

export default UserLogin;
