import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function NeedsCorrectionAssessment(): ReactElement {
  return <RiskAssesments assesmentStatus={'BANK_ASSESSMENT_NOT_APPROVED'} historyPath={null} />;
}
