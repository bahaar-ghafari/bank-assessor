import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';
import { DateTimePickerKavan } from './DateTimePickerKavan';
interface IProps {
  customLabel: string;
  selectedValue: any;
  onchandleDate: any;
}

export default function CustomDatePicker({
  customLabel,
  selectedValue,
  onchandleDate,
}: IProps): ReactElement {
  return (
    <>
      <Box display="flex" width="100%">
        <Box width="10%" alignSelf="center">
          {customLabel}
        </Box>
        <Box className="DatePickerBox">
          {/* <DatePickerPure selectedValue={selectedValue} onhandleChange={onchandleDate} /> */}
          <DateTimePickerKavan
            exacttimeDate={selectedValue}
            handleDateChange={onchandleDate}
            labelID={customLabel}
          />
        </Box>
      </Box>
    </>
  );
}
