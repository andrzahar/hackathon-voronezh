import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

import classes from './Authorization.module.css';
import Measure from '../Measure/Measure';

const Authorization = () => {
  const [auth, setAuth] = useState(true);
  const [modal, setModal] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const closeModal = () => {
    setModal(false);
  };

  const checkAuthUser = () => {
    console.log('log');
    // if (login != null && password != null) {
    //     dispatch(enterUser(login, password));
    // }
  };

  const regAuthUser = () => {
    // if (login != null && password != null) {
    //     dispatch(createUser(login, password));
    //     setModal(true);
    // }
  };

  const onChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const onChangeLogin = e => {
    setLogin(e.currentTarget.value);
  };

  const togglePage = () => {
    setAuth(prev => !prev);
  };

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
                `}
      </style>
      {modal ? <Measure closeModal={() => closeModal()} /> : <></>}
      {auth ? (
        <>
          <div className={classes.authorization}>
            <Form className={classes.form}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин" value={login} onChange={onChangeLogin} />
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
              <Button type="submit" variant="blue" onClick={checkAuthUser}>
                Войти
              </Button>
            </Form>
            <div className={classes.infoCard_signIn}>
              <div className={classes.textWrapper}>
                <h2 className={classes.welcomeTitle}>Приветствие</h2>
                <p className={classes.text}>Какой-то текст про то как классно будет если ты войдешь</p>
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
                <h2 className={classes.welcomeTitle}>Приветствие</h2>
                <p className={classes.text}>Какой-то текст про то как классно будет если ты войдешь</p>
                <Button onClick={togglePage} className={classes.btnTelIn} variant="blue">
                  Войти
                </Button>
              </div>
            </div>
            <Form className={classes.form}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control type="text" placeholder="Введите логин" value={login} onChange={onChangeLogin} />
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
    </>
  );
};

export default Authorization;
