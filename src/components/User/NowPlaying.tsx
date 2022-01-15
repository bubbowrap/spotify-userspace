import { getCurrentlyPlaying } from 'api';
import { useCallback, useEffect, useState } from 'react';
import useInterval from 'hooks/useInterval';
import {
  NowPlayingContainer,
  NowPlayingHeader,
  AlbumImage,
  TrackName,
  ArtistLink,
} from './NowPlaying.styles';
import EqualizerIcon from 'components/UI/EqualizerIcon/EqualizerIcon';

interface Props {
  album: {
    external_urls: {
      spotify: string;
    };
    name: string;
    images: any[];
  };
  artists: any[];
  duration_ms: number;
  name: string;
  external_urls: {
    spotify: string;
  };
}

const NowPlaying = () => {
  const [isError, setIsError] = useState(false);
  const [playingType, setPlayingType] = useState();
  const [playingTrack, setPlayingTrack] = useState<Props>();

  const fetchNowPlaying = useCallback(async () => {
    try {
      const res = await getCurrentlyPlaying();
      const data = await res.json();
      const { item, currently_playing_type } = data;
      console.log(data);
      setPlayingType(currently_playing_type);
      setPlayingTrack((prevItem) =>
        playingType === 'track' && prevItem !== item ? item : prevItem
      );
    } catch (error) {
      setIsError(true);
    }
  }, [playingType]);

  useEffect(() => {
    fetchNowPlaying();
  }, [fetchNowPlaying]);

  useInterval(() => {
    fetchNowPlaying();
  }, 12500);

  return (
    <div style={{ margin: '1.5rem' }}>
      {!playingTrack && 'Ad Playing'}
      {isError && `Something went wrong. -- ${isError}`}
      {playingTrack && (
        <>
          <NowPlayingHeader>
            <EqualizerIcon />
            <h4>Currently Playing</h4>
          </NowPlayingHeader>
          <NowPlayingContainer>
            <AlbumImage
              src={playingTrack.album.images[2].url}
              alt={`${playingTrack.album.name} Album Artwork`}
            />
            <div style={{ overflow: 'hidden' }}>
              <TrackName
                href={playingTrack.external_urls.spotify}
                target='_blank'
                rel='noopener noreferrer'
              >
                {playingTrack.name}
              </TrackName>
              {playingTrack.artists
                .map<React.ReactNode>((artist, i) => (
                  <ArtistLink
                    href={artist.external_urls.spotify}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={i}
                  >
                    {artist.name}
                  </ArtistLink>
                ))
                .reduce((prev, curr) => [prev, ', ', curr])}
            </div>
          </NowPlayingContainer>
        </>
      )}
    </div>
  );
};

export default NowPlaying;
