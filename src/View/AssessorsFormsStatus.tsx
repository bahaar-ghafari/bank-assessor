import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../redux/RiskAssessment/action';
import RiskAssessmentCard from '../components/RiskAssessment/RiskAssessmentCard';
import { IApplicationState } from '../store/state';
import { assesmentModel } from '../Models/model';
import CustomTable from '../components/Tables/CustomTable';
import NoData from '../components/Nodata.tsx/NoData';
import Loading from '../components/Loading/Loading';
import { Box, makeStyles } from '@material-ui/core';
import CustomButton from '../utils/buttons/Button';

//
export default function ApprovedGeneralAssessmentResults(): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    // effect
    dispatch(RiskAssessment());
  }, []);
  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(0, 1, 0),
    },
  }));
  const classes = useStyles();

  const currentRiskAssessment = useSelector((state: IApplicationState) => state.riskAssessment);
  const renderAction = () => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          label="ویرایش"
          onClickFunction={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)}
        />
        <CustomButton
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
          label="حذف"
          onClickFunction={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e)}
        />
      </Box>
    );
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
      return { ...item, action: renderAction() };
    });
  return (
    <>
      {list.length ? <CustomTable rows={rows} columns={columns} hasAsction={true} /> : <NoData />}
      {currentRiskAssessment?.loading && <Loading />}
    </>
  );
}
