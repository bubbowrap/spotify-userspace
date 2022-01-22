import { useEffect, useState } from 'react';
import { getArtistsById } from 'api';
import ArtistItem from './ArtistItem';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';
import 'assets/css/flickity.css';
import styled from 'styled-components';
import Attribution from 'components/Attribution/Attribution';
import theme from 'styles/theme';
const { breakpoints } = theme;

export const SliderContainer = styled.div`
  margin-right: -0.5rem;

  @media screen and ${breakpoints.md} {
    margin-right: -2rem;
  }
`;

interface artistProps {
  artists: any[];
}

const options = {
  freeScroll: true,
  contain: true,
  pageDots: false,
  imagesLoaded: true,
};

const TopArtistsSlider: React.FC<artistProps> = ({ artists }) => {
  const [isError, setIsError] = useState(false);

  const [currArtists, setCurrArtists] = useState([]);

  const ids = artists.map((artist: any) => artist.id).join('%2C');

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await getArtistsById(ids);
        const data = await res.json();
        const { artists } = data;
        setCurrArtists(artists);
      } catch (error) {
        setIsError(true);
      }
    };
    if (ids !== '' || ids.length > 0) fetchArtists();
  }, [ids]);

  return (
    <SliderContainer>
      {isError && <p>Something went wrong.</p>}
      {currArtists.length === 0 ? (
        <p>
          Seems you may not have any top artists. Try finding some artists you
          love.
        </p>
      ) : (
        <>
          <Flickity
            reloadOnUpdate={true}
            options={options}
            disableImagesLoaded={false}
          >
            {currArtists.map((artist: any, i: number) => (
              <ArtistItem artist={artist} imgSize='large' key={i} />
            ))}
          </Flickity>
          <Attribution position='start' />
        </>
      )}
    </SliderContainer>
  );
};

export default TopArtistsSlider;
