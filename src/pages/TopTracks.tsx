import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/UI/ErrorFallback/ErrorFallback';
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Row>
            <Section>
              {topTracks ? <TrackTable tracks={topTracks} rank /> : <Loader />}
            </Section>
          </Row>
        </ErrorBoundary>
      )}
    </>
  );
};

export default TopTracks;
