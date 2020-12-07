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
//
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

export type ActionModel =
  | IRiskAssessment
  | IRiskAssessmentSuccess
  | IRiskAssessmentFail
  | IOneRiskAssessment
  | IOneRiskAssessmentSuccess
  | IOneRiskAssessmentFail
  | ICreateRiskAssessment
  | ICreateRiskAssessmentSuccess
  | ICreateRiskAssessmentFail;
