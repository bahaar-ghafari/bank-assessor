import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../redux/RiskAssessment/action';
import RiskAssessmentCard from '../components/RiskAssessment/RiskAssessmentCard';
import { IApplicationState } from '../store/state';
import { assesmentModel } from '../Models/model';
import NoData from '../components/Nodata.tsx/NoData';
import Loading from '../components/Loading/Loading';

export default function NeedsCheckAssessment(): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RiskAssessment());
  }, []);
  const currentRiskAssessment = useSelector((state: IApplicationState) => state.riskAssessment);
  const list = currentRiskAssessment?.data?.filter((item) => item.status === 'GENERAL_ASSESSED');
  return (
    <div>
      {list && list.length ? (
        list?.map((item: assesmentModel, index: number) => (
          <RiskAssessmentCard data={item} key={index} />
        ))
      ) : (
        <NoData />
      )}
      {currentRiskAssessment?.loading && <Loading />}
    </div>
  );
}
