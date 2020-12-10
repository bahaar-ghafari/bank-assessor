import { Reducer } from 'redux';
import { RiskAssessmentActionTypes } from './actionType';

export const RiskAssessmentComponentReducer: Reducer<any> = (state: any = null, action: any) => {
  switch (action.type) {
    case RiskAssessmentActionTypes.SetRiskAssessmentApprove: {
      return {
        ...state,
        loading: true,
      } as any;
    }
    case RiskAssessmentActionTypes.SetRiskAssessmentApproveSuccess: {
      return {
        ...state.riskAssessment,
        loading: false,
        data: action.data,
      } as any;
    }
    case RiskAssessmentActionTypes.SetRiskAssessmentApproveFail: {
      return {
        ...state,
        loading: false,
      } as any;
    }
  }
  return state;
};
