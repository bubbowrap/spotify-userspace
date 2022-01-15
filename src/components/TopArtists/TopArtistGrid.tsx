import ArtistItem from './ArtistItem';
import styled from 'styled-components';

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
    <TopArtistsContainer>
      {artists.map((artist: any, i: number) => (
        <ArtistItem artist={artist} key={i} />
      ))}
    </TopArtistsContainer>
  );
};

export default TopArtistsGrid;
