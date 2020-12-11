import { Reducer } from 'redux';
import { RiskAssessmentActionTypes } from './actionType';

export const sendResponseReducer: Reducer<any> = (state: any = null, action: any) => {
  switch (action.type) {
    case RiskAssessmentActionTypes.sendResponse: {
      return {
        ...state,
        loading: true,
      } as any;
    }
    case RiskAssessmentActionTypes.sendResponseSuccess: {
      return {
        ...state.riskAssessment,
        loading: false,
        data: action.data,
      } as any;
    }
    case RiskAssessmentActionTypes.sendResponseFail: {
      return {
        ...state,
        loading: false,
      } as any;
    }
  }
  return state;
};
