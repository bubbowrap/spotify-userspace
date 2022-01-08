import { PlaylistContainer } from './PlaylistGrid.styles';
import PlaylistItem from './PlaylistItem';

interface PlaylistParams {
  playlists: any[];
  limit?: number;
}

const PlaylistGrid: React.FC<PlaylistParams> = (props) => {
  return (
    <PlaylistContainer>
      {props.playlists.slice(0, props.limit).map((playlist, i) => (
        <PlaylistItem playlist={playlist} key={i} />
      ))}
    </PlaylistContainer>
  );
};

export default PlaylistGrid;
