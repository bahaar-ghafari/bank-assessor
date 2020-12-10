import { Action } from 'redux';
import { assesmentComponentModel } from '../../Models/model';
import { RiskAssessmentActionTypes } from './actionType';

export interface IRiskAssessmentComponentState {
  data: assesmentComponentModel[];
  loading: boolean;
}

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
