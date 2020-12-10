import React, { ReactElement } from 'react';
import RiskAssesments from '../components/RiskAssessment/RiskAssesments';

export default function CheckBankAssessorSResponse(): ReactElement {
  return <RiskAssesments assesmentStatus={'BANK_ASSESSED'} historyPath={null} />;
}
