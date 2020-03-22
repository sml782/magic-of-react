import { ActionFromReducer, Dispatch } from 'redux';
import {  } from 'react-redux';
import LoginService from "../service/login";
import { UserInfo, Tip } from '../store/userReducer'

interface LoginActionFunc {
  (dispatch: Dispatch, userInfo: UserInfo): void;
}
export const loginAction: LoginAction = async (dispatch, userInfo) => {
  dispatch({type: "LOGIN_REQUEST"}); //展示loading
  const res1 = await login(dispatch, userInfo);
  // 上一个请求之后，进行下一个异步请求
  getMoreUserInfo(dispatch, res1);
  // // 去login请求
  // setTimeout(() => {
  //   dispatch({type: "LOGIN_SUCCESS", payload: userInfo});
  // }, 1000);
}

interface LoginFunc {
  (dispatch: Dispatch, userInfo: UserInfo): Promise<UserInfo | Tip>;
}
const login: LoginFunc = (dispatch, userInfo) => {
  return LoginService.login(userInfo).then(
    res => {
      return res;
      // dispatch({type: "LOGIN_SUCCESS", payload: res});
    },
    err => {
      dispatch({type: "LOGIN_FAILURE", payload: err});
    }
  );
}

function getMoreUserInfo(dispatch, userInfo) {
  LoginService.getMoreUserInfo(userInfo).then(
    res => {
      dispatch({type: "LOGIN_SUCCESS", payload: {...res, ...userInfo}});
    },
    err => {
      dispatch({type: "LOGIN_FAILURE", payload: err});
    }
  );
}
