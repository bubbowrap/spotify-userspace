import { UserLoginBox, Title } from './UserLogin.styles';
import { Button } from 'components/UI';
import Noise from 'components/Layout/Background/Noise';

const UserLogin = () => {
  const handleClick = () => {
    // has to redirect this way for the server stuff to work
    window.location.href = '/.netlify/functions/login';
  };
  return (
    <>
      <UserLoginBox>
        <Title>Spotify UserSpace</Title>
        <Button onClick={handleClick}>Connect to Spotify</Button>
      </UserLoginBox>
      <Noise />
    </>
  );
};

export default UserLogin;
