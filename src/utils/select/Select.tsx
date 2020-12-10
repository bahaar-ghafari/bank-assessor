import React from 'react';
import { MenuItem, Select, Box, FormControl } from '@material-ui/core';

interface IProps {
  customValue: string;
  handleChange: any;
  list: { label: string; value: string }[];
  selectLabel: string;
}
export default function CustomSelect({ customValue, handleChange, list, selectLabel }: IProps) {
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box width="10%" mr={1}>
        {selectLabel}
      </Box>
      <Box>
        <FormControl variant="outlined">
          <Select value={customValue} onChange={handleChange}>
            {list.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
