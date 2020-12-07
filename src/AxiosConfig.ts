import Axios from "axios";
import { logOut } from "./index";
// import { message } from "antd";
let AxiosInstance = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: string) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response) {
      if (error.response.status === 401) {
        logOut();
      }
    }
    // if (typeof error.response === "undefined") {
    //     error.response = {};
    //     error.response.data = {};
    //     error.response.data.message = "خطایی در سیستم به وجود آمده است لطفا مجددا تلاش نمایید";
    // } else if (!error.response) {
    //     error.response.data.message = "خطایی در سیستم به وجود آمده است لطفا مجددا تلاش نمایید";
    // } else if (error.response.data === "") {
    //     error.response.data = {};
    //     error.response.data.message = "خطایی در سیستم به وجود آمده است لطفا مجددا تلاش نمایید";
    // } else if (error.response.data.message === "") {
    //     error.response.data.message = "خطایی در سیستم به وجود آمده است لطفا مجددا تلاش نمایید";
    // }
    // message.error(error.response.data.message);
    // return Promise.reject(error);
  }
);

export default AxiosInstance;
