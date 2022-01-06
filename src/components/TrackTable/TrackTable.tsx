import { Loader } from 'components/UI';
import { TrackTableContainer } from './TrackTable.styles';
import TrackTableItem from './TrackTableItem';

interface TrackList {
  tracks: any[];
}

const TrackTable: React.FC<TrackList> = (props) => {
  return (
    <TrackTableContainer>
      {props ? (
        props.tracks
          .slice(0, 5)
          .map((track, i) => <TrackTableItem track={track} key={i} />)
      ) : (
        <Loader />
      )}
    </TrackTableContainer>
  );
};

export default TrackTable;
