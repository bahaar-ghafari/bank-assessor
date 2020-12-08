import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
type IProps = {
  rows: any;
  columns: any;
};
export default function CustomTable(props: IProps) {
  const classes = useStyles();
  const { rows, columns } = props;
  console.log('jj1', rows);
  console.log('jj2', columns);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((item: { label: string; value: string }) => (
              <TableCell align="center">{item.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell align="center" component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">{row.bankName}</TableCell>
              <TableCell align="center">{row.startDate}</TableCell>
              <TableCell align="center">{row.deadlineDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
