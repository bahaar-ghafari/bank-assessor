import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import RiskAssessmentCard from '../components/RiskAssessment/RiskAssessmentCard';
import { assesmentModel } from '../Models/model';
import { IApplicationState } from '../store/state';
type dataItem = assesmentModel;
export default function ApprovedAssessment(): ReactElement {
  const currentRiskAssessment = useSelector(
    (state: IApplicationState) => state.riskAssessment.data,
  );
  const list = currentRiskAssessment?.filter((item) => item.status === 'BANK_ASSESSMENT_APPROVED');
  return (
    <div>
      {list &&
        list.map((item: dataItem, index: number) => <RiskAssessmentCard data={item} key={index} />)}
    </div>
  );
}
