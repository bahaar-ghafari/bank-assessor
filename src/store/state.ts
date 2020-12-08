import { IAuthState } from '../redux/Auth/model';
import { IRiskAssessmentState } from '../redux/RiskAssessment/model';
import { IRiskAssessmentComponentState } from '../redux/RiskAssessmentComponent/model';
export interface IApplicationState {
  auth: IAuthState;
  riskAssessment: IRiskAssessmentState;
  riskAssessmentComponent: IRiskAssessmentComponentState;
}

export type AppAction<TAction> = (
  dispatch: (action: TAction) => void,
  getState: () => IApplicationState,
) => void;
