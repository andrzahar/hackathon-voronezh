import Authorization from '../Authorization/Authorization.jsx';
import classes from './WelcomePage.module.css';
import MapElement from '../MapElement/MapElement.jsx';
import MainScreenInfo from "./MainScreenInfo/MainScreenInfo";

const WelcomePage = () => {
  return (
    <div className={classes.welcomePage}>
      <Authorization />
        <MainScreenInfo/>
      <MapElement />
    </div>
  );
};

export default WelcomePage;
