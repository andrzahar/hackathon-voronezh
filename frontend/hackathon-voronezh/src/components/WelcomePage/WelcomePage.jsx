import Authorization from "../Authorization/Authorization.jsx";
import classes from './WelcomePage.module.css'
import MapElement from "../MapElement/MapElement.jsx";
const WelcomePage=()=>{
    return(
        <div className={classes.welcomePage}>
            <Authorization/>
            <MapElement/>
        </div>
    )
}

export default WelcomePage;