import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import RiskAssessmentForms from '../components/RiskAssessment/RiskAssessmentForm';
import { CreateRiskAssessment } from '../redux/RiskAssessment/action';

export default function DefineNewAssessorsForms(): ReactElement {
  const dispatch = useDispatch();
  const [Assessors, setAssessors] = useState({
    title: '',
    bankName: '',
    startDate: new Date(),
    deadlineDate: new Date(),
  });
  const handleChange = (name: string, value: string) => {
    setAssessors({ ...Assessors, [name]: value });
  };
  const handleChangeDate = (name: string, date: any) => {
    // const date = event?.value?._d;
    console.log('dateeee', name, date);
  };
  const HandleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CreateRiskAssessment(event, Assessors));
    setAssessors({
      title: '',
      bankName: '',
      startDate: new Date(),
      deadlineDate: new Date(),
    });
  };
  return (
    <div style={{ direction: 'rtl' }}>
      <RiskAssessmentForms
        title={Assessors.title}
        bankName={Assessors.bankName}
        startDate={Assessors.startDate}
        deadlineDate={Assessors.deadlineDate}
        onChange={handleChange}
        onChangeDate={handleChangeDate}
        onSubmit={(event: React.ChangeEvent<HTMLInputElement>) => HandleSubmit(event)}
      />
    </div>
  );
}
