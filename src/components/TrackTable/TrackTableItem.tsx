import { durationConversion } from 'utils';

import {
  TrackTableRow,
  AlbumImage,
  TrackName,
  LinkItem,
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
}

const TrackTableItem: React.FC<Props> = (props) => {
  return (
    <TrackTableRow>
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
            <LinkItem
              href={artist.external_urls.spotify}
              target='_blank'
              rel='noopener noreferrer'
              key={i}
            >
              {artist.name}
            </LinkItem>
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
      <LinkItem
        href={props.track.album.external_urls.spotify}
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.track.album.name}
      </LinkItem>
      <TrackDuration>
        {durationConversion(props.track.duration_ms)}
      </TrackDuration>
    </TrackTableRow>
  );
};

export default TrackTableItem;
