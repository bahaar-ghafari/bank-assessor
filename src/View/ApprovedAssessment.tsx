import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import NoData from '../components/Nodata.tsx/NoData';
import RiskAssessmentCard from '../components/RiskAssessment/RiskAssessmentCard';
import { assesmentModel } from '../Models/model';
import { IApplicationState } from '../store/state';
type dataItem = assesmentModel;
export default function ApprovedAssessment(): ReactElement {
  const currentRiskAssessment = useSelector((state: IApplicationState) => state.riskAssessment);
  const list = currentRiskAssessment?.data?.filter(
    (item) => item.status === 'BANK_ASSESSMENT_APPROVED',
  );
  return (
    <div>
      {list && list.length ? (
        list.map((item: dataItem, index: number) => <RiskAssessmentCard data={item} key={index} />)
      ) : (
        <NoData />
      )}
      {currentRiskAssessment?.loading && <Loading />}
    </div>
  );
}
