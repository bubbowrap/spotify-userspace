import { useEffect, useState } from 'react';
import { getAudioFeatures, getTrackById } from 'api';

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

  const ids = tracks?.map((track: any) => track.id).join('%2C');

  const getAudioFeatureId = () => {
    return currAudioFeatures.sort((a, b) =>
      order === 'highest'
        ? b[`${feature}`] - a[`${feature}`]
        : a[`${feature}`] - b[`${feature}`]
    )[0]['id'];
  };
  useEffect(() => {
    const fetchAudioFeatures = async () => {
      try {
        const audioRes = await getAudioFeatures(ids);
        const data = await audioRes.json();
        const { audio_features } = data;
        setCurrAudioFeatures(audio_features);

        fetchTrack();
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    const fetchTrack = async () => {
      try {
        const res = await getTrackById(getAudioFeatureId());
        const data = await res.json();
        setTrack(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    fetchAudioFeatures();
  }, [ids]);

  //order audio features by selected feature
  // get the first item's id

  return (
    <>
      {isError && 'Something went wrong.'}
      {track && (
        <a href={track.external_urls.spotify}>
          <img src={track.album.images[1].url} alt={track.album.name} />
          <strong>{track.name}</strong>
          {track.artists
            .map<React.ReactNode>((artist, i) => (
              <span key={i}>{artist.name}</span>
            ))
            .reduce((prev, curr) => [prev, ', ', curr])}
        </a>
      )}
    </>
  );
};

export default AudioFeatures;
