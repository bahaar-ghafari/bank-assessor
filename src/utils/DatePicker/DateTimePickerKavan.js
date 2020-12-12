import React from 'react';
// import material
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import package
import jMoment from 'moment-jalaali';
import JalaliUtils from '@date-io/jalaali';
// import local
// import calendarIcon from '../../../assets/img/calendar.svg';
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });
const useStyles = makeStyles({
  root: {
    '&>div': {
      flexDirection: 'row-reverse',
    },
  },
});

export const DateTimePickerKavan = (props) => {
  const { exacttimeDate, handleDateChange } = props;
  const classes = useStyles();
  return (
    <Box mb={1}>
      <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
        <DateTimePicker
          InputAdornmentProps={{ position: 'start' }}
          style={{ display: 'flex' }}
          inputVariant="outlined"
          okLabel="تأیید"
          cancelLabel="لغو"
          labelFunc={(date) => (date ? date.format('jYYYY/jMM/jDD hh:mm A') : '')}
          size="small"
          value={exacttimeDate}
          disableFuture={false}
          onChange={handleDateChange}
          //   keyboardIcon={<img src={calendarIcon} alt="calendarIcon" width="17px" />}
          invalidDateMessage="تاریخ وارد شده نامعتبر است"
          className={classes.root}
        />
      </MuiPickersUtilsProvider>
    </Box>
  );
};
