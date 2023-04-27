import classes from "./CalendarFooter.module.css";

const CalendarFooter = () => {
  return (
    <div>
      <div className={classes.footer}>
        <div className={classes.line}></div>
        <div className={classes.pointers}>
          <div>
            <div className={classes.circle} />
            <p className={classes.month}>Сентябрь</p>
          </div>
          <div>
            <div className={classes.circle} />
            <p className={classes.month}>Октябрь</p>
          </div>
          <div>
            <div className={classes.circle} />
            <p className={classes.month}>Ноябрь</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarFooter;
