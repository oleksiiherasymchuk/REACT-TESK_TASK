import React from "react";
import s from "./Header.module.css";
import headerIcon from "./image/headerIcon.png";

const Header = () => {
  return (
    <div className={s.header}>
      {/* <div className={s.headerContent}> */}
        <div className={s.headerIcon}>
          <img src={headerIcon} alt="headerIcon" />
          <span>TESTTASK</span>
        </div>
        <div className={s.headerUser}>
          <button>User</button>
        </div>
        <div className={s.headerSignUp}>
          <button>Sign Up</button>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
