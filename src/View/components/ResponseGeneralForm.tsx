import { Box } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { SetRiskAssessmentApprove } from '../../redux/RiskAssessmentApproveDenied/action';
import { GetRiskAssessmentComponent } from '../../redux/RiskAssessmentComponent/action';
import { sendResponse } from '../../redux/RiskAssessmentResponse/action';
import { IApplicationState } from '../../store/state';
import CustomButton from '../../utils/buttons/Button';
import CustomTextField from '../../utils/inputs/TextField';

export default function ResponseForm(): ReactElement {
  const assessmentElements = useSelector(
    (state: IApplicationState) => state.riskAssessmentComponent,
  );
  const list = assessmentElements?.data;
  const initialState = list && list.map((item) => ' ');
  const [response, setresponse] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const assID = parseInt(history.location.pathname.split('/')[2]);
  useEffect(() => {
    dispatch(GetRiskAssessmentComponent(history, 'getResponse', assID));
  }, []);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const data = list.map((item, index: number) => {
      return {
        componentId: item.id,
        response: response[index],
      };
    });
    dispatch(sendResponse(assID, 'general-response', data));
    dispatch(SetRiskAssessmentApprove('general-assessed', assID));
    setresponse(initialState);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, ind: number, id: number) => {
    setresponse(
      response.map((item, index: number) => {
        if (index === ind) {
          return e.target.value;
        }
        return item;
      }),
    );
  };
  return (
    <>
      {list &&
        list.map((item, index: number) => (
          <Box key={index}>
            <Box m={2}>{item.title}:</Box>
            <CustomTextField
              width="10%"
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="response"
              label="پاسخ"
              name={`response${index}`}
              autoFocus={true}
              value={response[index]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, item.id)}
            />
          </Box>
        ))}
      <CustomButton
        type="submit"
        fullWidth={true}
        variant="contained"
        color="primary"
        label="ارسال پاسخ ها"
        onClickFunction={(e: React.ChangeEvent<HTMLInputElement>) => handleSubmit(e)}
      />
      {assessmentElements?.loading && <Loading />}
    </>
  );
}
