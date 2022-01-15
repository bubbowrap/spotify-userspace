import { TrackTableContainer } from './TrackTable.styles';
import TrackTableItem from './TrackTableItem';

interface TableParams {
  tracks: any[];
  rank?: Boolean;
}

const TrackTable: React.FC<TableParams> = ({ tracks, rank }) => {
  return (
    <TrackTableContainer>
      {tracks &&
        tracks.map((track, i) => (
          <TrackTableItem track={track} index={rank && i + 1} key={i} />
        ))}
    </TrackTableContainer>
  );
};

export default TrackTable;
