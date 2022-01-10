import { useEffect, useState } from 'react';
import { getUserTopTracks } from 'api';

import { Topbar, Section, Row } from 'components/Layout';
import { Loader } from 'components/UI';

import TrackTable from 'components/TrackTable/TrackTable';

const TopTracks = () => {
  const [isError, setIsError] = useState(false);
  const [topTracks, setTopTracks] = useState();

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const res = await getUserTopTracks(20);
        const data = await res.json();
        const { items } = data;

        setTopTracks(items);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchTopTracks();
  }, []);
  return (
    <>
      <Topbar>Top Tracks</Topbar>
      {isError ? (
        <p>Something went wrong.</p>
      ) : (
        <>
          <Row>
            <Section>
              {topTracks ? <TrackTable tracks={topTracks} rank /> : <Loader />}
            </Section>
          </Row>
        </>
      )}
    </>
  );
};

export default TopTracks;
