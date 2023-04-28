import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import {Accordion} from "react-bootstrap";

import logo from "../../images/light_background.svg";
import classes from "./Measure.module.css";
import {getDate} from "../core/getDate";
import {Fragment} from "react";

const Measure = ({closeModal, event}) => {
    return (
        <div
            className={`modal show`}
            style={{
                display: "block",
                position: "absolute",
                zIndex: 3,
            }}
        >
            <div className={classes.background}/>
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
            <Modal.Dialog style={{zIndex: 2}}>
                <Modal.Header closeButton onClick={() => closeModal()}>
                    <Modal.Title>{event.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card.Img variant="top" src={logo}/>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Дата проведения: {getDate(event.time_start)} - {getDate(event.time_end)}</ListGroup.Item>
                        <ListGroup.Item>{event.creator.firstname} {event.creator.surname}</ListGroup.Item>
                        <ListGroup.Item>Статус: {event.status}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Список участников</Accordion.Header>
                                <Accordion.Body>
                                    {event.members.map(user => (
                                            <Fragment key={user.id}>
                                                {user.surname} {user.firstname}
                                            </Fragment>
                                        )
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Краткая информация о мероприятии:</ListGroup.Item>
                        <ListGroup.Item>{event.description}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Оценка</ListGroup.Item>
                        <ListGroup.Item>4.2</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="darkGrey" onClick={() => closeModal()}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Measure;
