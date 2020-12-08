import { AppAction } from '../../store/state';
import { RiskAssessmentActionTypes } from './actionType';
import { ActionModel } from './model';
import { RiskAssessmentApi } from './api';

//component
export const GetRiskAssessmentComponent = (
  history: any,
  id: number,
): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: RiskAssessmentActionTypes.GetRiskAssessmentComponent });
  try {
    const res = await RiskAssessmentApi.getRiskAssessmentComponent(id);
    if (res.data) {
      if (history) {
        history.replace(`/AssessorsFormsStatus/${id}`);
      }
      const data = res.data;
      dispatch({
        type: RiskAssessmentActionTypes.GetRiskAssessmentComponentSuccess,
        data: data,
      });
    }
  } catch (error) {
    dispatch({ type: RiskAssessmentActionTypes.GetRiskAssessmentComponentFail });
  }
};

export const CreateRiskAssessmentComponent = (
  data: string,
  id: number,
): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: RiskAssessmentActionTypes.GetRiskAssessmentComponent });
  try {
    const res = await RiskAssessmentApi.createRiskAssessmentComponent(data, id);
    if (res.data) {
      const data = res.data;
      dispatch({
        type: RiskAssessmentActionTypes.CreateRiskAssessmentComponentSuccess,
        data: data,
      });
    }
  } catch (error) {
    dispatch({ type: RiskAssessmentActionTypes.CreateRiskAssessmentComponentFail });
  }
};
