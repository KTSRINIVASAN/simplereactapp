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

function CreditTable(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
// const rows2 ={this.state.budgetDataList}
const rowsCredit = [
  CreditTable('06/05/2023', 'AccountA132132135156', '$80.0', '$120.0', '$0.0'),
  CreditTable('27/05/2023', 'AccountB552132135156','$90.0','$100.0','-'),
  CreditTable('01/04/2023', 'AccountX857832135156','$150.0','$160.0','-'),
  CreditTable('16/05/2023', 'AccountY632432135156','$70.0','$80.0','-'),
  CreditTable('18/03/2023', 'AccountZ548732135156','$50.0','$70.0','-'),
];

export default function CreditTables() {
  return (
    <TableContainer component={Paper} style={{ width:'800px', margin:'0 auto 20px auto'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className='budgetReport_table'>
          <TableRow >
            <StyledTableCell style={{paddingLeft:'30px'}}>Expiration Date</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} >Credit Name</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} >Credit Used</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} >Credit Remaining</StyledTableCell>
            {/* <StyledTableCell style={{paddingLeft:'30px'}} align="right">Febravary  2023</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsCredit.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" style={{paddingLeft:'30px'}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell style={{paddingLeft:'30px'}}>{row.calories}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'30px'}}>{row.fat}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'30px'}}>{row.carbs}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}