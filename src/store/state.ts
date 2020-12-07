import { IAuthState } from "../redux/Auth/model";
import { IRiskAssessmentState } from "../redux/RiskAssessment/model";
export interface IApplicationState {
  auth: IAuthState;
  riskAssessment: IRiskAssessmentState;
}

export type AppAction<TAction> = (
  dispatch: (action: TAction) => void,
  getState: () => IApplicationState
) => void;
