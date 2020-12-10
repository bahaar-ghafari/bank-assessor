import { makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';
import CustomTextField from '../../utils/inputs/TextField';
import CustomTypoGraphy from '../../utils/typoGraphy/TypoGraphy';

interface IProps {
  title: string;
  bankRespose: string;
  generalRespose: string;
  onHandleInput: any;
}

export default function RiskAssessmentFactors(props: IProps): ReactElement {
  const { title, bankRespose, generalRespose, onHandleInput } = props;

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
      <CustomTypoGraphy component="h1" variant="h5" label="ورود" />
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
          id="bankRespose"
          label="پاسخ بانک"
          name="bankRespose"
          autoComplete="bankRespose"
          autoFocus={true}
          value={bankRespose}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHandleInput(e, bankRespose)}
        />
        <CustomTextField
          width="10%"
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="generalRespose"
          label="پاسخ عمومی"
          name="generalRespose"
          autoComplete="generalRespose"
          autoFocus={true}
          value={generalRespose}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHandleInput(e, generalRespose)}
        />
      </form>
    </div>
  );
}
