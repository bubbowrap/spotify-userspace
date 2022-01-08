import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserTopTracks, getUserTopArtists, getUserPlaylists } from 'api';
import TrackTable from 'components/TrackTable/TrackTable';
import PlaylistGrid from 'components/Playlist/PlaylistGrid';
import TopArtistsSlider from 'components/TopArtistsSlider/TopArtistsSlider';
import { Section, Row, SectionHeader } from 'components/Layout';

const Homepage = () => {
  interface apiProps {
    items: any[];
  }

  const [topTracks, setTopTracks] = useState<apiProps>();
  const [topArtists, setTopArtists] = useState<apiProps>();
  const [playlists, setPlaylists] = useState<apiProps>();

  useEffect(() => {
    const fetchData = async () => {
      const requests: any[] = [
        getUserTopTracks(),
        getUserTopArtists(),
        getUserPlaylists(),
      ];

      const res = await Promise.all(requests.map((url) => url));
      const [getTopTracks, getTopArtists, getPlaylists]: any[] =
        await Promise.all(res.map((data) => data.json()));

      setTopArtists(getTopArtists);
      setTopTracks(getTopTracks);
      setPlaylists(getPlaylists);
    };

    fetchData();
  }, []);

  return (
    <>
      <Row>
        <Section>
          <SectionHeader>
            <h2>Your Top Artists</h2>
            <Link to='/top-artists'>See More</Link>
          </SectionHeader>
          {topArtists && (
            <TopArtistsSlider artists={topArtists.items} limit={5} />
          )}
        </Section>
      </Row>
      <Row>
        <Section>
          <SectionHeader>
            <h2>Your Top Tracks</h2>
            <Link to='/top-tracks'>See More</Link>
          </SectionHeader>
          {topTracks && <TrackTable tracks={topTracks.items} limit={5} />}
        </Section>
      </Row>
      <Row>
        <Section>
          <SectionHeader>
            <h2>Your Top PlayLists</h2>
            <Link to='/playlists'>See More</Link>
          </SectionHeader>
          {playlists && <PlaylistGrid playlists={playlists.items} limit={5} />}
        </Section>
      </Row>
    </>
  );
};

export default Homepage;
