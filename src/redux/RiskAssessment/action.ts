import { AppAction } from '../../store/state';
import { RiskAssessmentActionTypes } from './actionType';
import { ActionModel } from './model';
import { RiskAssessmentApi } from './api';

//send request to server
export const RiskAssessment = (): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: RiskAssessmentActionTypes.GetRiskAssessment });
  try {
    const res = await RiskAssessmentApi.getRiskAssessment();
    if (res.data) {
      const data = res.data;
      dispatch({
        type: RiskAssessmentActionTypes.GetRiskAssessmentSuccess,
        data: data,
      });
    }
  } catch (error) {
    dispatch({ type: RiskAssessmentActionTypes.GetRiskAssessmentFail });
  }
};
export const OneRiskAssessment = (history: any, id: number): AppAction<ActionModel> => async (
  dispatch,
  getState,
) => {
  dispatch({ type: RiskAssessmentActionTypes.GetOneRiskAssessment });
  try {
    const res = await RiskAssessmentApi.getOneRiskAssessment(id);
    if (res.data) {
      const data = res.data;
      dispatch({
        type: RiskAssessmentActionTypes.GetOneRiskAssessmentSuccess,
        data: data,
      });
      history.replace(`/BankAssessorsResponse/${id}`);
    }
  } catch (error) {
    dispatch({ type: RiskAssessmentActionTypes.GetOneRiskAssessmentFail });
  }
};

export const CreateRiskAssessment = (
  event: React.ChangeEvent<HTMLInputElement>,
  data: {
    title: string;
    bankName: string;
    startDate: string;
    deadlineDate: string;
  },
): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: RiskAssessmentActionTypes.CreateRiskAssessment });
  try {
    const res = await RiskAssessmentApi.createRiskAssessment(event, data);
    if (res.data) {
      const data = res.data;
      dispatch({
        type: RiskAssessmentActionTypes.CreateRiskAssessmentSuccess,
        data: data,
      });
    }
  } catch (error) {
    dispatch({ type: RiskAssessmentActionTypes.CreateRiskAssessmentFail });
  }
};
