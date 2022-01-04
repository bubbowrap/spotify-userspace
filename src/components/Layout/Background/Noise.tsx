import classes from './Noise.module.css';

const Noise = () => {
  return (
    <div className={classes.container}>
      <div className={classes.containerInside}>
        <div className={classes.circleSmall}></div>
        <div className={classes.circleMedium}></div>
        <div className={classes.circleLarge}></div>
        <div className={classes.circleXlarge}></div>
        <div className={classes.circleXxlarge}></div>
      </div>
    </div>
  );
};

export default Noise;
