import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import logo from '../../../images/light_background.svg';
import classes from './CalendarBody.module.css';
import Measure from '../../Measure/Measure';
import EventEditModal from '../../EditModal/EventEditModal/EventEditModal';
import { getUserToken } from '../../../store/selectors/authSelector';
import { getEvents } from '../../../store/services/services';
import { USER_ROLE } from '../../core/UserRoleEnum';
import { getDate } from '../../core/getDate';

const CalendarBody = () => {
  const [events, setEvents] = useState([]);
  const token = useSelector(getUserToken);

  useEffect(() => {
    const fetchData = async () => {
      const a = await getEvents(token);

      console.log(a);
      setEvents(a);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.calendarBody}>
      {events.map(item => (
        <CalendarItem key={item.id} event={item} />
      ))}
    </div>
  );
};

const CalendarItem = ({ event }) => {
  const [modal, setModal] = useState(false);
  const [modalEvent, setModalEvent] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const closeEventModal = () => {
    setModalEvent(false);
  };

  // const event = useSelector(state => state.event);
  const role = useSelector(state => state.user.role);

  return (
    <>
      {modal ? <Measure event={event} closeModal={() => closeModal()} /> : <></>}
      {modalEvent ? <EventEditModal closeModal={() => closeEventModal()} /> : <></>}
      <Card style={{ width: '18rem' }}>
        <style type="text/css">
          {`
                    .btn-blue {
                    background-color: var(--color--blue);
                    color: var(--color--grey);
                }
                    
                    .btn-red {
                    background-color: var(--color--red);
                    color: var(--color--grey);
                }
                `}
        </style>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Дата проведения: {getDate(event.time_start)} - {getDate(event.time_end)}
          </ListGroup.Item>
          <ListGroup.Item>
            {event.creator.firstname} {event.creator.surname}
          </ListGroup.Item>
          <ListGroup.Item>Статус: {event.status}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button className={classes.cardBtn} variant="blue" onClick={() => setModal(true)} href="#">
            Подробнее
          </Button>
          {role !== USER_ROLE.SPORTSMAN && (
            <Button className={classes.cardBtn} variant="red" onClick={() => setModalEvent(true)} href="#">
              Изменить данные о мероприятии
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default CalendarBody;
