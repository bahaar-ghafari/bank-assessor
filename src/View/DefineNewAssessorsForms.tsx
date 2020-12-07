import React, { ReactElement, useState } from 'react';
import RiskAssessmentForms from '../components/RiskAssessment/RiskAssessmentForm';

interface IProps {}

export default function DefineNewAssessorsForms(props: IProps): ReactElement {
  const [Assessors, setAssessors] = useState({
    title: '',
    bankName: '',
    startDate: '',
    endDate: '',
  });
  const HandleSubmit = () => {};
  return (
    <div>
      <RiskAssessmentForms
        title={Assessors.title}
        bankName={Assessors.bankName}
        startDate={Assessors.startDate}
        endDate={Assessors.endDate}
        onHandleInput={setAssessors}
        onSubmit={HandleSubmit}
      />
    </div>
  );
}
