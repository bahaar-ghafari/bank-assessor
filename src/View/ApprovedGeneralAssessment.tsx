import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function ApprovedGeneralAssessment(): ReactElement {
  return <RiskAssesments assesmentStatus={'GENERAL_ASSESSMENT_APPROVED'} />;
}
