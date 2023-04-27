import classes from './PersonalCabinet.module.css';
import avatar from '../../images/avatar.webp'
import account from '../../images/account.svg'
import Documents from "./Documents/Documents";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import EditModal from "../EditModal/EditModal";

const PersonalCabinet = () => {
    const [modal, setModal]=useState(false);
    const avatar = null;

    const closeModal=()=>{
        setModal(false);
    }

    return (
        <>
            {modal?
                <EditModal closeModal={()=>closeModal()}/>:<></>}
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
                `
                    }
                </style>
                <h1 className={classes.title}>
                    Личный кабинет
                </h1>
                <div className={classes.personal}>
                    <div className={classes.personal_img}>
                        <img className={classes.avatar}
                             src={avatar ? avatar : account}
                        />
                    </div>
                    <div className={classes.personalData}>
                        <div className={classes.basicData}>
                            <p>Фамилия: Адамович</p>
                            <p>Имя: Роман</p>
                            <p>Отчество: Николаевич</p>
                            <p>Дата рождения: 24.03.2001</p>
                        </div>
                        <div className={classes.contacts}>
                            <p>Роль: Спортсмен</p>
                            <p>Телефон: 89877807652</p>
                            <p>Пол: м</p>
                            <p>Локация: г. Оренбург</p>
                        </div>
                    </div>
                </div>
                <div className={classes.personalInfo}>
                    <h2 className={classes.personalInfo__title}>
                        О себе
                    </h2>
                    <div className={classes.personalInfoWrapper}>
                        <p className={classes.personalInfo__text}>
                            Я такой-то такой-то, то-то, то-то
                        </p>
                    </div>
                </div>
                <div className={classes.personalInfo}>
                    <h2 className={classes.personalInfo__title}>
                        Документы
                    </h2>
                    <div className={classes.personalInfoWrapper}>
                        <div className={classes.personalInfo__text}>
                            Серия номер паспорта: 97126123
                        </div>
                        <div className={classes.personalInfo__text}>
                            ПОЛИС: 21321764
                        </div>
                        {/*<Documents className={classes.personalInfo__text}/>*/}
                    </div>
                </div>
                <Button className={classes.btn} variant={'blue'} onClick={()=>setModal(true)}> Редактировать данные</Button>
            </div>
        </>
    )
}

export default PersonalCabinet;