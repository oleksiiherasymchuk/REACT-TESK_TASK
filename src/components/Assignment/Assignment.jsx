import React from "react";
import s from "./Assignment.module.css";

const Assignment = () => {
  return (
    <div className={s.assignment}>
      <div className={s.assignmentText}>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
      </div>
      <div className={s.assignmentButton}>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Assignment;
