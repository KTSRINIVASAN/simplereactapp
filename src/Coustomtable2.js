import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { Style } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0071fb',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Total Costs', '$0.0', '$0.0', '$0.0', '$0.0'),
  createData('EC2-Instances', '$237','-','-','-'),
  createData('Ec2-other', '$262','-','-','-'),
  createData('S3', '$305','-','-','-'),
  createData('Key-Management', '$356','-','-','-'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} style={{ width:'800px', margin:'0 auto 20px auto'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className='budgetReport_table'>
          <TableRow >
            <StyledTableCell style={{paddingLeft:'30px'}}>#</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} align="right">May 2023</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} align="right">April 2023</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} align="right">March  2023</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} align="right">Febravary  2023</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}