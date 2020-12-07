import axios from "../../AxiosConfig";

import { LoginType } from "./model";
import { BaseUrl, ApiVersion } from "../../Constants/General";
const authUrl = BaseUrl + ApiVersion;

export const AuthApi = {
  login: async (e: React.ChangeEvent<HTMLInputElement>, data: LoginType) => {
    e.preventDefault();
    return axios.post(authUrl + "/login", data);
  },
};
