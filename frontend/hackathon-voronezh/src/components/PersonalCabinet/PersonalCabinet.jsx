import classes from './PersonalCabinet.module.css';

const PersonalCabinet = () => {
    return (
        <div className={classes.personalCabinet}>
            <h1 className={classes.title}>
                Личный кабинет
            </h1>
            <div className={classes.personal}>
                <div className={classes.personal_img}>
                    <img className={classes.avatar}

                    />
                </div>
                <div className={classes.personalData}>
                    <div className={classes.basicData}>
                        <p>Фамилия: </p>
                        <p>Имя: </p>
                        <p>Отчество: </p>
                        <p>Дата рождения: </p>
                    </div>
                    <div className={classes.contacts}>
                        <p>Телефон: </p>
                        <p>Пол: </p>
                        <p>Локация: </p>
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
        </div>
    )
}

export default PersonalCabinet;