import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../redux/RiskAssessment/action';
import { IApplicationState } from '../store/state';
import AssessorsTable from '../components/Tables/AssessorsTable';
import Loading from '../components/Loading/Loading';
import { makeStyles } from '@material-ui/core';
import NoData from '../components/Nodata.tsx/NoData';
import RiskAssesments from "../components/RiskAssessment/RiskAssesments";

//
export default function GetReports(): ReactElement {
  return <RiskAssesments assesmentStatus={'FINISHED'} historyPath="getReport" />;
}
