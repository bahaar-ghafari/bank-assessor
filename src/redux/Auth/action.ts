import { AppAction } from '../../store/state';
import { AuthActionTypes } from './actionType';
import { ActionModel, LoginType } from './model';
import { AuthApi } from './api';

//send request to server
export const loginRequest = (
  e: React.ChangeEvent<HTMLInputElement>,
  data: LoginType,
  history: any,
): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: AuthActionTypes.Login });
  try {
    const res = await AuthApi.login(e, data);

    window.localStorage.setItem('userStatus', `${JSON.stringify(res.data)}`);
    if (res.data) {
      const data = res.data;
      dispatch({ type: AuthActionTypes.LoginSuccess, data });
      if (history) {
        history.replace('/');
      }
    }
  } catch (error) {
    dispatch({ type: AuthActionTypes.LoginFail });
  }
};

export const logOutRequest = (
  e: React.ChangeEvent<HTMLInputElement>,
  history: any,
): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: AuthActionTypes.LogOut });
  try {
    const res = await AuthApi.login(e, { username: '', password: '' });
    if (res.data) {
      window.localStorage.removeItem('userStatus');
      dispatch({ type: AuthActionTypes.LogOutSuccess });
      if (history) {
        history.replace('/login');
      }
    }
  } catch (error) {
    dispatch({ type: AuthActionTypes.LogOutFail });
  }
};
