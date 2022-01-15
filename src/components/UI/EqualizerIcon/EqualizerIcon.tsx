import classes from './EqualizerIcon.module.css';

const EqualizerIcon = () => {
  return (
    <div className={classes.equalizer}>
      <i className={classes.firstBar}></i>
      <i className={classes.secondBar}></i>
      <i className={classes.thirdBar}></i>
      <i className={classes.fourthBar}></i>
    </div>
  );
};

export default EqualizerIcon;
