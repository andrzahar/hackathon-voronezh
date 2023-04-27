import cn from 'classnames';
import { Badge, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

import classes from './Achievements.module.css';

const AchievementsItem = () => {
  const handlerClick = () => {};

  const renderTooltip = props => <Tooltip {...props}>Это ваш лучший результат!</Tooltip>;

  return (
    <ListGroup.Item
      as="li"
      // active={true}
      onClick={handlerClick}
      className={cn('d-flex justify-content-between align-items-start', classes.item)}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold mb-2">Чемпионат России по программированию</div>
        Продуктовое программирование
      </div>
      <OverlayTrigger placement="left" overlay={renderTooltip}>
        <Badge bg="primary" pill>
          6,8
        </Badge>
      </OverlayTrigger>
    </ListGroup.Item>
  );
};

export default AchievementsItem;
