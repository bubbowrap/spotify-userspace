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

const TrackTableItem: React.FC<Props> = (props) => {
  return (
    <TrackTableRow rank={Boolean(props.index)}>
      {props.index && <TrackRank>{props.index}</TrackRank>}
      <AlbumImage
        src={props.track.album.images[2].url}
        alt={`${props.track.album.name} Album Artwork`}
      />
      <div>
        <TrackName
          href={props.track.external_urls.spotify}
          target='_blank'
          rel='noopener noreferrer'
        >
          {props.track.name}
        </TrackName>
        {props.track.artists
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
        href={props.track.album.external_urls.spotify}
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.track.album.name}
      </AlbumLink>
      <TrackDuration>
        {durationConversion(props.track.duration_ms)}
      </TrackDuration>
    </TrackTableRow>
  );
};

export default TrackTableItem;
