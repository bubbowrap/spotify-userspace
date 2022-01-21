import { useEffect, useState } from 'react';
import { Topbar, Row } from 'components/Layout';
import { getUserTopArtists, getUserTopTracks } from 'api';
import { TopGenreChart, TopDecadesChart } from 'components/Charts';
import AudioFeatures from 'components/AudioFeatures/AudioFeatures';
import { Loader } from 'components/UI';

import styled from 'styled-components';

const StatsSection = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }
`;

const StatsTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 1;
  flex: 40%;
`;

const StatsBox = styled.div`
  flex: 60%;
`;

const AudioFeatureContainer = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 0.75rem;
    flex: 0 0 25%;
  }

  & > *:last-child {
    flex-basis: 100%;
  }
`;
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
            <StatsSection>
              {topArtists?.length === 0 ? (
                <p>
                  Seems you may not have any top artists. Try finding some
                  artists you love.
                </p>
              ) : topArtists ? (
                <>
                  <StatsTitle>Your Top 10 Genres</StatsTitle>
                  <StatsBox style={{ flexBasis: '75%' }}>
                    <TopGenreChart data={topArtists} />
                  </StatsBox>
                </>
              ) : (
                <Loader />
              )}
            </StatsSection>
          </Row>
          <Row>
            <StatsSection>
              {topTracks?.length === 0 ? (
                <p>
                  Seems you may not have any top tracks. Try finding some music
                  you love.
                </p>
              ) : topTracks ? (
                <>
                  <StatsBox style={{ flexBasis: '40%' }}>
                    <TopDecadesChart data={topTracks} />
                  </StatsBox>
                  <StatsTitle>Your Favorite Decades</StatsTitle>
                </>
              ) : (
                <Loader />
              )}
            </StatsSection>
          </Row>
          <Row>
            <StatsSection>
              {topArtists?.length === 0 ? (
                <p>
                  Seems you may not have any top artists. Try finding some
                  artists you love.
                </p>
              ) : topArtists ? (
                <>
                  <StatsTitle>Song Breakdown</StatsTitle>
                  <StatsBox>
                    <AudioFeatureContainer>
                      <h3>Most Danceable</h3>
                      <AudioFeatures
                        tracks={topTracks}
                        feature='danceability'
                        order='highest'
                      />
                    </AudioFeatureContainer>

                    <AudioFeatureContainer>
                      <h3>Happiest</h3>
                      <AudioFeatures
                        tracks={topTracks}
                        feature='valence'
                        order='highest'
                      />
                    </AudioFeatureContainer>

                    <AudioFeatureContainer>
                      <h3>Saddest</h3>
                      <AudioFeatures tracks={topTracks} feature='valence' />
                    </AudioFeatureContainer>

                    <AudioFeatureContainer>
                      <h3>Longest</h3>
                      <AudioFeatures
                        tracks={topTracks}
                        feature='duration_ms'
                        order='highest'
                      />
                    </AudioFeatureContainer>

                    <AudioFeatureContainer>
                      <h3>Highest Energy</h3>
                      <AudioFeatures
                        tracks={topTracks}
                        feature='energy'
                        order='highest'
                      />
                    </AudioFeatureContainer>

                    <AudioFeatureContainer>
                      <h3>Chillest</h3>
                      <AudioFeatures tracks={topTracks} feature='energy' />
                    </AudioFeatureContainer>
                  </StatsBox>
                </>
              ) : (
                <Loader />
              )}
            </StatsSection>
          </Row>
        </>
      )}
    </>
  );
};

export default UserStats;
