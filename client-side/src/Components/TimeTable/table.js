import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TimeTableContext } from './TimeTableContext';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 900,
  },


});

export default function CustomizedTables() {
  const [timeTableData, setTimeTableData] = useContext(TimeTableContext)
  const classes = useStyles();
  const rows = [
    ...timeTableData
  ];
  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Day</StyledTableCell>
            <StyledTableCell align="right">8:00-9:00</StyledTableCell>
            <StyledTableCell align="right">9:00-10:00</StyledTableCell>
            <StyledTableCell align="right">10:00-11:00</StyledTableCell>
            <StyledTableCell align="right">11:00-12:00</StyledTableCell>
            <StyledTableCell align="right">12:00-1:00</StyledTableCell>
            <StyledTableCell align="right">1:00-2:00</StyledTableCell>
            <StyledTableCell align="right">2:00-3:00</StyledTableCell>
            <StyledTableCell align="right">3:00-4:00</StyledTableCell>

          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Day}
              </StyledTableCell>
              <StyledTableCell align="right">{row.L1}</StyledTableCell>
              <StyledTableCell align="right">{row.L2}</StyledTableCell>
              <StyledTableCell align="right">{row.L3}</StyledTableCell>
              <StyledTableCell align="right">{row.L4}</StyledTableCell>
              <StyledTableCell align="right">{row.L5}</StyledTableCell>
              <StyledTableCell align="right">{row.L6}</StyledTableCell>
              <StyledTableCell align="right">{row.L7}</StyledTableCell>
              <StyledTableCell align="right">{row.L8}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
