import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CustomButton from '../../utils/buttons/Button';
import CustomTextField from '../../utils/inputs/TextField';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';

interface IProps {
  title: string;
  bankName: string;
  startDate: string;
  endDate: string;
  onHandleInput: any;
  onSubmit: any;
}

export default function RiskAssessmentForms(props: IProps): ReactElement {
  const { title, bankName, startDate, endDate, onHandleInput, onSubmit } = props;

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHandleInput(e, title)}
        />
        <CustomTextField
          width="10%"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="bankName"
          label="نام بانک"
          name="bankName"
          autoComplete="bankName"
          autoFocus={true}
          value={bankName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHandleInput(e, bankName)}
        />
        <CustomTextField
          width="10%"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="startDate"
          label="زمان شروع"
          name="startDate"
          autoComplete="startDate"
          autoFocus={true}
          value={startDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHandleInput(e, startDate)}
        />
        <CustomTextField
          width="10%"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="endDate"
          label="زمان پایان"
          name="endDate"
          autoComplete="endDate"
          autoFocus={true}
          value={endDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHandleInput(e, endDate)}
        />
        <CustomButton
          type="submit"
          fullWidth={true}
          variant="contained"
          color="primary"
          className={classes.submit}
          label="ثبت"
          onClickFunction={
            (e: React.ChangeEvent<HTMLInputElement>) => onSubmit(e)
            // dispatch(
            //   loginRequest(
            //     e,
            //     {
            //       username: userName,
            //       password: passWord,
            //     },
            //     history
            //   )
            // )
          }
        />
      </form>
    </div>
  );
}
