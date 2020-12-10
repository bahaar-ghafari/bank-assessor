import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { banksName } from '../../Constants/General';
import CustomButton from '../../utils/buttons/Button';
import CustomTextField from '../../utils/inputs/TextField';
import CustomSelect from '../../utils/select/Select';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';

interface IProps {
  title: string;
  bankName: string;
  startDate: string;
  deadlineDate: string;
  onChange: any;
  onSubmit: any;
}

export default function RiskAssessmentForms(props: IProps): ReactElement {
  const { title, bankName, startDate, deadlineDate, onChange, onSubmit } = props;

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
        {/* <CustomTextField
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange('bankName', e.target.value)
          }
        /> */}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.name, '2020-12-08T10:53:36.875Z')
          }
        />
        <CustomTextField
          width="10%"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="deadlineDate"
          label="زمان پایان"
          name="deadlineDate"
          autoComplete="deadlineDate"
          autoFocus={true}
          value={deadlineDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.name, '2020-12-08T10:53:36.875Z')
          }
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
