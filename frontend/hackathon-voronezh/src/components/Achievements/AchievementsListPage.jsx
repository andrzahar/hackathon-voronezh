import { ListGroup } from 'react-bootstrap';

import classes from './AchievementsListPage.module.css';
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
