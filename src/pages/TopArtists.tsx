import { useEffect, useState } from 'react';
import { Topbar, Row, Section } from 'components/Layout';
import { getUserTopArtists } from 'api';
import { Loader } from 'components/UI';
interface Artists {}

const TopArtists = () => {
  const [isError, setIsError] = useState(false);
  const [topArtists, setTopArtists] = useState<Artists>();

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const res = await getUserTopArtists();
        const data = await res.json();
        const { artists } = data;

        setTopArtists(artists);
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
            <Section>{topArtists ? <div></div> : <Loader />}</Section>
          </Row>
        </>
      )}
    </>
  );
};

export default TopArtists;
