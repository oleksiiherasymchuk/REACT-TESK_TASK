import { API, token } from "../api/api";

const SET_USERS = "app/SET_USERS";
const SET_CURRENT_PAGE = "app/SET_CURRENT_PAGE";
const SET_PAGE_SIZE = "app/SET_PAGE_SIZE";
const SET_TOTAL_USERS_COUNT = "app/SET_TOTAL_USERS_COUNT";
const SET_IS_LOADING = "app/SET_IS_LOADING";
const SET_IS_LAST_PAGE = "app/SET_IS_LAST_PAGE";
const SAVE_PHOTO_SUCCESS = "app/SAVE_PHOTO_SUCCESS";
const SET_TOKEN = "app/SET_TOKEN";

let initialAppState = {
  users: [],
  currentPage: 1,
  pageSize: 6,
  totalUsersCount: 0,
  isLoading: true,
  photoURL: null,
  token: "",
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
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
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

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setCurrentPage(currentPage));

      let data = await API.getAllUsers(currentPage, pageSize);
      //   console.log(data);
      dispatch(setUsers(data.users));
      dispatch(setIsLoading(false));
      dispatch(setTotalUsersCount(data["total_users"]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createToken = () => {
  return async (dispatch) => {
    let response = await API.token();
    // console.log("Token response:", response);
    // console.log("Current token:", token);
    dispatch(setToken(response));
  };
};

export const createNewUser = (user) => {
  return async (dispatch) => {
    try{
        // const token = await API.token();
        // user.token = token;
        let response = await API.createUser(user);
        console.log(response);
    } catch(error){
        console.log("Error creating new user:", error);
    }

  
  };
};

export default appReducer;
