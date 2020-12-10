import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function ApprovedAssessment(): ReactElement {
  return <RiskAssesments assesmentStatus={'BANK_ASSESSMENT_APPROVED'} />;
}
