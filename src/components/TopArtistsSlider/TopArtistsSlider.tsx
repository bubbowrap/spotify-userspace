import { useEffect, useState } from 'react';
import { getArtistsById } from 'api';
import SliderItem from './SliderItem';
import Flickity from 'react-flickity-component';
import 'assets/css/flickity.css';
import styled from 'styled-components';

export const SliderContainer = styled.div`
  margin-right: -2rem;
`;

interface artistProps {
  artists: any[];
  limit?: number;
}

const options = {
  freeScroll: true,
  contain: true,
  pageDots: false,
  bgLazyLoad: true,
};

const TopArtistsSlider: React.FC<artistProps> = (props) => {
  const [isError, setIsError] = useState(false);

  const [currArtists, setCurrArtists] = useState([]);

  useEffect(() => {
    const ids = props.artists.map((artist: any) => artist.id).join('%2C');

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

    fetchArtists();
  }, [props.artists]);

  return (
    <SliderContainer>
      {isError && <p>Something went wrong.</p>}
      <Flickity
        reloadOnUpdate={true}
        options={options}
        disableImagesLoaded={false}
      >
        {currArtists.map((artist: any, i: number) => (
          <SliderItem artist={artist} key={i} />
        ))}
      </Flickity>
    </SliderContainer>
  );
};

export default TopArtistsSlider;
