import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../redux/RiskAssessment/action';
import RiskAssessmentCard from '../components/RiskAssessment/RiskAssessmentCard';
import { IApplicationState } from '../store/state';
import { assesmentModel } from '../Models/model';

export default function NeedsCheckAssessmentForms(): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RiskAssessment());
  }, []);
  const currentRiskAssessment = useSelector(
    (state: IApplicationState) => state.riskAssessment?.data,
  );
  const list = currentRiskAssessment?.filter((item) => item.status === 'SUBMITTED');
  return (
    <div>
      {list &&
        list?.map((item: assesmentModel, index: number) => (
          <RiskAssessmentCard data={item} key={index} />
        ))}
    </div>
  );
}
