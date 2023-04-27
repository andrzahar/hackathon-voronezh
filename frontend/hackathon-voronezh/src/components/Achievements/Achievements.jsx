// TODO: список прошедших мероприятий, собственные результаты на них

import { Badge, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import cn from 'classnames';

import classes from './Achievements.module.css';
import AchievementsItem from './AchievementsItem';

const Achievements = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Достижения</h1>
      <ListGroup as="ol" numbered>
        <AchievementsItem />
      </ListGroup>
    </div>
  );
};

export default Achievements;
