import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../../images/light_background.svg";
import Card from "react-bootstrap/Card";
import {Accordion} from "react-bootstrap";
import classes from './EditModal.module.css'
import Form from "react-bootstrap/Form";
import {useState} from "react";
import avatar from '../../images/avatar.webp'
import account from '../../images/account.svg'

const EditModal = ({closeModal}) => {
    const [nameValue, setNameValue]=useState('Роман');
    const [snValue, setSnValue]=useState('Адамович');
    const [patrValue, setPatrValue]=useState('Николаевич');
    const [pasValue, setPasValue]=useState('1232142');
    const [omsValue, setOmsValue]=useState('1232142');

    const avatar = null;

    const changeImage=()=>{

    }

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
                        <div className={classes.personal_img} onClick={()=>changeImage()}>
                            <img className={classes.avatar}
                                 src={avatar ? avatar : account}
                            />
                        </div>
                        <Form.Group className="mb-3">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control value={snValue} onChange={(e)=>setSnValue(e.currentTarget.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control value={nameValue} onChange={(e)=>setPasValue(e.currentTarget.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Отчество</Form.Label>
                            <Form.Control value={patrValue} onChange={(e)=>setPatrValue(e.currentTarget.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Серия номер паспорта</Form.Label>
                            <Form.Control value={pasValue} onChange={(e)=>setPasValue(e.currentTarget.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>ПОЛИС</Form.Label>
                            <Form.Control value={omsValue} onChange={(e)=>setOmsValue(e.currentTarget.value)}/>
                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="darkGrey" onClick={() => closeModal()}>Изменить</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default EditModal;