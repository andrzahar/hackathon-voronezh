import classes from './PersonalCabinet.module.css';
import avatar from '../../images/avatar.webp'
import account from '../../images/account.svg'

const PersonalCabinet = () => {
    const avatar = null;
    return (
        <div className={classes.personalCabinet}>
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
                    {
                        null ?
                            <div className={classes.personalInfo__text}>
                                Паспорт
                            </div> :
                            <div className={classes.personalInfo__text}>
                                Загрузить
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PersonalCabinet;