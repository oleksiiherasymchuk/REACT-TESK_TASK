import React, { useEffect, useState } from "react";
import s from "./GetPage.module.css";
import User from "./User/User";
import Preloader from "../../common/Preloader/Preloader";
import { getUsers } from "../../redux/appReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalUsersCountSelector,
  getUsersSelector,
} from "../../redux/appSelector";

const GetPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  const totalUsersCount = useSelector(getTotalUsersCountSelector);
  const setLastPage = Math.ceil(totalUsersCount / users.length);
  const [page, setPage] = useState(1);

  const isLastPage = setLastPage === page;

  const showMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getUsers(page, 6));
  }, [page, isLastPage]);
  

  return (
    <div className={s.getPage}>
      <div className={s.getPageContent}>
        <h1>Working with GET request</h1>
        <div className={s.getPageContentUsers}>
          {users.length === 0 && <Preloader />}
          {users.length !== 0 &&
            users.map((u) => {
              return <User user={u} key={u.id} />;
            })}
        </div>
        <div className={s.getPageContentButton}>
          {!isLastPage && <button onClick={showMore}>Show more</button>}
        </div>
      </div>
    </div>
  );
};

export default GetPage;
