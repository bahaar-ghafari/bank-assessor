import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function AssessorsFormStatus(): ReactElement {
  return (
    <>
      <RiskAssesments assesmentStatus={'CREATED'} historyPath="created" />
    </>
  );
}
