import { API } from "../api/api";

const SET_USERS = "app/SET_USERS";
const SET_CURRENT_PAGE = "app/SET_CURRENT_PAGE";
const SET_PAGE_SIZE = "app/SET_PAGE_SIZE";
const SET_TOTAL_USERS_COUNT = "app/SET_TOTAL_USERS_COUNT";
const SET_IS_LOADING = "app/SET_IS_LOADING";
const SET_IS_LAST_PAGE = "app/SET_IS_LAST_PAGE";
const SAVE_PHOTO_SUCCESS = "app/SAVE_PHOTO_SUCCESS";

let initialAppState = {
  users: [],
  currentPage: 1,
  pageSize: 6,
  totalUsersCount: 0,
  isLoading: true,
  photoURL: null,
};

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    // case SAVE_PHOTO_SUCCESS: {
    //     return {
    //       ...state,
    //       profile: { ...state.profile, photos: action.payload },
    //     };
    //   }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_IS_LAST_PAGE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        photoURL: action.payload,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, payload: users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
export const setPageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  payload: pageSize,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount,
});
export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});
export const setIsLastPage = (isLastPage) => ({
  type: SET_IS_LAST_PAGE,
  payload: isLastPage,
});

export const savePhotoSuccess = (photoURL) => ({
  type: SAVE_PHOTO_SUCCESS,
  payload: photoURL,
});

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setCurrentPage(currentPage));

      let data = await API.getAllUsers(currentPage, pageSize);

      dispatch(setUsers(data.users));
      dispatch(setIsLoading(false));
      dispatch(setTotalUsersCount(data["total_users"]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewUser = (user) => {
  return async (dispatch) => {
    try {
      let response = await API.createUser(user);
      console.log(response);
      // dispatch(setUsers());
    } catch (error) {
      console.log("Error creating new user:", error);
    }
  };
};

export default appReducer;
