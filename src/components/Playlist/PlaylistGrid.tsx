import { PlaylistContainer } from './PlaylistGrid.styles';
import PlaylistItem from './PlaylistItem';

interface PlaylistParams {
  playlists: any[];
}

const PlaylistGrid: React.FC<PlaylistParams> = (props) => {
  return (
    <PlaylistContainer>
      {props.playlists.map((playlist, i) => (
        <PlaylistItem playlist={playlist} key={i} />
      ))}
    </PlaylistContainer>
  );
};

export default PlaylistGrid;
