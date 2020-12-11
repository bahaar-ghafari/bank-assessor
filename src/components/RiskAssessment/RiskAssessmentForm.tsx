import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { banksName } from '../../Constants/General';
import CustomButton from '../../utils/buttons/Button';
import CustomTextField from '../../utils/inputs/TextField';
import CustomSelect from '../../utils/select/Select';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';
import { getDate } from '../../Helpers/changeTimeFormat';
import CustomDatePicker from '../../utils/DatePicker/DatePicker';

interface IProps {
  title: string;
  bankName: string;
  startDate: any;
  deadlineDate: any;
  onChange: any;
  onChangeDate: any;
  onSubmit: any;
}

export default function RiskAssessmentForms(props: IProps): ReactElement {
  const { title, bankName, startDate, deadlineDate, onChange, onChangeDate, onSubmit } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <CustomTypoGraphy component="h1" variant="h5" label="تعریف فرم ارزیابی جدید" />
      <form className={classes.form} noValidate>
        <CustomTextField
          width="10%"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="title"
          label="عنوان"
          name="title"
          autoComplete="title"
          autoFocus={true}
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.name, e.target.value)
          }
        />
        <CustomSelect
          customValue={bankName}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange('bankName', e.target.value)
          }
          list={banksName}
          selectLabel="نام بانک"
        />
        <CustomDatePicker
          customLabel="زمان شروع"
          selectedValue={startDate}
          handleSubmit={(date: Date) => onChangeDate('startDate', date)}
        />
        <CustomDatePicker
          customLabel="زمان پایان"
          selectedValue={deadlineDate}
          handleSubmit={(date: Date) => onChangeDate('deadlineDate', date)}
        />
        <CustomButton
          type="submit"
          fullWidth={true}
          variant="contained"
          color="primary"
          className={classes.submit}
          label="ثبت"
          onClickFunction={(e: React.ChangeEvent<HTMLInputElement>) => onSubmit(e)}
        />
      </form>
    </div>
  );
}
