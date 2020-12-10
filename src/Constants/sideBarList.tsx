import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const sideBarList = [
  {
    id: 5,
    name: 'فرم ارزیابی های نیازمند بررسی', //submited /approve /not approve
    icon: <LayersIcon />,
    rout: 'NeedsCheckAssessmentForms',
  },
  {
    id: 6,
    name: 'نتایج ارزیابی های نیازمند بررسی', //general assesst /approve /not approve
    icon: <BarChartIcon />,
    rout: 'NeedsCheckAssessment',
  },
  {
    id: 7,
    name: 'نتایج ارزیابی عمومی بررسی شده', //general approve + not approve
    icon: <AssignmentIcon />,
    rout: 'approvedGeneralAssessmentResults',
  },
  {
    id: 8,
    name: 'ارزیابی در حال انجام', //bank assesst aprove /"clickable"
    icon: <LayersIcon />,
    rout: 'OngoingGeneralAssessment',
  },
  {
    id: 9,
    name: 'ارزیابی تایید شده', //'clickable lable =>  general assessment approve
    icon: <AssignmentIcon />,
    rout: 'approvedGeneralAssessment',
  },
  {
    id: 10,
    name: 'ارزیابی در حال انجام', //started "clickable"
    icon: <LayersIcon />,
    rout: 'OngoingAssessment',
  },
  {
    id: 11,
    name: 'ارزیابی نیازمند اصلاح', //bank assesst not approve
    icon: <BarChartIcon />,
    rout: 'NeedsCorrectionAssessment',
  },
  {
    id: 12,
    name: 'ارزیابی تایید شده', //clickable lable =>  bank assessment approve
    icon: <AssignmentIcon />,
    rout: 'approvedAssessment',
  },
];
export const risk_management_assessor_sideBarItems = [
  {
    id: 1,
    name: 'تعریف فرم ارزیابی جدید',
    icon: <LayersIcon />,
    rout: 'DefineNewAssessorsForms',
  },
  {
    id: 2,
    name: 'وضعیت فرم های ارزیابی',
    icon: <DashboardIcon />,
    rout: 'AssessorsFormsStatus',
  },
  {
    id: 3,
    name: 'بررسی پاسخ های ارزیابان بانک',
    icon: <BarChartIcon />,
    rout: 'CheckBankAssessorSResponse',
  },
  { id: 4, name: 'اخذ گزارشات', icon: <AssignmentIcon />, rout: 'GetReports' },
];
export const committee_sideBarItems = [
  {
    id: 5,
    name: 'فرم ارزیابی های نیازمند بررسی',
    icon: <LayersIcon />,
    rout: 'NeedsCheckAssessmentForms',
  },
  {
    id: 6,
    name: 'نتایج ارزیابی نیازمند بررسی',
    icon: <BarChartIcon />,
    rout: 'NeedsCheckAssessment',
  },
  {
    id: 7,
    name: 'نتایج ارزیابی عمومی تایید شده',
    icon: <AssignmentIcon />,
    rout: 'approvedGeneralAssessmentResults',
  },
];

export const general_assessor_sideBarItems = [
  {
    id: 8,
    name: 'ارزیابی در حال انجام',
    icon: <LayersIcon />,
    rout: 'OngoingGeneralAssessment',
  },
  {
    id: 9,
    name: 'ارزیابی تایید شده',
    icon: <AssignmentIcon />,
    rout: 'approvedGeneralAssessment',
  },
];

export const bank_sideBarItems = [
  {
    id: 10,
    name: 'ارزیابی در حال انجام',
    icon: <LayersIcon />,
    rout: 'OngoingAssessment',
  },
  {
    id: 11,
    name: 'ارزیابی نیازمند اصلاح',
    icon: <BarChartIcon />,
    rout: 'NeedsCorrectionAssessment',
  },
  {
    id: 12,
    name: 'ارزیابی تایید شده',
    icon: <AssignmentIcon />,
    rout: 'approvedAssessment',
  },
];
