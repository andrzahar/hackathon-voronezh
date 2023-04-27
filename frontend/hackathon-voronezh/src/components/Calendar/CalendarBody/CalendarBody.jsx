import classes from './CalendarBody.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import logo from '../../../images/headerLogo.svg'
const CalendarBody=()=>{
    return(
        <div className={classes.calendarBody}>
            <CalendarItem/>
            <CalendarItem/>
            <CalendarItem/>
            <CalendarItem/>
            <CalendarItem/>
        </div>
    )
}

const CalendarItem=()=>{

    return(

        <Card style={{ width: '18rem' }}>
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
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>Чемпионат России по программированию</Card.Title>
                <Card.Text>
                    Продуктовое программирование
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Дата проведения: 27.04 - 28.04</ListGroup.Item>
                <ListGroup.Item>Федерация спортивного программирования</ListGroup.Item>
                <ListGroup.Item>Статус: Активен</ListGroup.Item>
            </ListGroup>
            <Card.Body >
                <Button className={classes.cardBtn} variant={'blue'} href="#">Подробнее</Button>
                <Button className={classes.cardBtn} variant={'red'} href="#">Просмотреть участников</Button>
            </Card.Body>
        </Card>
    )
}

export default CalendarBody;