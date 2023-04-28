import { ListGroup } from 'react-bootstrap';
import cn from 'classnames';

import classes from './AchievementsListPage.module.css';

const AchievementsPage = () => {
  return (
    <div className="d-flex flex-column w-100 px-3">
      <h1 className={classes.title}>Чемпионат России по программированию</h1>
      <h4 className={classes.title}>Список участников</h4>
      <ListGroup as="ol" numbered className="w-100">
        <ListGroup.Item
          as="li"
          className={cn('d-flex justify-content-between align-items-start', classes.item)}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold mb-2">Иванов Иван</div>
            8,7
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default AchievementsPage;
