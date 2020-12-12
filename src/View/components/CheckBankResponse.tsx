import { Box, makeStyles } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NoData from '../../components/Nodata.tsx/NoData';
import { RiskAssessment } from '../../redux/RiskAssessment/action';
import { SetRiskAssessmentApprove } from '../../redux/RiskAssessmentApproveDenied/action';
import { IApplicationState } from '../../store/state';
import CustomButton from '../../utils/buttons/Button';
import { GetRiskAssessmentComponent } from '../../redux/RiskAssessmentComponent/action';
import AssessorItems from './AssessorItems';
import NotificationManager from '../../components/Notification/NotificationManager';

export default function CheckBankResponse(): ReactElement {
  const currentRiskAssessment = useSelector(
    (state: IApplicationState) => state.riskAssessment?.data,
  );

  const currentRiskAssessmentComponent = useSelector(
    (state: IApplicationState) => state.riskAssessmentComponent,
  );

  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(0, 1, 0),
    },
  }));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [openNotif, setopenNotif] = useState(false);
  const assID = parseInt(history.location.pathname.split('/')[2]);
  const currentRiskAssessmentStatus =
    currentRiskAssessment &&
    currentRiskAssessment.length > 0 &&
    currentRiskAssessment.find((item) => item.id === assID)?.status;

  useEffect(() => {
    dispatch(RiskAssessment());
    dispatch(GetRiskAssessmentComponent(history, 'chechBankResponse', assID));
  }, [currentRiskAssessmentStatus, assID, dispatch, history]);

  const list = currentRiskAssessmentComponent?.data;
  const assessorItemsData = list?.map((item) => {
    return {
      key: 'پاسخ بانک',
      value: item.bankAssessmentResponse,
      title: item.title,
    };
  });
  const handleApprove = () => {
    setopenNotif(true);
    dispatch(
      SetRiskAssessmentApprove(
        'bank-assessed-approved',
        assID,
        history,
        'CheckBankAssessorSResponse',
      ),
    );
  };
  const handleDeny = () => {
    setopenNotif(true);
    dispatch(
      SetRiskAssessmentApprove(
        'bank-assessed-not-approved',
        assID,
        history,
        'CheckBankAssessorSResponse',
      ),
    );
  };
  return (
    <>
      <Box my={4}>
        <CustomButton
          disabled={list && list.length ? false : true}
          type="submit"
          variant="contained"
          color="default"
          className={classes.submit}
          label="تایید مولفه های ارزیابی"
          onClickFunction={handleApprove}
        />
        <CustomButton
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
          label="رد مولفه ارزیابی"
          onClickFunction={handleDeny}
        />
      </Box>
      {list && list.length ? (
        <AssessorItems data={assessorItemsData} renderAction={false} />
      ) : (
        <NoData />
      )}
      {openNotif && (
        <NotificationManager
          open={openNotif}
          handleClose={() => setopenNotif(false)}
          message="مولفه با موفقیت تغییر وضعیت داد"
        />
      )}
    </>
  );
}
