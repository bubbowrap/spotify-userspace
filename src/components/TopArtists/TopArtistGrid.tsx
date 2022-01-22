import ArtistItem from './ArtistItem';
import styled from 'styled-components';
import Attribution from 'components/Attribution/Attribution';

const TopArtistsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    padding: 0 1rem;
    flex: 0 0 calc(100% / 3);
    margin-bottom: 2rem;

    a {
      margin-right: 0;
    }
  }
`;

interface artistsProps {
  imgSize?: string;
  artists: any[];
}

const TopArtistsGrid: React.FC<artistsProps> = ({ artists }) => {
  return (
    <>
      <TopArtistsContainer>
        {artists.length === 0 ? (
          <p>
            Seems you may not have any top artists. Try finding some artists you
            love.
          </p>
        ) : (
          artists.map((artist: any, i: number) => (
            <ArtistItem artist={artist} key={i} />
          ))
        )}
      </TopArtistsContainer>
      <Attribution />
    </>
  );
};

export default TopArtistsGrid;
