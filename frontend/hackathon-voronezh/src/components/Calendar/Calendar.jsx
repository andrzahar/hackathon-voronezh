import classes from "./Calendar.module.css";
import CalendarFooter from "./CalendarFooter/CalendarFooter.jsx";
import CalendarBody from "./CalendarBody/CalendarBody.jsx";

const Calendar = () => {
  return (
    <div style={{ width: "100%" }}>
      <h1 className={classes.title}>Календарь мероприятий</h1>
      <CalendarBody />
      <CalendarFooter />
    </div>
  );
};

export default Calendar;
