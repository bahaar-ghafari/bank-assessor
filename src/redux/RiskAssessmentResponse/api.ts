import axios from '../../AxiosConfig';
import { BaseUrl, ApiVersion } from '../../Constants/General';
const sendResponseUrl = BaseUrl + ApiVersion;

export const RiskAssessmentApi = {
  sendResponse: async (
    id: number,
    type: 'bank-response' | 'general-response',
    data: {
      componentId: number;
      Response: string;
    }[],
  ) => {
    return axios.post(sendResponseUrl + `/risk-assessment/${id}/${type}`, data);
  },
};
