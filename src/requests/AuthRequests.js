import axios from "axios";

const baseURL = "https://pro-tracker-backend.herokuapp.com/api";

export const loginRequest = body => {
  return axios.post(`${baseURL}/users/login`, body);
};

export default { loginRequest };
