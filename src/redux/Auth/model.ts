import { Action } from 'redux';
import { AuthActionTypes } from './actionType';

export type LoginType = {
  username: string;
  password: string;
};

export interface IAuthState {
  username: string;
  role: any;
  authorized: boolean;
  loading: boolean;
}

interface ILogin extends Action<string> {
  type: AuthActionTypes.Login;
}
interface ILoginSuccess extends Action<string> {
  type: AuthActionTypes.LoginSuccess;
  data: IAuthState;
}
interface ILoginFail extends Action<string> {
  type: AuthActionTypes.LoginFail;
}

interface ILogOut extends Action<string> {
  type: AuthActionTypes.LogOut;
}
interface ILogOutSuccess extends Action<string> {
  type: AuthActionTypes.LogOutSuccess;
}
interface ILogOutFail extends Action<string> {
  type: AuthActionTypes.LogOutFail;
}

export type ActionModel =
  | ILogin
  | ILoginSuccess
  | ILoginFail
  | ILogOut
  | ILogOutSuccess
  | ILogOutFail;
