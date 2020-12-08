import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../redux/RiskAssessment/action';
import { IApplicationState } from '../store/state';
import CustomTable from '../components/Tables/CustomTable';
import Loading from '../components/Loading/Loading';
import { Box, makeStyles } from '@material-ui/core';
import CustomButton from '../utils/buttons/Button';
import NoData from '../components/Nodata.tsx/NoData';

//
export default function GetReports(): ReactElement {
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
  ];
  const list = currentRiskAssessment?.data?.filter((item) => item.status === 'CREATED');

  return (
    <>
      {list ? <CustomTable rows={list} columns={columns} hasAsction={false} /> : <NoData />}
      {currentRiskAssessment?.loading && <Loading />}
    </>
  );
}
