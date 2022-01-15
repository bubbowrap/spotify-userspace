import { useEffect, useState } from 'react';
import { getAudioFeatures, getTrackById } from 'api';
import {
  FeatureContainer,
  Image,
  TrackName,
  TrackArtist,
} from './AudioFeatures.styles';

interface artistProps {
  tracks: any;
  feature: string;
  order?: string;
}

interface trackProps {
  name: string;
  external_urls: {
    spotify: string;
  };
  artists: any[];
  album: {
    name: string;
    images: any;
  };
}

const AudioFeatures: React.FC<artistProps> = ({ tracks, order, feature }) => {
  const [isError, setIsError] = useState(false);
  const [currAudioFeatures, setCurrAudioFeatures] = useState([]);
  const [track, setTrack] = useState<trackProps>();
  const [trackId, setTrackId] = useState();

  const ids = tracks?.map((track: any) => track.id).join('%2C');

  useEffect(() => {
    const fetchAudioFeatures = async () => {
      try {
        const res = await getAudioFeatures(ids);
        const data = await res.json();
        const { audio_features } = data;

        setCurrAudioFeatures(audio_features);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    fetchAudioFeatures();
  }, [ids]);

  useEffect(() => {
    const fetchTrack = async (id: any) => {
      try {
        const res = await getTrackById(id);
        const data = await res.json();

        setTrack(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    if (trackId) {
      fetchTrack(trackId);
    }
  }, [trackId]);

  useEffect(() => {
    const audioFeatures = () => {
      const arr = currAudioFeatures;
      return arr.sort((a, b) =>
        order === 'highest'
          ? b[`${feature}`] - a[`${feature}`]
          : a[`${feature}`] - b[`${feature}`]
      )[0]['id'];
    };

    if (currAudioFeatures.length > 1) {
      setTrackId(audioFeatures());
    }
  }, [currAudioFeatures, feature, order]);

  return (
    <>
      {isError && 'Something went wrong.'}
      {track && (
        <FeatureContainer href={track.external_urls.spotify}>
          <Image src={track.album.images[1].url} alt={track.album.name} />
          <TrackName>{track.name}</TrackName>
          {track.artists
            .map<React.ReactNode>((artist, i) => (
              <TrackArtist key={i}>{artist.name}</TrackArtist>
            ))
            .reduce((prev, curr) => [prev, ', ', curr])}
        </FeatureContainer>
      )}
    </>
  );
};

export default AudioFeatures;
