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

const PlaylistItem: React.FC<Props> = ({ playlist }) => {
  return (
    <PlaylistBox
      href={playlist.external_urls.spotify}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image src={playlist.images[0].url} alt={`${playlist.name} Playlist`} />
      <PlaylistTitle>{playlist.name}</PlaylistTitle>
      <PlaylistTotal>{playlist.tracks.total} Songs</PlaylistTotal>
    </PlaylistBox>
  );
};

export default PlaylistItem;
