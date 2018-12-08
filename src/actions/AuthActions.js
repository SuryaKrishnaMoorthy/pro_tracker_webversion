import {
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from "./types";
import loginRequest from "../requests/AuthRequests";

export const loginUser = userInput => {
  return async dispatch => {
    try {
      dispatch({ type: LOGIN_USER_PENDING });
      const token = await loginRequest(userInput);
      if (token) {
        localStorage.setItem("token", token);
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: userInput
        });
      } else {
        dispatch({
          type: LOGIN_USER_FAIL,
          payload: "Please provide correct credentials"
        });
      }
    } catch (err) {
      dispatch({ type: LOGIN_USER_FAIL, payload: err });
    }
  };
};
