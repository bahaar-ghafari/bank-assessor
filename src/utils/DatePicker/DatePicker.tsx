import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';
import { DatePickerPure } from './DatePickerPure';
interface IProps {
  customLabel: string;
  selectedValue: any;
  handleSubmit: any;
}

export default function CustomDatePicker({
  customLabel,
  selectedValue,
  handleSubmit,
}: IProps): ReactElement {
  return (
    <>
      <Box display="flex" width="100%">
        <Box width="10%" alignSelf="center">
          {customLabel}
        </Box>
        <Box className="DatePickerBox">
          {/* <DatePicker onClickSubmitButton={handleSubmit} value={selectedValue} /> */}
          <DatePickerPure />
        </Box>
      </Box>
    </>
  );
}
