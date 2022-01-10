import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserTopTracks, getUserTopArtists, getUserPlaylists } from 'api';
import TrackTable from 'components/TrackTable/TrackTable';
import PlaylistGrid from 'components/Playlist/PlaylistGrid';
import TopArtistsSlider from 'components/TopArtistsSlider/TopArtistsSlider';
import { Topbar, Section, Row, SectionHeader } from 'components/Layout';
import { Loader } from 'components/UI';

interface apiProps {
  items: any[];
}

const Homepage = () => {
  const [isError, setIsError] = useState(false);

  const [topTracks, setTopTracks] = useState<apiProps>();
  const [topArtists, setTopArtists] = useState<apiProps>();
  const [playlists, setPlaylists] = useState<apiProps>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests: any[] = [
          getUserTopTracks(5),
          getUserTopArtists(10),
          getUserPlaylists(8),
        ];

        const res = await Promise.all(requests.map((url) => url));
        const [getTopTracks, getTopArtists, getPlaylists]: any[] =
          await Promise.all(res.map((data) => data.json()));

        setTopArtists(getTopArtists);
        setTopTracks(getTopTracks);
        setPlaylists(getPlaylists);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isError && <p>Something went wrong.</p>}
      <>
        <Topbar>Spotify Overview</Topbar>
        <Row>
          <Section>
            <SectionHeader>
              <h2>Your Top Artists</h2>
              <Link to='/top-artists'>See More</Link>
            </SectionHeader>
            {topArtists ? (
              <TopArtistsSlider artists={topArtists.items} />
            ) : (
              <Loader />
            )}
          </Section>
        </Row>
        <Row>
          <Section>
            <SectionHeader>
              <h2>Your Top Tracks</h2>
              <Link to='/top-tracks'>See More</Link>
            </SectionHeader>
            {topTracks ? <TrackTable tracks={topTracks.items} /> : <Loader />}
          </Section>
        </Row>
        <Row>
          <Section>
            <SectionHeader>
              <h2>Your Top PlayLists</h2>
              <Link to='/playlists'>See More</Link>
            </SectionHeader>
            {playlists ? (
              <PlaylistGrid playlists={playlists.items} />
            ) : (
              <Loader />
            )}
          </Section>
        </Row>
      </>
    </>
  );
};

export default Homepage;
