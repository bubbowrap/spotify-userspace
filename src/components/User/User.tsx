import { useEffect, useState } from 'react';
import { getUserProfile, getUserFollowing } from 'api';
import { Loader } from 'components/UI';

import {
  UserContainer,
  Image,
  UserTextContainer,
  Username,
  UserDetails,
  UserCount,
} from './User.styles';

interface UserProps {
  display_name: string;
  images: any;
  followers: any;
}

interface Following {
  artists: {
    [key: string]: string;
  };
}

const User = () => {
  const [user, setUser] = useState<UserProps>();
  const [userFollowing, setUserFollowing] = useState<Following | null>();

  useEffect(() => {
    const fetchData = async () => {
      const requests: any[] = [getUserProfile(), getUserFollowing()];

      const res = await Promise.all(requests.map((url) => url));
      const [user, userFollowing]: any[] = await Promise.all(
        res.map((data) => data.json())
      );

      setUser(user);
      setUserFollowing(userFollowing);
    };

    fetchData();
  }, []);

  return (
    <UserContainer>
      {user ? (
        <>
          <Image src={user.images[0].url} />
          <UserTextContainer>
            <Username>{user.display_name}</Username>
            <UserDetails>
              <UserCount>{user.followers.total}</UserCount> Followers &bull;{' '}
              <UserCount>
                {userFollowing?.artists && userFollowing.artists.items.length}
              </UserCount>{' '}
              Following
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
