import { useEffect, useState } from 'react';
import { Topbar, Row, Section } from 'components/Layout';
import { getUserTopArtists } from 'api';
import TopArtistsGrid from 'components/TopArtists/TopArtistGrid';
import { Loader } from 'components/UI';

const TopArtists = () => {
  const [isError, setIsError] = useState(false);
  const [topArtists, setTopArtists] = useState<any[]>();

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const res = await getUserTopArtists(50);
        const data = await res.json();
        const { items } = data;

        setTopArtists(items);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchTopArtists();
  }, []);

  return (
    <>
      <Topbar>Top Artists</Topbar>
      {isError ? (
        <p>Something went wrong.</p>
      ) : (
        <>
          <Row>
            <Section>
              {topArtists ? (
                <TopArtistsGrid artists={topArtists} />
              ) : (
                <Loader />
              )}
            </Section>
          </Row>
        </>
      )}
    </>
  );
};

export default TopArtists;
