import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const sideBarList = [
  {
    id: 5,
    name: 'فرم ارزیابی های نیازمند بررسی',
    icon: <LayersIcon />,
    rout: 'NeedsCheckAssessmentForms',
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
