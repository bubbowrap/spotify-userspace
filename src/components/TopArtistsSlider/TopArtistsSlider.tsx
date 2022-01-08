import { useEffect, useState } from 'react';
import { getArtistsById } from 'api';
import { Loader } from 'components/UI';
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
  const [currArtists, setCurrArtists] = useState([]);

  useEffect(() => {
    const ids = props.artists
      .slice(0, props.limit)
      .map((artist: any) => artist.id)
      .join('%2C');
    const fetchArtists = async () => {
      const res = await getArtistsById(ids);
      const data = await res.json();
      const { artists } = data;
      setCurrArtists(artists);
    };

    fetchArtists();
  }, [props.artists, props.limit]);

  return (
    <SliderContainer>
      {currArtists ? (
        <Flickity
          reloadOnUpdate={true}
          options={options}
          disableImagesLoaded={false}
        >
          {currArtists.map((artist: any, i: number) => (
            <SliderItem artist={artist} key={i} />
          ))}
        </Flickity>
      ) : (
        <Loader />
      )}
    </SliderContainer>
  );
};

export default TopArtistsSlider;
