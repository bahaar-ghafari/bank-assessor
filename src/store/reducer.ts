import { AuthReducer } from "../redux/Auth/reducer";
import { RiskAssessmentReducer } from "../redux/RiskAssessment/reducer";
export const reducers = {
  auth: AuthReducer,
  riskAssessment: RiskAssessmentReducer,
};
