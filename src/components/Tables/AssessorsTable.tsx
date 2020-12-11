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
import { getDate } from '../../Helpers/changeTimeFormat';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
type IProps = {
  rows: any;
  columns: any;
  hasAsction?: boolean;
  hasStatus?: boolean;
};
export default function AssessorsTable(props: IProps) {
  const classes = useStyles();
  const { rows, columns, hasAsction, hasStatus } = props;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((item: { label: string; value: string }, index: number) => (
              <TableCell key={index} align="center">
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index: number) => (
            <TableRow key={index}>
              <TableCell align="center" component="th" scope="row">
                {row.title}
              </TableCell>
              {/* <TableCell align="center">{KeyToLabel(row.bankName)}</TableCell> */}
              <TableCell align="center">
                {row.bankName === 'BANK_MELLI'
                  ? 'بانک ملی'
                  : row.bankName === 'BANK_MASKAN'
                  ? 'بانک مسکن'
                  : row.bankName === 'BANK_MELLAT'
                  ? 'بانک ملت'
                  : row.bankName}
              </TableCell>
              {hasStatus && <TableCell align="center">{row.status}</TableCell>}
              <TableCell align="center">{getDate(row.startDate)}</TableCell>
              <TableCell align="center">{getDate(row.deadlineDate)}</TableCell>
              {hasAsction && <TableCell align="center">{row.action}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
