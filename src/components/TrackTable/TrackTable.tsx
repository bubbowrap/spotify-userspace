import { TrackTableContainer } from './TrackTable.styles';
import TrackTableItem from './TrackTableItem';

interface TableParams {
  tracks: any[];
  limit?: number;
}

const TrackTable: React.FC<TableParams> = (props) => {
  return (
    <TrackTableContainer>
      {props.tracks &&
        props.tracks
          .slice(0, props.limit)
          .map((track, i) => <TrackTableItem track={track} key={i} />)}
    </TrackTableContainer>
  );
};

export default TrackTable;
