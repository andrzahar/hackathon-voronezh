import classes from './Calendar.module.css';
import CalendarFooter from './CalendarFooter/CalendarFooter.jsx';
import CalendarBody from './CalendarBody/CalendarBody.jsx';
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getEvents} from "../../store/services/services";
import {getUserToken} from "../../store/selectors/authSelector";

const Calendar = () => {
    const role = useSelector(state => state.user.role);
    const id = useSelector(state => state.user.id);

    return (
        <div style={{width: '100%'}}>
            <h1 className={classes.title}>Календарь мероприятий</h1>
            {role !== 'none' ?
                <CalendarBody/> :
                <div>
                    <h2 className={classes.warning}>
                        Ваш id: {id}
                    </h2>
                    <h2 className={classes.warning}>
                        Обратитесь к вашему представителю / админимтратору для получения доступа
                    </h2>
                </div>
            }
            <CalendarFooter/>
        </div>
    );
};

export default Calendar;
