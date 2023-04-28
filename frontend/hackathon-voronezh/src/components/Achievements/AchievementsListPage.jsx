// TODO: список прошедших мероприятий, собственные результаты на них

import { ListGroup } from 'react-bootstrap';

import classes from './AchievementsListPage.module.css';
// eslint-disable-next-line import/extensions
import AchievementsItem from './AchievementsItem';

const AchievementsListPage = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Достижения</h1>
      <ListGroup as="ol" numbered>
        <AchievementsItem />
      </ListGroup>
    </div>
  );
};

export default AchievementsListPage;
