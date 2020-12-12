import React from 'react';
import { Typography } from '@material-ui/core';
import { ElementType } from 'react';

type variant =
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'overline'
  | 'srOnly'
  | undefined;
type colorType =
  | 'inherit'
  | 'initial'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error'
  | undefined;

type Iprops = {
  component: ElementType<any>;
  variant?: variant;
  color?: colorType;
  noWrap?: boolean | undefined;
  className?: string | undefined;
  label: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
};
export default function CustomTypoGraphy(props: Iprops) {
  const { component, variant, color, noWrap, className, label, align } = props;
  return (
    <Typography
      component={component}
      variant={variant}
      color={color}
      noWrap={noWrap}
      className={className}
      align={align}
    >
      {label}
    </Typography>
  );
}
