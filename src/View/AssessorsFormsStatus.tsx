import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiskAssessment } from '../redux/RiskAssessment/action';
import RiskAssessmentCard from '../components/RiskAssessment/RiskAssessmentCard';
import { IApplicationState } from '../store/state';
import { assesmentModel } from '../Models/model';
import CustomTable from '../components/Tables/CustomTable';

//
export default function ApprovedGeneralAssessmentResults(): ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    // effect
    dispatch(RiskAssessment());
  }, []);
  const currentRiskAssessment = useSelector(
    (state: IApplicationState) => state.riskAssessment?.data,
  );
  const rows = [
    { title: 'Frozen 1', bankName: 139, startDate: 6.0, deadlineDate: 24 },
    { title: 'Frozen 2', bankName: 179, startDate: 4.0, deadlineDate: 34 },
    { title: 'Frozen 3', bankName: 159, startDate: 2.0, deadlineDate: 14 },
    { title: 'Frozen 4', bankName: 169, startDate: 3.0, deadlineDate: 54 },
    { title: 'Frozen 5', bankName: 159, startDate: 6.0, deadlineDate: 24 },
  ];
  const columns = [
    {
      label: 'عنوان',
      value: 'title',
    },
    {
      label: 'نام بانک',
      value: 'bankName',
    },
    {
      label: 'زمان شروع',
      value: 'startDate',
    },
    {
      label: 'زمان پایان',
      value: 'deadlineDate',
    },
  ];
  const list = currentRiskAssessment?.filter((item) => item.status === 'CREATED');
  console.log('list', list);
  return (
    <div>
      {/* {list &&
        list?.map((item: assesmentModel, index: number) => (
          <RiskAssessmentCard data={item} key={index} />
        ))} */}
      <CustomTable rows={rows} columns={columns} />
    </div>
  );
}
