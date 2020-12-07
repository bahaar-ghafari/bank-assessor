import React from "react";
import { Button } from "@material-ui/core";
type Iprops = {
  variant?: "contained" | undefined;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  color: "primary" | "secondary" | "inherit" | "default";
  className: string;
  disabled?: boolean | undefined;
  href?: string;
  label: string;
  onClickFunction: any;
};
export default function CustomButton(props: Iprops) {
  const {
    variant,
    fullWidth,
    type,
    color,
    className,
    disabled,
    href,
    label,
    onClickFunction,
  } = props;
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      className={className}
      disabled={disabled}
      href={href}
      onClick={onClickFunction}
    >
      {label}
    </Button>
  );
}
