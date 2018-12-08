import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_PENDING,
  LOGIN_USER_FAIL
} from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  showLoginError: false,
  showSignupError: false,
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showLoginError: false,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        showLoginError: true
      };
    default:
      return state;
  }
};
