import classes from "./Header.module.css";
import headerLogo from "../../images/headerLogo.svg";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.titleGroup}>
        <img src={headerLogo} className={classes.headerLogo} />
        <div className={classes.title}></div>
      </div>
      <div className={classes.infoGroup}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#C8C9CA"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
          style={{ padding: "70px" }}
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
