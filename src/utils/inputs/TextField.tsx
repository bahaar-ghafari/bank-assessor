import React from "react";
import { Box, TextField } from "@material-ui/core";
type Iprops = {
  variant?: "standard" | "filled" | "outlined" | undefined;
  margin?: "none" | "dense" | "normal" | undefined;
  required?: boolean;
  fullWidth?: boolean;
  id: string;
  label: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  type?: string;
  value: string;
  width?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function CustomTextField(props: Iprops) {
  const {
    variant,
    margin,
    required,
    fullWidth,
    id,
    label,
    name,
    autoComplete,
    autoFocus,
    type,
    value,
    onChange,
    width,
  } = props;
  return (
    <Box display="flex" alignItems="center" width="100%">
      <Box width={width} mr={1}>
        {label}
      </Box>
      <TextField
        variant={variant}
        margin={margin}
        required={required}
        fullWidth={fullWidth}
        id={id}
        label={""}
        name={name}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
