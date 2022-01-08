import { useEffect, useState } from 'react';
import { getArtistsById } from 'api';
import { Loader } from 'components/UI';
import SliderItem from './SliderItem';
import { SliderContainer, SliderTrack } from './TopArtistsSlider.styles';

interface artistProps {
  artists: any[];
  limit?: number;
}

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
  console.log(currArtists);

  return (
    <SliderContainer>
      <SliderTrack>
        {currArtists ? (
          currArtists.map((artist: any, i: number) => (
            <SliderItem artist={artist} key={i} />
          ))
        ) : (
          <Loader />
        )}
      </SliderTrack>
    </SliderContainer>
  );
};

export default TopArtistsSlider;
