// TODO: список прошедших мероприятий, собственные результаты на них

import { Badge, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";

import classes from "./Achievements.module.css";

const Achievements = () => {
  const dataMock = [{}];

  const renderTooltip = (props) => (
    <Tooltip {...props}>Это ваш лучший результат!</Tooltip>
  );

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Достижения</h1>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Чемпионат России по программированию</div>
            Продуктовое программирование
          </div>
          <OverlayTrigger placement="left" overlay={renderTooltip}>
            <Badge bg="primary" pill>
              6,8
            </Badge>
          </OverlayTrigger>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Achievements;
