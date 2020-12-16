import { AppAction } from '../../store/state';
import { RiskAssessmentActionTypes } from './actionType';
import { ActionModel } from './model';
import { RiskAssessmentApi } from './api';

export const GetRiskAssessmentComponent = (
  history: any,
  historyPath:
    | 'created'
    | 'submitted'
    | 'getResponse'
    | 'getGeneralResponse'
    | 'checkBankResponse'
    | 'checkAllResponse',
  id: number,
): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: RiskAssessmentActionTypes.GetRiskAssessmentComponent });
  try {
    const res = await RiskAssessmentApi.getRiskAssessmentComponent(id);
    if (res.data) {
      if (history) {
        history.replace(`/${historyPath}/${id}`);
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
  dispatch({ type: RiskAssessmentActionTypes.CreateRiskAssessmentComponent });
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

export const CreateRiskComponents = (data: string[], id: number): AppAction<ActionModel> => async (
  dispatch,
  getState,
) => {
  dispatch({ type: RiskAssessmentActionTypes.CreateRiskComponents });
  try {
    const res = await RiskAssessmentApi.createRiskComponents(data, id);
    if (res.data) {
      const data = res.data;
      dispatch({
        type: RiskAssessmentActionTypes.CreateRiskComponentsSuccess,
        data: data,
      });
    }
  } catch (error) {
    dispatch({ type: RiskAssessmentActionTypes.CreateRiskComponentsFail });
  }
};
