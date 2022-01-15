import PlaylistItem from './PlaylistItem';
import styled from 'styled-components';

export const PlaylistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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
