import { useSelector } from 'react-redux';

import classes from './Calendar.module.css';
import CalendarFooter from './CalendarFooter/CalendarFooter.jsx';
import CalendarBody from './CalendarBody/CalendarBody.jsx';
import { USER_ROLE } from '../core/UserRoleEnum';
import {useState} from "react";
import EventCreateModal from "../CreateModal/EventCreateModal/EventCreateModal";

const Calendar = () => {
  const role = useSelector(state => state.user.role);
  const id = useSelector(state => state.user._id);
    const [modalEventCreate, setModalEventCreate] = useState(false);

    const toggleEventModal = () => {
        setModalEventCreate(prev => !prev);
    }

  return (
    <div style={{ width: '100%' }}>
        {modalEventCreate ? <EventCreateModal closeModal={toggleEventModal} /> : <></>}

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
            <h1 className={classes.title}>Календарь мероприятий</h1>


            {role !== USER_ROLE.NONE
                ?
                <div className='p-2 mt-1' role="button" onClick={toggleEventModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>
                :
                <></>
            }

        </div>
      {role !== USER_ROLE.NONE ? (
        <CalendarBody />
      ) : (
          <div>
              <h2 className={classes.warning}>
                  Ваш id: {id}. Сообщите Ваш id администратору / представителю региональной федерации.
              </h2>
          </div>
      )}
      <CalendarFooter />
    </div>
  );
};

export default Calendar;
