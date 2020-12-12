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
import RangePicker from '../../utils/inputs/RangePicker';

export default function ResponseForm(): ReactElement {
  const assessmentElements = useSelector(
    (state: IApplicationState) => state.riskAssessmentComponent,
  );
  const list = assessmentElements?.data;
  const initialState = list && list.map((item) => 80);
  const [response, setresponse] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const type = history.location.pathname.split('/')[1].includes('getGeneralResponse');
  const pathhistry = type ? 'getGeneralResponse' : 'getResponse';
  const restype = type ? 'general-response' : 'bank-response';
  const resApprType = type ? 'general-assessed' : 'bank-assessed';
  const parentRoute = type ? 'OngoingGeneralAssessment' : 'OngoingAssessment';
  const assID = parseInt(history.location.pathname.split('/')[2]);
  useEffect(() => {
    dispatch(GetRiskAssessmentComponent(history, pathhistry, assID));
  }, []);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (response && response.length > 0) {
      e.preventDefault();
      const data = list.map((item, index: number) => {
        return {
          componentId: item.id,
          response: response[index],
        };
      });
      dispatch(sendResponse(assID, restype, data));
      dispatch(SetRiskAssessmentApprove(resApprType, assID, history, parentRoute));
      setresponse(initialState);
      history.push(parentRoute);
    }
  };
  const handleChange = (e: any, value: number, ind: number) => {
    setresponse(
      response.map((item, index: number) => {
        if (index === ind) {
          return value;
        }
        return item;
      }),
    );
  };
  return (
    <>
      {list &&
        response &&
        list.map((item, index: number) => (
          <Box key={index}>
            <Box>
              <Box>متن سوال</Box>
              <Box m={2}>{item.title}</Box>
            </Box>
            <RangePicker
              value={response[index]}
              handleChange={(e: any, val: any) => handleChange(e, val, index)}
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
