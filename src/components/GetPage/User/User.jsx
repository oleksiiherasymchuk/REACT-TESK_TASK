import React from "react";
import s from "./User.module.css";
import userImage from "./image/userImage.png";
import { Tooltip } from "react-tooltip";

const User = (props) => {
  let name =
    props.user.name.length > 25
      ? props.user.name.slice(0, 25) + "..."
      : props.user.name;
  let email =
    props.user.email.length > 25
      ? props.user.email.slice(0, 25) + "..."
      : props.user.email;

  return (
    <div className={s.user}>
      <div className={s.userImage}>
        <img src={props.user.photo || userImage} alt="userImage" />
      </div>
      <div className={s.userName}>
        <p
          data-tooltip-id="username"
          data-tooltip-content={props.user.name}
          data-tooltip-place="bottom"
        >
          <Tooltip id="username" />
          {name}
        </p>
      </div>
      <div className={s.userInfo}>
        <p>{props.user.position}</p>
        <p
          data-tooltip-id="email"
          data-tooltip-content={props.user.email}
          data-tooltip-place="bottom"
        >
           <Tooltip id="email" />
          {email}
        </p>
        <p>{props.user.phone}</p>
      </div>
    </div>
  );
};

export default User;
