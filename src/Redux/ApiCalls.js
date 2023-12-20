import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "./UserSlice";

export const login = async (dispatch, user) => {
  try {
    dispatch(loginStart());
    const res = await axios.post("http://localhost:8000/api/auth/login", user);
    // console.log(res.data);
    const userdata = res.data;
    localStorage.setItem("user", JSON.stringify(userdata));
    const token = res.data.token;
    localStorage.setItem("token", token);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const Logout = (dispatch) => {
    try {
        localStorage.removeItem("token");
        dispatch(logout());
    } catch (error) {
        console.log(error);
    }
};
