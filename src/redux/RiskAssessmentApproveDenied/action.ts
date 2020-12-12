import { AppAction } from '../../store/state';
import { RiskAssessmentActionTypes } from './actionType';
import { ActionModel } from './model';
import { RiskAssessmentApi } from './api';

export const SetRiskAssessmentApprove = (
  role: any,
  id: number,
  history: any,
  historyPath:
    | 'CheckBankAssessorSResponse'
    | 'AssessorsFormsStatus'
    | 'OngoingAssessment'
    | 'OngoingGeneralAssessment'
    | 'NeedsCheckAssessmentForms'
    | 'NeedsCheckAssessment',
): AppAction<ActionModel> => async (dispatch, getState) => {
  dispatch({ type: RiskAssessmentActionTypes.SetRiskAssessmentApprove });
  try {
    const res = await RiskAssessmentApi.SetRiskAssessmentApprove(id, role);
    if (res.data) {
      setTimeout(() => {
        if (history) {
          history.replace(`/${historyPath}`);
        }
      }, 100);

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
