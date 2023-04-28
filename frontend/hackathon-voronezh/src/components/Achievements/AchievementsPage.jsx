import classes from "./AchievementsListPage.module.css";
import {ListGroup} from "react-bootstrap";
import cn from "classnames";

const AchievementsPage = () => {
    const handlerClick = () => {};

    return (
        <div className="d-flex flex-column">
            <h1 className={classes.title}>Чемпионат России по программированию</h1>
            <h1 className={classes.title}>Чемпионат России по программированию</h1>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    onClick={handlerClick}
                    className={cn('d-flex justify-content-between align-items-start', classes.item)}
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold mb-2">Чемпионат России по программированию</div>
                        Продуктовое программирование
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default AchievementsPage;