import axios from '../../AxiosConfig';

import { BaseUrl, ApiVersion } from '../../Constants/General';
const RiskAssessmentUrl = BaseUrl + ApiVersion;

export const RiskAssessmentApi = {
  SetRiskAssessmentApprove: async (id: number, role: any) => {
    return axios.get(RiskAssessmentUrl + `/risk-assessment/${id}/${role}`);
  },
};
