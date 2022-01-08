import {
  PlaylistBox,
  Image,
  PlaylistTitle,
  PlaylistTotal,
} from './PlaylistItem.styles';

interface Props {
  playlist: {
    external_urls: {
      spotify: string;
    };
    images: any[];
    name: string;
    tracks: {
      total: number;
    };
  };
}

const PlaylistItem: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <PlaylistBox
      href={props.playlist.external_urls.spotify}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        src={props.playlist.images[0].url}
        alt={`${props.playlist.name} Playlist`}
      />
      <PlaylistTitle>{props.playlist.name}</PlaylistTitle>
      <PlaylistTotal>{props.playlist.tracks.total} Songs</PlaylistTotal>
    </PlaylistBox>
  );
};

export default PlaylistItem;
