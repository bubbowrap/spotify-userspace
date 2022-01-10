import { TrackTableContainer } from './TrackTable.styles';
import TrackTableItem from './TrackTableItem';

interface TableParams {
  tracks: any[];
  rank?: Boolean;
}

const TrackTable: React.FC<TableParams> = (props) => {
  return (
    <TrackTableContainer>
      {props.tracks &&
        props.tracks.map((track, i) => (
          <TrackTableItem track={track} index={props.rank && i + 1} key={i} />
        ))}
    </TrackTableContainer>
  );
};

export default TrackTable;
