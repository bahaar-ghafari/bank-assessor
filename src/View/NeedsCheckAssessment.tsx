import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function NeedsCheckAssessment(): ReactElement {
  return <RiskAssesments assesmentStatus={'GENERAL_ASSESSED'} historyPath="checkAllResponse" />;
}
