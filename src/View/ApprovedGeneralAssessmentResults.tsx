import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';
//
export default function ApprovedGeneralAssessmentResults(): ReactElement {
  return (
    <RiskAssesments
      historyPath={null}
      assesmentStatus={'GENERAL_ASSESSMENT_APPROVED' || 'GENERAL_ASSESSMENT_NOT_APPROVED'}
    />
  );
}
