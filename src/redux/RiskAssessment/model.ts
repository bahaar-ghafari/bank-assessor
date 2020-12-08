import { Action } from 'redux';
import { assesmentModel } from '../../Models/model';
import { RiskAssessmentActionTypes } from './actionType';

export interface IRiskAssessmentState {
  data: assesmentModel[];
  loading: boolean;
}

export interface IOneRiskAssessmentState {
  data: assesmentModel;
  loading: boolean;
}
//IRiskAssessment
interface IRiskAssessment extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessment;
}
interface IRiskAssessmentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessmentSuccess;
  data: IRiskAssessmentState;
}
interface IRiskAssessmentFail extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessmentFail;
}
//IOneRiskAssessment
interface IOneRiskAssessment extends Action<string> {
  type: RiskAssessmentActionTypes.GetOneRiskAssessment;
}
interface IOneRiskAssessmentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.GetOneRiskAssessmentSuccess;
  data: IOneRiskAssessmentState;
}
interface IOneRiskAssessmentFail extends Action<string> {
  type: RiskAssessmentActionTypes.GetOneRiskAssessmentFail;
}
//ICreateRiskAssessment
interface ICreateRiskAssessment extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessment;
}
interface ICreateRiskAssessmentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessmentSuccess;
  data: IRiskAssessmentState;
}
interface ICreateRiskAssessmentFail extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessmentFail;
}
//delete
interface IDeleteRiskAssessment extends Action<string> {
  type: RiskAssessmentActionTypes.DeleteRiskAssessment;
}
interface IDeleteRiskAssessmentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.DeleteRiskAssessmentSuccess;
  data: IRiskAssessmentState;
}
interface IDeleteRiskAssessmentFail extends Action<string> {
  type: RiskAssessmentActionTypes.DeleteRiskAssessmentFail;
}
export type ActionModel =
  | IRiskAssessment
  | IRiskAssessmentSuccess
  | IRiskAssessmentFail
  | IOneRiskAssessment
  | IOneRiskAssessmentSuccess
  | IOneRiskAssessmentFail
  | ICreateRiskAssessment
  | ICreateRiskAssessmentSuccess
  | ICreateRiskAssessmentFail
  | IDeleteRiskAssessment
  | IDeleteRiskAssessmentSuccess
  | IDeleteRiskAssessmentFail;
