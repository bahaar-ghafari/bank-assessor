import { AppAction } from '../../store/state';
import { RiskAssessmentActionTypes } from './actionType';
import { ActionModel } from './model';
import { RiskAssessmentApi } from './api';

export const SetRiskAssessmentApprove = (role: any, id: number): AppAction<ActionModel> => async (
  dispatch,
  getState,
) => {
  dispatch({ type: RiskAssessmentActionTypes.SetRiskAssessmentApprove });
  try {
    const res = await RiskAssessmentApi.SetRiskAssessmentApprove(id, role);
    if (res.data) {
      const data = res.data;
      dispatch({
        type: RiskAssessmentActionTypes.SetRiskAssessmentApproveSuccess,
        data: data,
      });
    }
  } catch (error) {
    dispatch({ type: RiskAssessmentActionTypes.SetRiskAssessmentApproveFail });
  }
};
