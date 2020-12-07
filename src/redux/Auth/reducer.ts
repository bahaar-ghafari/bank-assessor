import { Reducer } from "redux";
import { IAuthState, ActionModel } from "./model";
import { AuthActionTypes } from "./actionType";
const storedPortfolio = localStorage.getItem("userStatus");
const unloadedState: IAuthState =
  typeof storedPortfolio === "string"
    ? JSON.parse(storedPortfolio)
    : storedPortfolio;

export const AuthReducer: Reducer<IAuthState> = (
  state: IAuthState = unloadedState,
  action: ActionModel
) => {
  switch (action.type) {
    case AuthActionTypes.Login: {
      return {
        ...state,
        loading: true,
      } as IAuthState;
    }
    case AuthActionTypes.LoginSuccess: {
      return {
        ...action.data,
        loading: false,
      } as IAuthState;
    }
    case AuthActionTypes.LoginFail: {
      return {
        ...state,
        loading: false,
      } as IAuthState;
    }
    //#################### Logout cases
    case AuthActionTypes.LogOut: {
      return {
        ...state,
        loading: true,
      } as IAuthState;
    }
    case AuthActionTypes.LogOutSuccess: {
      return {
        ...state,
        loading: false,
      } as IAuthState;
    }
    case AuthActionTypes.LogOutFail: {
      return {
        ...state,
        loading: false,
      } as IAuthState;
    }
  }
  return state;
};
