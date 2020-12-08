import { AuthReducer } from '../redux/Auth/reducer';
import { RiskAssessmentReducer } from '../redux/RiskAssessment/reducer';
import { RiskAssessmentComponentReducer } from '../redux/RiskAssessmentComponent/reducer';
export const reducers = {
  auth: AuthReducer,
  riskAssessment: RiskAssessmentReducer,
  riskAssessmentComponent: RiskAssessmentComponentReducer,
};
