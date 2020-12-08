import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment, DeleteRiskAssessment } from '../redux/RiskAssessment/action';
import { GetRiskAssessmentComponent } from '../redux/RiskAssessmentComponent/action';
import { IApplicationState } from '../store/state';
import AssessorsTable from '../components/Tables/AssessorsTable';
import NoData from '../components/Nodata.tsx/NoData';
import Loading from '../components/Loading/Loading';
import { Box, makeStyles } from '@material-ui/core';
import CustomButton from '../utils/buttons/Button';
import { useHistory } from 'react-router-dom';

interface IDataType {
  title: string;
  bankName: string;
  startDate: string;
  deadlineDate: string;
  id: number;
}
export default function ApprovedGeneralAssessmentResults(): ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(RiskAssessment());
  }, []);

  const currentRiskAssessment = useSelector((state: IApplicationState) => state.riskAssessment);

  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(0, 1, 0),
    },
  }));
  const classes = useStyles();

  const renderAction = (data: IDataType) => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          label="مشاهده مولفه ها"
          onClickFunction={() => handleShowAssessmentItems(data)}
        />
      </Box>
    );
  };
  const handleShowAssessmentItems = (data: IDataType) => {
    dispatch(GetRiskAssessmentComponent(history, data.id));
  };

  const columns = [
    {
      label: 'عنوان',
      value: 'title',
    },
    {
      label: 'نام بانک',
      value: 'bankName',
    },
    {
      label: 'زمان شروع',
      value: 'startDate',
    },
    {
      label: 'زمان پایان',
      value: 'deadlineDate',
    },
    {
      label: 'عملیات',
      value: 'action',
    },
  ];
  const list = currentRiskAssessment?.data?.filter((item) => item.status === 'CREATED');
  const rows =
    list &&
    list.map((item) => {
      return { ...item, action: renderAction(item) };
    });
  return (
    <>
      {list && list.length ? (
        <AssessorsTable rows={rows} columns={columns} hasAsction={true} />
      ) : (
        <NoData />
      )}
      {currentRiskAssessment?.loading && <Loading />}
    </>
  );
}
