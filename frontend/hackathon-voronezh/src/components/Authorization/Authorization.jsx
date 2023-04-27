import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

import classes from './Authorization.module.css';
import {authLogin, authRegistration} from "../../store/services/authLogin";

const Authorization = () => {
  const [auth, setAuth] = useState(true);
  const [modal, setModal] = useState(true);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const closeModal = () => {
    setModal(false);
  };

  const checkAuthUser = async () => {
    const userKey = await authLogin({ mail, password });

    console.log('userKey', userKey);
    // if (login != null && password != null) {
    //     dispatch(enterUser(login, password));
    // }
  };

  const regAuthUser = async () => {
    const userKey = await authRegistration({ mail, password });
    // if (login != null && password != null) {
    //     dispatch(createUser(login, password));
    //     setModal(true);
    // }

    console.log(userKey);
  };

  const onChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const onChangeMail = e => {
    setMail(e.currentTarget.value);
  };

  const togglePage = () => {
    setAuth(prev => !prev);
  };

  return (
    <div style={{padding:'30px 0'}}>
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
      {/*{modal ? <Measure closeModal={() => closeModal()} /> : <></>}*/}
      {auth ? (
        <>
          <div className={classes.authorization}>
            <Form className={classes.form}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин" value={mail} onChange={onChangeMail} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={onChangePassword}
                />
              </Form.Group>
              <Button variant="blue" onClick={checkAuthUser}>
                Войти
              </Button>
            </Form>
            <div className={classes.infoCard_signIn}>
              <div className={classes.textWrapper}>
                <h2 className={classes.welcomeTitle}>Здравствуйте👋</h2>
                <p className={classes.text}>
                  Если Вы еще не зарегистрированы в нашей системе, будем рады Вашему присоединению!
                </p>
                <Button onClick={togglePage} className={classes.btnTel} variant="red">
                  Зарегистрироваться
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.authorization}>
            <div className={classes.infoCard_signIn}>
              <div className={classes.textWrapper}>
                <h2 className={classes.welcomeTitle}>Уже есть аккаунт?</h2>
                <p className={classes.text}>Бцдем рады Вашему возвращению.</p>
                <Button onClick={togglePage} className={classes.btnTelIn} variant="blue">
                  Войти
                </Button>
              </div>
            </div>
            <Form className={classes.form}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин" value={mail} onChange={onChangeMail} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={onChangePassword}
                />
              </Form.Group>
              <Button variant="blue" onClick={regAuthUser} className={classes.btnTel}>
                Зарегистрироваться
              </Button>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default Authorization;
