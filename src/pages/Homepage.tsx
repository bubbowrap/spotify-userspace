import { useEffect, useState } from 'react';
import { getUserTopTracks, getUserTopArtists } from 'api';
import TrackTable from 'components/TrackTable/TrackTable';

const Homepage = () => {
  interface tracksProps {
    items: any[];
  }

  interface artistsProps {
    items: any[];
  }
  const [topTracks, setTopTracks] = useState<tracksProps>();
  const [topArtists, setTopArtists] = useState<artistsProps>();

  useEffect(() => {
    const fetchData = async () => {
      const requests: any[] = [getUserTopTracks(), getUserTopArtists()];

      const [getTopTracks, getTopArtists]: any[] = await Promise.all(
        requests.map((url) => url)
      ).then(async (res) =>
        Promise.all(res.map(async (data) => await data.json()))
      );
      setTopArtists(getTopArtists);
      setTopTracks(getTopTracks);
    };

    fetchData();
    console.log(topTracks);
  }, []);

  return (
    <div>
      <h2>Your Top Artists</h2>
      <h2>Your Top Tracks</h2>
      {topTracks && <TrackTable tracks={topTracks.items} />}
    </div>
  );
};

export default Homepage;
