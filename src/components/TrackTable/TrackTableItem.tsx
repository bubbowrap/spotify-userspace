import { durationConversion } from 'utils';

import {
  TrackTableRow,
  TrackRank,
  AlbumImage,
  TrackName,
  ArtistLink,
  AlbumLink,
  TrackDuration,
} from './TrackTableItem.styles';

interface Props {
  track: {
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
  };
  index?: number;
}

const TrackTableItem: React.FC<Props> = ({ track, index }) => {
  return (
    <TrackTableRow rank={Boolean(index)}>
      {index && <TrackRank>{index}</TrackRank>}
      <AlbumImage
        src={track.album.images[2].url}
        alt={`${track.album.name} Album Artwork`}
      />
      <div>
        <TrackName
          href={track.external_urls.spotify}
          target='_blank'
          rel='noopener noreferrer'
        >
          {track.name}
        </TrackName>
        {track.artists
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
      <AlbumLink
        href={track.album.external_urls.spotify}
        target='_blank'
        rel='noopener noreferrer'
      >
        {track.album.name}
      </AlbumLink>
      <TrackDuration>{durationConversion(track.duration_ms)}</TrackDuration>
    </TrackTableRow>
  );
};

export default TrackTableItem;
