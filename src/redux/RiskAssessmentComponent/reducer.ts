import { Reducer } from 'redux';
import { RiskAssessmentActionTypes } from './actionType';

export const RiskAssessmentComponentReducer: Reducer<any> = (state: any = null, action: any) => {
  switch (action.type) {
    case RiskAssessmentActionTypes.GetRiskAssessmentComponent: {
      return {
        ...state,
        loading: true,
      } as any;
    }
    case RiskAssessmentActionTypes.GetRiskAssessmentComponentSuccess: {
      return {
        ...state.riskAssessment,
        loading: false,
        data: action.data,
      } as any;
    }
    case RiskAssessmentActionTypes.GetRiskAssessmentComponentFail: {
      return {
        ...state,
        loading: false,
      } as any;
    }
    case RiskAssessmentActionTypes.CreateRiskAssessmentComponent: {
      return {
        ...state,
        loading: true,
      } as any;
    }
    case RiskAssessmentActionTypes.CreateRiskAssessmentComponentSuccess: {
      return {
        ...state.riskAssessment,
        loading: false,
        data: action.data,
      } as any;
    }
    case RiskAssessmentActionTypes.CreateRiskAssessmentComponentFail: {
      return {
        ...state,
        loading: false,
      } as any;
    }
  }
  return state;
};
