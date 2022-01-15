import { useEffect, useState } from 'react';
import { Topbar, Row, Section } from 'components/Layout';
import { getUserTopArtists, getUserTopTracks } from 'api';
import { TopGenreChart, TopDecadesChart } from 'components/Charts';
import AudioFeatures from 'components/AudioFeature/AudioFeatures';
import { Loader } from 'components/UI';

const UserStats = () => {
  const [isError, setIsError] = useState(false);

  const [topArtists, setTopArtists] = useState<any[]>();
  const [topTracks, setTopTracks] = useState<any[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests: any[] = [getUserTopArtists(50), getUserTopTracks(50)];

        const res = await Promise.all(requests.map((url) => url));
        const [getTopArtists, getTopTracks]: any[] = await Promise.all(
          res.map((data) => data.json())
        );

        setTopArtists(getTopArtists.items);
        setTopTracks(getTopTracks.items);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Topbar>Stats for Nerds</Topbar>
      {isError ? (
        <p>Something went wrong.</p>
      ) : (
        <>
          <Row>
            <Section>
              {topArtists ? (
                <>
                  <h2 style={{ textAlign: 'center' }}>Your Top Ten Genres</h2>
                  <TopGenreChart data={topArtists} />
                </>
              ) : (
                <Loader />
              )}
            </Section>
          </Row>
          <Row>
            <Section>
              {topTracks ? (
                <>
                  <h2 style={{ textAlign: 'center' }}>Your Top Decades</h2>
                  <TopDecadesChart data={topTracks} />
                </>
              ) : (
                <Loader />
              )}
            </Section>
          </Row>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {topArtists ? (
              <div style={{ flex: '0 0 33.3%' }}>
                <h3>Most Danceable Song</h3>
                <AudioFeatures
                  tracks={topTracks}
                  feature='danceability'
                  order='highest'
                />
              </div>
            ) : (
              <Loader />
            )}
            {topArtists ? (
              <div style={{ flex: '0 0 33.3%' }}>
                <h3>Happiest Song</h3>
                <AudioFeatures
                  tracks={topTracks}
                  feature='valence'
                  order='highest'
                />
              </div>
            ) : (
              <Loader />
            )}
            {topArtists ? (
              <div style={{ flex: '0 0 33.3%' }}>
                <h3>Saddest Song</h3>
                <AudioFeatures tracks={topTracks} feature='valence' />
              </div>
            ) : (
              <Loader />
            )}
            {topArtists ? (
              <div style={{ flex: '0 0 33.3%' }}>
                <h3>Longest Song</h3>
                <AudioFeatures
                  tracks={topTracks}
                  feature='duration_ms'
                  order='highest'
                />
              </div>
            ) : (
              <Loader />
            )}{' '}
            {topArtists ? (
              <div style={{ flex: '0 0 33.3%' }}>
                <h3>Highest Energy Song</h3>
                <AudioFeatures
                  tracks={topTracks}
                  feature='energy'
                  order='highest'
                />
              </div>
            ) : (
              <Loader />
            )}
            {topArtists ? (
              <div style={{ flex: '0 0 33.3%' }}>
                <h3>Chillest Song</h3>
                <AudioFeatures tracks={topTracks} feature='energy' />
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default UserStats;
