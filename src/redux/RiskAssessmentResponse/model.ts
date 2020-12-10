import { Action } from 'redux';
import { assesmentComponentModel } from '../../Models/model';
import { RiskAssessmentActionTypes } from './actionType';

export interface IRiskAssessmentComponentState {
  data: assesmentComponentModel[];
  loading: boolean;
}
//component get
interface IRiskAssessmentComponent extends Action<string> {
  type: RiskAssessmentActionTypes.sendResponse;
}
interface IRiskAssessmentComponentSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.sendResponseSuccess;
  data: assesmentComponentModel;
}
interface IRiskAssessmentComponentFail extends Action<string> {
  type: RiskAssessmentActionTypes.sendResponseFail;
}

export type ActionModel =
  | IRiskAssessmentComponent
  | IRiskAssessmentComponentSuccess
  | IRiskAssessmentComponentFail;
