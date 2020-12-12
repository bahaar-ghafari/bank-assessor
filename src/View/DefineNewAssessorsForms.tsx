import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import RiskAssessmentForms from './components/RiskAssessmentForm';
import { CreateRiskAssessment } from '../redux/RiskAssessment/action';
import moment from 'moment';
import NotificationManager from '../components/Notification/NotificationManager';
export default function DefineNewAssessorsForms(): ReactElement {
  const dispatch = useDispatch();
  const initial = {
    title: '',
    bankName: '',
    startDate: moment(),
    deadlineDate: moment(),
  };

  const [open, setOpen] = useState(false);
  const [Assessors, setAssessors] = useState(initial);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (name: string, value: any) => {
    if (['startDate', 'deadlineDate'].includes(name)) {
      setAssessors({ ...Assessors, [name]: value?._d });
    } else {
      setAssessors({ ...Assessors, [name]: value });
    }
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CreateRiskAssessment(event, Assessors));
    setOpen(true);
    setAssessors(initial);
  };
  return (
    <div style={{ direction: 'rtl' }}>
      <RiskAssessmentForms
        title={Assessors.title}
        bankName={Assessors.bankName}
        startDate={Assessors.startDate}
        deadlineDate={Assessors.deadlineDate}
        onChange={handleChange}
        onSubmit={(event: React.ChangeEvent<HTMLInputElement>) => handleSubmit(event)}
      />
      {open && (
        <NotificationManager
          open={open}
          handleClose={handleClose}
          message="فرم ارزیابی با موفقیت ساخته شد"
        />
      )}
    </div>
  );
}
