import { AuthReducer } from '../redux/Auth/reducer';
import { RiskAssessmentReducer } from '../redux/RiskAssessment/reducer';
import { RiskAssessmentComponentReducer } from '../redux/RiskAssessmentComponent/reducer';
import { sendResponseReducer } from '../redux/RiskAssessmentResponse/reducer';
export const reducers = {
  auth: AuthReducer,
  riskAssessment: RiskAssessmentReducer,
  riskAssessmentComponent: RiskAssessmentComponentReducer,
  sendResponse: sendResponseReducer,
};
