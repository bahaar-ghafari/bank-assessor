import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function OngoingGeneralAssessment(): ReactElement {
  return <RiskAssesments assesmentStatus={'BANK_ASSESSMENT_APPROVED'} />;
}
