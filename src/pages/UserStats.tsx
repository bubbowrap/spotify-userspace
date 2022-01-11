import { useEffect, useState } from 'react';
import { Topbar, Row, Section } from 'components/Layout';
import { getUserTopArtists } from 'api';
import { TopGenreChart } from 'components/Charts';
import { Loader } from 'components/UI';

const UserStats = () => {
  const [isError, setIsError] = useState(false);
  const [topArtists, setTopArtists] = useState<any[]>([]);

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

  // make array for top genres
  const topGenresArray = () => {
    const genreObject = topArtists
      .flatMap((artist: any) => artist.genres.flatMap((genre: string) => genre))
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
                  <h2 style={{ textAlign: 'center' }}>Your Top Genres</h2>
                  <TopGenreChart chartArray={topGenresArray()} />
                </>
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

export default UserStats;
