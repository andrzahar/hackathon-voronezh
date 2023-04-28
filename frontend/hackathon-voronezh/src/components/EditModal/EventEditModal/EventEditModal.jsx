import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './EventEditModal.module.css';

const EventEditModal = ({ closeModal }) => {
  const eventInfo = useSelector(state => state.event);

  const [nameValue, setNameValue] = useState(eventInfo.name);
  const [descriptionValue, setDescriptionValue] = useState(eventInfo.description);
  const [startValue, setStartValue] = useState(eventInfo.start);
  const [endValue, setEndValue] = useState(eventInfo.end);
  const [statusValue, setStatusValue] = useState(eventInfo.status);

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
            {/* <div className={classes.personal_img} onClick={() => changeImage()}> */}
            {/*    <img className={classes.avatar} src={logo}/> */}
            {/* </div> */}
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
              <Form.Control value={startValue} onChange={e => setStartValue(e.currentTarget.value)} type={'date'} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Окончание мероприятия</Form.Label>
              <Form.Control value={endValue} onChange={e => setEndValue(e.currentTarget.value)} type={'date'} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Статус</Form.Label>
              <Form.Control value={statusValue} onChange={e => setStatusValue(e.currentTarget.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="darkGrey" onClick={() => closeModal()}>
            Изменить
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default EventEditModal;
