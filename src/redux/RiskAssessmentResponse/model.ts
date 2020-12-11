import { Action } from 'redux';
import { assesmentComponentModel } from '../../Models/model';
import { RiskAssessmentActionTypes } from './actionType';

export interface IsendResponseState {
  data: assesmentComponentModel[];
  loading: boolean;
}
//component get
interface IsendResponse extends Action<string> {
  type: RiskAssessmentActionTypes.sendResponse;
}
interface IsendResponseSuccess extends Action<string> {
  type: RiskAssessmentActionTypes.sendResponseSuccess;
  data: assesmentComponentModel;
}
interface IsendResponseFail extends Action<string> {
  type: RiskAssessmentActionTypes.sendResponseFail;
}

export type ActionModel = IsendResponse | IsendResponseSuccess | IsendResponseFail;
