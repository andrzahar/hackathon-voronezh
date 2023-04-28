import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import {Accordion} from "react-bootstrap";

import logo from "../../images/light_background.svg";
import classes from "./Measure.module.css";
import {useSelector} from "react-redux";

const Measure = ({closeModal}) => {
    const event = useSelector(state => state.event);

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
                    <Modal.Title>Название мероприятия</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Card.Img variant="top" src={logo}/>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Дата проведения: {event.start} - {event.end}</ListGroup.Item>
                        <ListGroup.Item>
                            Федерация спортивного программирования
                        </ListGroup.Item>
                        <ListGroup.Item>Статус: {event.status}</ListGroup.Item>
                    </ListGroup>
                    <ListGroup>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Список участников</Accordion.Header>
                                <Accordion.Body>
                                    {event.members.map(user => (
                                            <div>
                                                {user.eventMember.user.surname} {user.eventMember.user.name}
                                            </div>
                                        )
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Краткая информация о мероприятии:</ListGroup.Item>
                        <ListGroup.Item>
                        X-MAS HACK 2022 – это не просто хакатон. Это масштабное мероприятие,
                        в котором шансы попытать удачу есть у каждого.
                        <br/>
                        Идеатон на X-MAS HACK – секция, в которой ты можешь предложить свою
                        идею, проработанную по определенным критериям, обсудить ее с
                        экспертом и побороться за денежный приз.
                        <br/>
                        Общий призовой фонд X-MAS HACK 2022 составляет 1 700 000 рублей.
                        </ListGroup.Item>
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
