import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../../redux/RiskAssessment/action';
import { GetRiskAssessmentComponent } from '../../redux/RiskAssessmentComponent/action';
import { IApplicationState } from '../../store/state';
import AssessorsTable from '../../components/Tables/AssessorsTable';
import NoData from '../../components/Nodata.tsx/NoData';
import Loading from '../../components/Loading/Loading';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { HandleViewElement } from '../../Helpers/ViewElement';

interface IDataType {
  title: string;
  bankName: string;
  startDate: any;
  deadlineDate: any;
  id: number;
}
interface IProps {
  assesmentStatus:
    | 'CREATED'
    | 'SUBMITTED'
    | 'APPROVED_BY_COMMITTEE'
    | 'DECLINED_BY_COMMITTEE'
    | 'STARTED'
    | 'BANK_ASSESSED'
    | 'BANK_ASSESSMENT_APPROVED'
    | 'BANK_ASSESSMENT_NOT_APPROVED'
    | 'GENERAL_ASSESSED'
    | 'GENERAL_ASSESSMENT_APPROVED'
    | 'GENERAL_ASSESSMENT_NOT_APPROVED'
    | 'FINISHED';
  historyPath:
    | 'created'
    | 'submitted'
    | 'getResponse'
    | 'getGeneralResponse'
    | 'chechBankResponse'
    | null;
}
export default function RiskAssesments({ assesmentStatus, historyPath }: IProps): ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(RiskAssessment());
  }, []);

  const currentUser = useSelector((state: IApplicationState) => state.auth);
  const currentRiskAssessment = useSelector((state: IApplicationState) => state.riskAssessment);

  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(0, 1, 0),
    },
  }));
  const classes = useStyles();

  const handleShowAssessmentItems = (data: IDataType) => {
    historyPath && dispatch(GetRiskAssessmentComponent(history, historyPath, data.id));
  };

  const tempoColumns = [
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
  const columns = historyPath
    ? [
        ...tempoColumns,
        {
          label: 'عملیات',
          value: 'action',
        },
      ]
    : tempoColumns;

  const currentRiskAssessmentData = currentRiskAssessment?.data;
  const listTempo = historyPath && ['getResponse'].includes(historyPath);
  const list = listTempo
    ? currentRiskAssessmentData &&
      currentRiskAssessmentData
        ?.filter((item) => item.status === assesmentStatus)
        .filter((item) => item.bankName === currentUser.role)
    : currentRiskAssessmentData &&
      currentRiskAssessmentData?.filter((item) => item.status === assesmentStatus);

  const rows =
    list &&
    list.map((item) => {
      return { ...item, action: HandleViewElement(item, list, classes, handleShowAssessmentItems) };
    });
  return (
    <>
      {list && list.length ? (
        <AssessorsTable
          rows={rows}
          columns={columns}
          hasAsction={historyPath !== null ? true : false}
        />
      ) : (
        <NoData />
      )}
      {currentRiskAssessment?.loading && <Loading />}
    </>
  );
}
