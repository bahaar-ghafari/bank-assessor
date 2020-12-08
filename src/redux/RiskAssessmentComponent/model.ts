import { Action } from 'redux';
import { assesmentModel, assesmentComponentModel } from '../../Models/model';
import { RiskAssessmentActionTypes } from './actionType';

export interface IRiskAssessmentState {
  data: assesmentModel[];
  loading: boolean;
}

export interface IOneRiskAssessmentState {
  data: assesmentModel;
  loading: boolean;
}

export interface IRiskAssessmentComponentState {
  data: assesmentComponentModel;
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
//component get
interface IRiskAssessmentComponent extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessmentComponent;
}
interface IRiskAssessmentComponentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessmentComponentSuccess;
  data: IRiskAssessmentState;
}
interface IRiskAssessmentComponentFail extends Action<string> {
  type: RiskAssessmentActionTypes.GetRiskAssessmentComponentFail;
}
//component create
interface ICreateRiskAssessmentComponent extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessmentComponent;
}
interface ICreateRiskAssessmentComponentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessmentComponentSuccess;
  data: IRiskAssessmentState;
}
interface ICreateRiskAssessmentComponentFail extends Action<string> {
  type: RiskAssessmentActionTypes.CreateRiskAssessmentComponentFail;
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
  | IDeleteRiskAssessmentFail
  | IRiskAssessmentComponent
  | IRiskAssessmentComponentSuccess
  | IRiskAssessmentComponentFail
  | ICreateRiskAssessmentComponent
  | ICreateRiskAssessmentComponentSuccess
  | ICreateRiskAssessmentComponentFail;
