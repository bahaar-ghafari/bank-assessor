import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function NeedsCheckAssessmentForms(): ReactElement {
  return <RiskAssesments assesmentStatus={'SUBMITTED'} historyPath="submitted" />;
}
