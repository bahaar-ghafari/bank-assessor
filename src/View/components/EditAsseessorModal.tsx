import { Dialog, DialogContent } from '@material-ui/core';
import React, { ReactElement } from 'react';
import RiskAssessmentForms from '../../components/RiskAssessment/RiskAssessmentForm';

type IProps = {
  open: boolean;
  onClose: () => void;
  Assessors: {
    title: string;
    bankName: string;
    startDate: string;
    deadlineDate: string;
  };
  onHandleChange: any;
  onHandleSubmit: any;
};

export default function EditAsseessorModal(props: IProps): ReactElement {
  const { open, onClose, Assessors, onHandleChange, onHandleSubmit } = props;
  return (
    <Dialog maxWidth="xl" open={open} onClose={onClose}>
      <DialogContent>
        <div dir="rtl">
          <RiskAssessmentForms
            title={Assessors.title}
            bankName={Assessors.bankName}
            startDate={Assessors.startDate}
            deadlineDate={Assessors.deadlineDate}
            onChange={onHandleChange}
            onSubmit={(event: React.ChangeEvent<HTMLInputElement>) => onHandleSubmit(event)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
