import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function OngoingAssessment(): ReactElement {
  return <RiskAssesments assesmentStatus={'STARTED'} />;
}
