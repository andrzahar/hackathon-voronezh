import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './EventCreateModal.module.css';
import {createEvents} from "../../../store/services/services";
import {getUserToken} from "../../../store/selectors/authSelector";

const EventCreateModal = ({ closeModal, events, setEvents }) => {
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');

  const token = useSelector(getUserToken);

  const sendForm = async () => {
    const body = {
      name: nameValue,
      description: descriptionValue,
      time_start: startValue,
      time_end: endValue,
    };

    const resp = await createEvents(body, { Authorization: token });

    setEvents(prev => [...prev, resp]);

    closeModal();
  };

  return (
    <div
      className={`modal show`}
      style={{
        display: 'block',
        position: 'absolute',
        zIndex: 3,
      }}
    >
      <div className={classes.background} />
      <style type="text/css">
        {`
              .btn-blue {
              background-color: var(--color--blue);
              color: var(--color--grey);
          }
              .btn-darkGrey {
              background-color: var(--color--darkGrey);
              color: var(--color--grey);
          }   
              .btn-red {
              background-color: var(--color--red);
              color: var(--color--grey);
          }
          `}
      </style>
      <Modal.Dialog style={{ zIndex: 2 }}>
        <Modal.Header closeButton onClick={() => closeModal()}>
          <Modal.Title>Данные мероприятия</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Название</Form.Label>
              <Form.Control value={nameValue} onChange={e => setNameValue(e.currentTarget.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Описание</Form.Label>
              <Form.Control value={descriptionValue} onChange={e => setDescriptionValue(e.currentTarget.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Начало мероприятия</Form.Label>
              <Form.Control value={startValue} onChange={e => setStartValue(e.currentTarget.value)} type='date' />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Окончание мероприятия</Form.Label>
              <Form.Control value={endValue} onChange={e => setEndValue(e.currentTarget.value)} type='date' />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="darkGrey" onClick={sendForm}>
            Создать
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default EventCreateModal;
