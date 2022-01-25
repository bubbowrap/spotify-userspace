import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/UI/ErrorFallback/ErrorFallback';
import { getUserPlaylists } from 'api';
import PlaylistGrid from 'components/Playlist/PlaylistGrid';
import { Topbar, Row, Section } from 'components/Layout';
import { Loader } from 'components/UI';

const Playlists = () => {
  const [isError, setIsError] = useState(false);
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await getUserPlaylists(50);
        const data = await res.json();
        const { items } = data;

        setPlaylists(items);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchPlaylists();
  }, []);

  return (
    <>
      <Topbar>Your Playlists</Topbar>
      {isError ? (
        <p>Something went wrong.</p>
      ) : (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Row>
            <Section>
              {playlists ? <PlaylistGrid playlists={playlists} /> : <Loader />}
            </Section>
          </Row>
        </ErrorBoundary>
      )}
    </>
  );
};

export default Playlists;
