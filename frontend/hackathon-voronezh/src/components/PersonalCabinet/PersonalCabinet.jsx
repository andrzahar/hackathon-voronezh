import classes from './PersonalCabinet.module.css';

const PersonalCabinet=()=>{
    return(
        <div>
            <div className={classes.personalData}>
                <div className={classes.personalData_img}>
                    <img className={classes.avatar}/>
                </div>

            </div>
        </div>
    )
}

export default PersonalCabinet;