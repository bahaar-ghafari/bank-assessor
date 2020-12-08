/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
// import axios from "./AxiosConfig";
import configureStore from './store/configStore';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const initialState = {};
export const store = configureStore(initialState);
// const isAuth = () => {
// const storage = window.localStorage.getItem("darsapp");
// let token = null;
// if (storage) {
//   token = JSON.parse(storage).token;
// }
// if (token) {
//   store.getState().auth.isAuth = true;
//   axios.defaults.headers.common["Authorization"] = `${token}`;
// }
// };
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const logOut = () => {
  // store.getState().auth.isAuth = false;
  // window.localStorage.removeItem("darsapp");
  // axios.defaults.headers.common["Authorization"] = ``;
  // window.location.href = "/";
};
// isAuth();
ReactDOM.render(
  <Provider store={store}>
    <StylesProvider jss={jss}>
      <App />
    </StylesProvider>
  </Provider>,
  document.getElementById('root'),
);
