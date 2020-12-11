import { AppAction } from '../../store/state';
import { RiskAssessmentActionTypes } from './actionType';
import { ActionModel } from './model';
import { RiskAssessmentApi } from './api';

export const sendResponse = (
  id: number,
  type: 'bank-response' | 'general-response',
  data: {
    componentId: number;
    response: string;
  }[],
): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: RiskAssessmentActionTypes.sendResponse });
  try {
    const res = await RiskAssessmentApi.sendResponse(id, type, data);
    if (res.data) {
      const data = res.data;
      dispatch({
        type: RiskAssessmentActionTypes.sendResponseSuccess,
        data: data,
      });
    }
  } catch (error) {
    dispatch({ type: RiskAssessmentActionTypes.sendResponseFail });
  }
};
