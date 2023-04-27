// TODO: список прошедших мероприятий, собственные результаты на них

import { ListGroup } from 'react-bootstrap';

import classes from './Achievements.module.css';
// eslint-disable-next-line import/extensions
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
