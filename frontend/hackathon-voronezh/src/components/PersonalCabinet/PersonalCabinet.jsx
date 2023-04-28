import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';

import classes from './PersonalCabinet.module.css';
import account from '../../images/account.svg';
import EditModal from '../EditModal/EditModal';
import {getUserRole} from "./common/getUserRole";

const PersonalCabinet = () => {
  const [modal, setModal] = useState(false);
  const avatar = null;

  const sportsmanInfo = useSelector(state => state.sportsman);
  const userInfo = useSelector(state => state.user);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal ? <EditModal closeModal={() => closeModal()} /> : <></>}
      <div className={classes.personalCabinet}>
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
        <h1 className={classes.title}>Личный кабинет</h1>
        <div className={classes.personal}>
          <div className={classes.personal_img}>
            <img className={classes.avatar} src={avatar || account} />
          </div>
          <div className={classes.personalData}>
            <div className={classes.basicData}>
              <p>Фамилия: {userInfo.surName}</p>
              <p>Имя: {userInfo.name}</p>
              <p>Отчество: {userInfo.patronymic}</p>
              <p>Дата рождения: {sportsmanInfo.properties.birthday}</p>
            </div>
            <div className={classes.contacts}>
              <p>Роль: {getUserRole(userInfo.role)}</p>
              <p>Телефон: {userInfo.phone}</p>
              <p>Пол: {sportsmanInfo.sex}</p>
              {/* <p>Локация: г. Оренбург</p> */}
            </div>
          </div>
        </div>
        <div className={classes.personalInfo}>
          <h2 className={classes.personalInfo__title}>О себе</h2>
          <div className={classes.personalInfoWrapper}>
            <p className={classes.personalInfo__text}>Я такой-то такой-то, то-то, то-то</p>
          </div>
        </div>
        <div className={classes.personalInfo}>
          <h2 className={classes.personalInfo__title}>Документы</h2>
          <div className={classes.personalInfoWrapper}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Данные паспорта</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: 'var(--color--grey)' }}>
                  <div className={classes.passItem}>Cерия номер: {sportsmanInfo.passport.number}</div>
                  <div className={classes.passItem}>Кем выдан: {sportsmanInfo.passport.companyName}</div>
                  <div className={classes.passItem}>Дата выдачи: {sportsmanInfo.passport.issueDate}</div>
                  <div className={classes.passItem}>Код подразделения: {sportsmanInfo.passport.companyCode}</div>
                  <div className={classes.passItem}>Регистрация: {sportsmanInfo.passport.birthdayplace}</div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className={classes.personalInfo__text}>ПОЛИС: {sportsmanInfo.oms}</div>
            {/* <Documents className={classes.personalInfo__text}/> */}
          </div>
        </div>
        <Button className={classes.btn} variant={'blue'} onClick={() => setModal(true)}>
          {' '}
          Редактировать данные
        </Button>
      </div>
    </>
  );
};

export default PersonalCabinet;
