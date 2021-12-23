import {
  UserContainer,
  Image,
  UserTextContainer,
  Username,
  UserDetails,
  UserCount,
} from './User.styles';

const User = () => {
  return (
    <UserContainer>
      <Image />
      <UserTextContainer>
        <Username>Username</Username>
        <UserDetails>
          <UserCount>7</UserCount> Followers &bull; <UserCount>26</UserCount>{' '}
          Following
        </UserDetails>
      </UserTextContainer>
    </UserContainer>
  );
};

export default User;
