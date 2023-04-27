import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../../images/light_background.svg";
import Card from "react-bootstrap/Card";
import {Accordion} from "react-bootstrap";
import classes from './EditModal.module.css'
import Form from "react-bootstrap/Form";

const EditModal = ({closeModal}) => {
    console.log('modal');
    return (
        <div
            className={`modal show`}
            style={{
                display: 'block', position: 'absolute',
                zIndex: 3
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
                `
                }
            </style>
            <Modal.Dialog style={{zIndex:2}}>
                <Modal.Header closeButton onClick={() => closeModal()}>
                    <Modal.Title>Данные пользователя</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="darkGrey" onClick={() => closeModal()}>Закрыть</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default EditModal;