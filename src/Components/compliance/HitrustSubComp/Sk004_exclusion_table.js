import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Hitrust.css'
// import tableRed from '../images/table_red.jpg'
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
//   '&:nth-of-type(4)': {
//     backgroundColor: '#ffc0bd',
//     // color:'#FF0000 !important',
//     font: '#ff0000',
//   },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, forcasted) {
  return { name, calories, fat, carbs, protein,forcasted };
}

const rows = [

  createData('_','_','_','_'),
  createData('_','_','_','_')
//   createData('Ok', 'COST CODE A', 300, 330,  310, '500$'),
];

export default function Sk004Exclusiontable() {
  return (
    <>
    
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow className='budgetReport_table'>
            <StyledTableCell className='exclusion_table'>Rules</StyledTableCell>
            {/* <StyledTableCell className='exclusion_table'>Created On</StyledTableCell> */}
            <StyledTableCell className='exclusion_table'>Comments</StyledTableCell>
            {/* <StyledTableCell className='exclusion_table'>Owner</StyledTableCell> */}
            {/* <StyledTableCell    >Cost: Current vs Budgeted</StyledTableCell> */}
            {/* <StyledTableCell >Current</StyledTableCell> */}
            {/* <StyledTableCell >Forcasted</StyledTableCell>
            <StyledTableCell>Budgeted</StyledTableCell> */}
          

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" >
                {row.name}
              </StyledTableCell>
              {/* <StyledTableCell className='budget_table'>{row.calories}</StyledTableCell> */}
               {/* <StyledTableCell >{row.calories}</StyledTableCell> */}
              <StyledTableCell >{row.fat}</StyledTableCell>
              {/* <StyledTableCell >{row.carbs}</StyledTableCell> */}
              {/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.protein}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.forcasted}</StyledTableCell> */}

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
  {/* <div style={{display:'flex',justifyContent:'end', alignContent:'center',marginTop:'15px'}}> <span><img className='tableRedCol' src={tableRed} alt='table_indication'/>  Indicates the budget exceeded</span></div> */}
  </>
  );
}