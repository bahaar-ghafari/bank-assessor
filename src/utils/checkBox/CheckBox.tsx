import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
type Iprops = {
  value: string;
  color: 'primary' | 'default' | 'secondary' | undefined;
  label: string;
  status: boolean;
  handleChange: any;
};
export default function CustomCheckBox(props: Iprops) {
  const { value, color, label, status, handleChange } = props;
  return (
    <FormControlLabel
      control={<Checkbox value={value} color={color} checked={status} onChange={handleChange} />}
      label={label}
    />
  );
}
