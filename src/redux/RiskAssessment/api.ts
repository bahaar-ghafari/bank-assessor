import axios from '../../AxiosConfig';

import { BaseUrl, ApiVersion } from '../../Constants/General';
const RiskAssessmentUrl = BaseUrl + ApiVersion;

export const getRiskAssessmentApi = {
  getRiskAssessment: async () => {
    return axios.get(RiskAssessmentUrl + '/risk-assessment');
  },
  createRiskAssessment: async () => {
    return axios.post(RiskAssessmentUrl + '/risk-assessment');
  },
  getOneRiskAssessment: async (id: number) => {
    return axios.get(RiskAssessmentUrl + `/risk-assessment/${id}`);
  },
};
