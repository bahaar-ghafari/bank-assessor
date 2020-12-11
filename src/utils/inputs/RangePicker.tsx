import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 900,
    },
    margin: {
      height: theme.spacing(3),
    },
  }),
);

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value: number) {
  return value.toString();
}
interface IProps {
  value: number;
  handleChange: any;
}
export default function RangePicker({ value, handleChange }: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
