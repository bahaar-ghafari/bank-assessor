import moment from 'moment';
import jMoment from 'moment-jalaali';
import React, { useState } from 'react';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import JalaliUtils from '@date-io/jalaali';
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

export function DatePickerPure() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <DateTimePicker
        okLabel="تأیید"
        cancelLabel="لغو"
        labelFunc={(date) => (date ? date.format('jYYYY/jMM/jDD hh:mm A') : '')}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}
