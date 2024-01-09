import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Costs/Budget.css'
import tableRed from '../images/table_red.jpg'
// import { TablePagination } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0071fb',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
//   [`&.${rows.protein[4]}`]: {
//     fontSize: 74,
//   },
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:nth-of-type(4)': {
    backgroundColor: '#ffc0bd',
    // color:'#FF0000 !important',
    font: '#ff0000',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, forcasted) {
  return { name, calories, fat, carbs, protein,forcasted };
}

const rows = [
  createData('Ok', 'Project A', 350, 380, 360, '500$'),
  createData('Not Set', 'Project B',250, 280, 290, '500$'),
  createData('Ok', 'EC2 COMPANY A',150, 175 ,170, '500$'),
  createData('Not Set', 'COMPANY A',510, 580,  520, '500$'),
  createData('Ok', 'COST CODE A', 300, 330,  310, '500$'),
];

export default function Budget2tables() {
  return (
    <>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow className='budgetReport_table'>
            <StyledTableCell >Alarm</StyledTableCell>
            <StyledTableCell >Budget Name</StyledTableCell>
            {/* <StyledTableCell    >Cost: Current vs Budgeted</StyledTableCell> */}
            <StyledTableCell >Current</StyledTableCell>
            <StyledTableCell >Forcasted</StyledTableCell>
            <StyledTableCell>Budgeted</StyledTableCell>
          

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <input type='checkbox'/> &nbsp; {row.name}
              </StyledTableCell>
              <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell>
              {/* <StyledTableCell style={{paddingLeft:'75px'}} className='budget_table'>{row.fat}</StyledTableCell> */}
              <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.carbs}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.protein}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.forcasted}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <TablePagination
    component="div"
    count={100}
    page={page}
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  /> */}
  <div style={{display:'flex',justifyContent:'end', alignContent:'center',marginTop:'15px'}}> <span><img className='tableRedCol' src={tableRed} alt='table_indication'/>  Indicates the budget exceeded</span></div>
  </>
  );
}