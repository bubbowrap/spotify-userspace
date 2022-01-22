import PlaylistItem from './PlaylistItem';
import styled from 'styled-components';
import Attribution from 'components/Attribution/Attribution';

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
      {playlists.length === 0 ? (
        <p>Seems you haven't created any playlist. Try making one now.</p>
      ) : (
        playlists.map((playlist, i) => (
          <PlaylistItem playlist={playlist} key={i} />
        ))
      )}
      <Attribution />
    </PlaylistContainer>
  );
};

export default PlaylistGrid;
