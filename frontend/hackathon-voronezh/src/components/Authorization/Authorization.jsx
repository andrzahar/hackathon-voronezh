import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Authorization.module.css'
import {useDispatch} from "react-redux";

const Authorization = () => {
    const [auth, setAuth] = useState(true);
    const [modal, setModal] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const closeModal = () => {
        setModal(false);
    }

    const checkAuthUser = () => {
        console.log('log');
        // if (login != null && password != null) {
        //     dispatch(enterUser(login, password));
        // }
    }

    const regAuthUser = () => {
        // if (login != null && password != null) {
        //     dispatch(createUser(login, password));
        //     setModal(true);
        // }
    }

    return (
        <>
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
                `
                }
            </style>
            {/*{modal ? <ModalReg closeModal={() => closeModal()}/> : <></>}*/}
            {
                auth ?
                    <>
                        <div className={classes.authorization}>
                            <Form className={classes.form}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control type="text" placeholder="Введите логин"
                                                  value={login} onChange={(e) => setLogin(e.currentTarget.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Введите пароль"
                                                  value={password} onChange={(e) => setPassword(e.currentTarget.value)}
                                    />
                                </Form.Group>
                                <Button type="submit"
                                        variant={'blue'}
                                        onClick={() => checkAuthUser()}
                                >
                                    Войти
                                </Button>
                            </Form>
                            <div className={classes.infoCard_signIn}>
                                <div className={classes.textWrapper}>
                                    <h2 className={classes.welcomeTitle}>
                                        Приветсвие
                                    </h2>
                                    <p className={classes.text}>
                                        Какой-то текст про то как классно будет если ты войдешь
                                    </p>
                                    <Button onClick={() => setAuth(false)}
                                            className={classes.btnTel}
                                            variant={'red'}
                                    >Зарегестрироваться</Button>
                                </div>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className={classes.authorization}>
                            <div className={classes.infoCard_signIn}>
                                <div className={classes.textWrapper}>
                                    <h2 className={classes.welcomeTitle}>
                                        Приветсвие
                                    </h2>
                                    <p className={classes.text}>
                                        Какой-то текст про то как классно будет если ты войдешь
                                    </p>
                                    <Button onClick={() => setAuth(true)}
                                            className={classes.btnTelIn}
                                            variant={'blue'}
                                    >Войти</Button>
                                </div>
                            </div>
                            <Form className={classes.form}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control type="text" placeholder="Введите логин"
                                                  value={login} onChange={(e) => setLogin(e.currentTarget.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Введите пароль"
                                                  value={password} onChange={(e) => setPassword(e.currentTarget.value)}
                                    />
                                </Form.Group>
                                <Button variant="blue"
                                        onClick={() => regAuthUser()}
                                        className={classes.btnTel}
                                >
                                    Зарегестрироваться
                                </Button>
                            </Form>
                        </div>
                    </>
            }
        </>

    )
        ;
}

export default Authorization;