import { useEffect, useState } from 'react';
import { Topbar, Row, Section } from 'components/Layout';
import { getUserTopArtists, getUserTopTracks } from 'api';
import { TopGenreChart, TopDecadesChart } from 'components/Charts';
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

  // make array for top genres
  const topGenresArray = () => {
    const genreObject = topArtists
      ?.flatMap((artist: any) =>
        artist.genres.flatMap((genre: string) => genre)
      )
      .reduce((prev: any, curr: any) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
      }, {});
    let genreArray = [];
    for (let genre in genreObject) {
      genreArray.push([genre, genreObject[genre]]);
    }
    return genreArray.sort((a, b) => b[1] - a[1]).slice(0, 10);
  };

  // make array for top decades
  const topDecadesArray = () => {
    const yearObject = topTracks
      ?.flatMap((track: any) => track.album.release_date.slice(0, 4))
      .map((year) => year.slice(0, 3))
      .reduce((prev: any, curr: any) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
      }, {});
    let yearArray = [];
    for (let year in yearObject) {
      yearArray.push([`${year}0s`, yearObject[year]]);
    }

    return yearArray.sort((a, b) => a[1] - b[1]);
  };

  console.log(topDecadesArray());

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
                  <TopGenreChart chartArray={topGenresArray()} />
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
                  <TopDecadesChart chartArray={topDecadesArray()} />
                </>
              ) : (
                <Loader />
              )}
            </Section>
            <Section>
              <Row>
                <Section>
                  {topTracks ? (
                    <>
                      <h2 style={{ textAlign: 'center' }}>
                        Average Song Length
                      </h2>
                      5 minutes
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
                      <h2 style={{ textAlign: 'center' }}>
                        You Typically Listen In:
                      </h2>
                      The morning
                    </>
                  ) : (
                    <Loader />
                  )}
                </Section>
              </Row>
            </Section>
          </Row>
          <Row>
            <div>Your most danceable song:</div>
            <div>Your happiest song:</div>
            <div>Your saddest song:</div>
            <div>Your chillest song:</div>
            <div>Your most popular song:</div>
            <div>Your least popular song:</div>
          </Row>
        </>
      )}
    </>
  );
};

export default UserStats;
