interface Props {
  track: {
    name: string;
  };
}

const TrackTableItem: React.FC<Props> = (props) => {
  return <div>{props.track.name}</div>;
};

export default TrackTableItem;
