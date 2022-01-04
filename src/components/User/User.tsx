import { useEffect, useState } from 'react';
import { getUser } from 'api';
import { Loader } from 'components/UI';

import {
  UserContainer,
  Image,
  UserTextContainer,
  Username,
  UserDetails,
  UserCount,
} from './User.styles';

const User = () => {
  type UserProps = {
    display_name: string;
    images: any;
    followers: any;
  };
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    getUser()
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <UserContainer>
      {user ? (
        <>
          <Image src={user.images[0].url} />
          <UserTextContainer>
            <Username>{user.display_name}</Username>
            <UserDetails>
              <UserCount>{user.followers.total}</UserCount> Followers
            </UserDetails>
          </UserTextContainer>
        </>
      ) : (
        <Loader />
      )}
    </UserContainer>
  );
};

export default User;
