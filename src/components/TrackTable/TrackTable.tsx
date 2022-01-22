import { TrackTableContainer } from './TrackTable.styles';
import TrackTableItem from './TrackTableItem';
import Attribution from 'components/Attribution/Attribution';

interface TableParams {
  tracks: any[];
  rank?: Boolean;
}

const TrackTable: React.FC<TableParams> = ({ tracks, rank }) => {
  return (
    <>
      <TrackTableContainer>
        {tracks.length === 0 ? (
          <p>
            Seems you may not have any top tracks. Try finding some music you
            love.
          </p>
        ) : (
          tracks.map((track, i) => (
            <TrackTableItem track={track} index={rank && i + 1} key={i} />
          ))
        )}
      </TrackTableContainer>
      <Attribution />
    </>
  );
};

export default TrackTable;
