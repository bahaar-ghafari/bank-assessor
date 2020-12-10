import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../redux/RiskAssessment/action';
import { IApplicationState } from '../store/state';
import AssessorsTable from '../components/Tables/AssessorsTable';
import Loading from '../components/Loading/Loading';
import { makeStyles } from '@material-ui/core';
import NoData from '../components/Nodata.tsx/NoData';

//
export default function GetReports(): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    // effect
    dispatch(RiskAssessment());
  }, []);

  const currentRiskAssessment = useSelector((state: IApplicationState) => state.riskAssessment);

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
      label: 'وضعیت',
      value: 'status',
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
      {list ? (
        <AssessorsTable rows={list} columns={columns} hasAsction={false} hasStatus={true} />
      ) : (
        <NoData />
      )}
      {currentRiskAssessment?.loading && <Loading />}
    </>
  );
}
