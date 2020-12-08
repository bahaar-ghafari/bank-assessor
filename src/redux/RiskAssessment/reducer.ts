import { Reducer } from 'redux';
import { RiskAssessmentActionTypes } from './actionType';

export const RiskAssessmentReducer: Reducer<any> = (state: any = null, action: any) => {
  switch (action.type) {
    case RiskAssessmentActionTypes.GetRiskAssessment: {
      return {
        ...state,
        loading: true,
      } as any;
    }
    case RiskAssessmentActionTypes.GetRiskAssessmentSuccess: {
      return {
        ...state.riskAssessment,
        loading: false,
        data: action.data,
      } as any;
    }
    case RiskAssessmentActionTypes.GetRiskAssessmentFail: {
      return {
        ...state,
        loading: false,
      } as any;
    }
    case RiskAssessmentActionTypes.GetOneRiskAssessment: {
      return {
        ...state,
        loading: true,
      } as any;
    }
    case RiskAssessmentActionTypes.GetOneRiskAssessmentSuccess: {
      return {
        ...state.riskAssessment,
        loading: false,
        data: action.data,
      } as any;
    }
    case RiskAssessmentActionTypes.GetOneRiskAssessmentFail: {
      return {
        ...state,
        loading: false,
      } as any;
    }
    case RiskAssessmentActionTypes.CreateRiskAssessment: {
      return {
        ...state,
        loading: true,
      } as any;
    }
    case RiskAssessmentActionTypes.CreateRiskAssessmentSuccess: {
      return {
        ...state.riskAssessment,
        loading: false,
        data: action.data,
      } as any;
    }
    case RiskAssessmentActionTypes.CreateRiskAssessmentFail: {
      return {
        ...state,
        loading: false,
      } as any;
    }
    case RiskAssessmentActionTypes.DeleteRiskAssessment: {
      return {
        ...state,
        loading: true,
      } as any;
    }
    case RiskAssessmentActionTypes.DeleteRiskAssessmentSuccess: {
      return {
        ...state.riskAssessment,
        loading: false,
        data: action.data,
      } as any;
    }
    case RiskAssessmentActionTypes.DeleteRiskAssessmentFail: {
      return {
        ...state,
        loading: false,
      } as any;
    }
  }
  return state;
};
