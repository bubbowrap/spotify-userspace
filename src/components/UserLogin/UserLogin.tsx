import React from 'react';
import { UserLoginBox, Title } from './UserLogin.styles';
import { Button } from 'components/UI';
import CirclesIcon from 'components/UI/CirclesIcon/CirclesIcon';

const UserLogin = () => {
  const handleClick = () => {
    // has to redirect this way for the server stuff to work
    window.location.href = '/login';
  };

  return (
    <React.Fragment>
      <UserLoginBox>
        <Title>Spotify UserSpace</Title>
        <Button onClick={handleClick}>Connect to Spotify</Button>
      </UserLoginBox>
      <CirclesIcon />
    </React.Fragment>
  );
};

export default UserLogin;
