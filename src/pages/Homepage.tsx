import { useEffect } from 'react';
import { getUserTopTracks, getUserTopArtists } from 'api';

const Homepage = () => {
  // type UserProps = {
  //   display_name: string;
  //   images: any;
  //   followers: any;
  // };
  //const [userProfile, setUserProfile] = useState<UserProps>();

  useEffect(() => {
    const fetchData = async () => {
      const requests: any[] = [getUserTopTracks(), getUserTopArtists()];

      const [getTopTracks, getTopArtists]: any[] = await Promise.all(
        requests.map((url) => url)
      ).then(async (res) =>
        Promise.all(res.map(async (data) => await data.json()))
      );
      console.log(getTopTracks, getTopArtists);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Your Top Artists</h1>
      <div></div>
    </div>
  );
};

export default Homepage;
