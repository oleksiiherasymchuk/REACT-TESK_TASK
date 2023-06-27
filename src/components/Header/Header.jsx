import React from "react";
import s from "./Header.module.css";
import headerIcon from "./image/headerIcon.png";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToUsers = () => {
    const element = document.getElementById("getPageSection");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      duration: 5000,
      offset: -50,
    });
  };

  const scrollToSignUp = () => {
    const element = document.getElementById("postPageSection");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      duration: 5000,
      offset: -50,
    });
  };

  return (
    <div className={s.header}>
      <div className={s.headerIcon}>
        <img src={headerIcon} alt="headerIcon" />
        <span>TESTTASK</span>
      </div>
      <div className={s.headerUser}>
        <button onClick={scrollToUsers}>User</button>
        {/* <Link onClick={scrollToUsers}>User</Link> */}
      </div>
      <div className={s.headerSignUp}>
        <button onClick={scrollToSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
