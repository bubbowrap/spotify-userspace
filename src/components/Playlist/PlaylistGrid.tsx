import { PlaylistContainer } from './PlaylistGrid.styles';
import PlaylistItem from './PlaylistItem';

interface PlaylistParams {
  playlists: any[];
}

const PlaylistGrid: React.FC<PlaylistParams> = ({ playlists }) => {
  return (
    <PlaylistContainer>
      {playlists.map((playlist, i) => (
        <PlaylistItem playlist={playlist} key={i} />
      ))}
    </PlaylistContainer>
  );
};

export default PlaylistGrid;
