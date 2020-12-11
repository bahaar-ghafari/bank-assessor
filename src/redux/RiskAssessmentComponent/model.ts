import { Action } from 'redux';
import { assesmentComponentModel } from '../../Models/model';
import { RiskAssessmentActionTypes } from './actionType';

export interface IRiskAssessmentComponentState {
  data: assesmentComponentModel[];
  loading: boolean;
}

interface IRiskAssessmentComponent extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessmentComponent;
}
interface IRiskAssessmentComponentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessmentComponentSuccess;
  data: assesmentComponentModel;
}
interface IRiskAssessmentComponentFail extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessmentComponentFail;
}
interface ICreateRiskAssessmentComponent extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessmentComponent;
}
interface ICreateRiskAssessmentComponentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessmentComponentSuccess;
  data: assesmentComponentModel;
}
interface ICreateRiskAssessmentComponentFail extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessmentComponentFail;
}
export type ActionModel =
  | IRiskAssessmentComponent
  | IRiskAssessmentComponentSuccess
  | IRiskAssessmentComponentFail
  | ICreateRiskAssessmentComponent
  | ICreateRiskAssessmentComponentSuccess
  | ICreateRiskAssessmentComponentFail;
