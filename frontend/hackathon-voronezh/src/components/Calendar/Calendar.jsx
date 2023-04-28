import {useSelector} from 'react-redux';

import classes from './Calendar.module.css';
import CalendarFooter from './CalendarFooter/CalendarFooter.jsx';
import CalendarBody from './CalendarBody/CalendarBody.jsx';

const Calendar = () => {
    const role = useSelector(state => state.user.role);
    const id = useSelector(state => state.user._id);

    return (
        <div style={{width: '100%'}}>
            <h1 className={classes.title}>Календарь мероприятий</h1>
            {role !== 'none' ? (

                <CalendarBody/>
            ) : (
                <div>
                    <h2 className={classes.warning}>
                        Ваш id: {id}. Сообщите Ваш id администратору / представителю региональной федерации.
                    </h2>
                </div>
            )
            }
            <CalendarFooter/>
        </div>
    );
};

export default Calendar;
