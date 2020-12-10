import { Action } from 'redux';
import { RiskAssessmentActionTypes } from './actionType';

//component get
interface IRiskAssessmentApprove extends Action<string> {
  type: RiskAssessmentActionTypes.SetRiskAssessmentApprove;
}
interface IRiskAssessmentApproveSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.SetRiskAssessmentApproveSuccess;
  data: boolean;
}
interface IRiskAssessmentApproveFail extends Action<string> {
  type: RiskAssessmentActionTypes.SetRiskAssessmentApproveFail;
}
export type ActionModel =
  | IRiskAssessmentApprove
  | IRiskAssessmentApproveSuccess
  | IRiskAssessmentApproveFail;
