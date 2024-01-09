import React, { useState } from 'react';// import  from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Costs/Budget.css'
import { TableFooter, TablePagination } from '@mui/material';


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
  // '&:nth-of-type(4)': {
  //   backgroundColor: '#ffc0bd',
  //   // color:'#FF0000 !important',
  //   font: '#ff0000',
  // },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, forcasted) {
  return { name, calories, fat, carbs, protein,forcasted };
}

const rows = [
  createData('Storage Report', 'Daily', 'Storage Budget,EBS Budget', 'user1@companyA.com'),
  createData('Services Report', 'Monthly', 'EC2 Budget,VPC Budget', 'user2@companyA.com'),
  createData('Compute Engine Report', 'Daily','Compute Engine Budget-Daily' , 'user3@companyA.com'),
  createData('Compute Engine Report', 'Monthly', 'Compute Engine Budget-Monthly', 'user4@companyA.com'),
  createData('Branch Report', 'Weekly', 'Branch Budget', 'user5@companyA.com'),
];

export default function Budget3tables() {
  const [page,setpage] = useState(0);
  const [rowPerPage,setrowPerPage] = useState(5);
  
  const handleChangePage = (event,newPage)=>{
    setpage(newPage)
  }
  const handleChangeRowsPerPage = (event)=>{
    setrowPerPage(+event.target.value)
    setpage(0)
  
  }

  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" className='budgetReport_table'>
        <TableHead>
          <TableRow >
          <StyledTableCell >#</StyledTableCell>

            <StyledTableCell >Report Name</StyledTableCell>
            <StyledTableCell >Frequency</StyledTableCell>
            <StyledTableCell    >Budgets Included</StyledTableCell>
            <StyledTableCell >Recepient(s)</StyledTableCell>
            <StyledTableCell >Recepient(s)</StyledTableCell>

            {/* <StyledTableCell>Applicable Products</StyledTableCell> */}
            {/* <StyledTableCell >Forcasted</StyledTableCell> */}

          </TableRow>
        </TableHead>
        <TableBody>
      
        <StyledTableRow key={1}>
        <StyledTableCell style={{paddingLeft:'5px',}} >row1</StyledTableCell>
        
        {rows.slice(page*rowPerPage, (page*rowPerPage)+rowPerPage ).map((row) => (
                        <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>

        ))}


        </StyledTableRow>
        <StyledTableRow key={2}>
        <StyledTableCell style={{paddingLeft:'5px',}} >row1</StyledTableCell>
        
        {rows.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map((row) => (
                        <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>

        ))}


        </StyledTableRow>
        <StyledTableRow key={3}>
        <StyledTableCell style={{paddingLeft:'5px',}} >row1</StyledTableCell>
        
        {rows.slice(page*rowPerPage, (page*rowPerPage)+rowPerPage).map((row) => (
                        <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>

        ))}


        </StyledTableRow>
        <StyledTableRow key={4}>
        <StyledTableCell style={{paddingLeft:'5px',}} >row1</StyledTableCell>
        
        {rows.slice(page*rowPerPage, (page*rowPerPage)+rowPerPage ).map((row) => (
                        <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>

        ))}


        </StyledTableRow>
        <StyledTableRow key={5}>
        <StyledTableCell style={{paddingLeft:'5px',}} >row1</StyledTableCell>
        
        {rows.slice(page*rowPerPage, (page*rowPerPage)+rowPerPage ).map((row) => (
                        <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>

        ))}


        </StyledTableRow>
        <StyledTableRow key={6}>
        <StyledTableCell style={{paddingLeft:'5px',}} >row1</StyledTableCell>
        
        {rows.slice(page*rowPerPage, (page*rowPerPage)+rowPerPage).map((row) => (
                        <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>

        ))}


        </StyledTableRow>
        <StyledTableRow key={7}>
        <StyledTableCell style={{paddingLeft:'5px',}} >row1</StyledTableCell>
        
        {rows.slice(page*rowPerPage, (page*rowPerPage)+rowPerPage ).map((row) => (
                        <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>

        ))}


        </StyledTableRow>
        <StyledTableRow key={8}>
        <StyledTableCell style={{paddingLeft:'5px',}} >row1</StyledTableCell>
        
        {rows.slice(page*rowPerPage, (page*rowPerPage)+rowPerPage ).map((row) => (
                        <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>

        ))}


        </StyledTableRow>

      
     
        
          {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <input type='checkbox'/> &nbsp; {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'5px',}} >{row.fat}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'5px'}} >{row.carbs}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.protein}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.forcasted}</StyledTableCell>

            </StyledTableRow>
          ))} */}
          
        </TableBody>
        {/* <TablePagination
  component="div"
  count={100}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/> */}
      </Table>
      <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={rows.length}
                rowsPerPage={rowPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page"
                  }
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                //ActionsComponent={TablePaginationActions}
                //component={Box}
                // labelDisplayedRows={({ page }) => {
                //   return `Page: ${page}`;
                // }}
                // backIconButtonProps={{
                //   color: "secondary"
                // }}
                // nextIconButtonProps={{ color: "secondary" }}
                // showFirstButton={true}
                // showLastButton={true}
                // labelRowsPerPage={<span>Rows:</span>}
                // sx={{
                //   ".MuiTablePagination-toolbar": {
                //     backgroundColor: "rgba(100,100,100,0.5)"
                //   },
                //   ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
                //     fontWeight: "bold",
                //     color: "blue"
                //   }
                // }}
              />
            </TableRow>
          </TableFooter>
    </TableContainer>
    {/* <TablePagination>
    rowsPerPageOptions={[5,10,20]}
page={page}
rowsPerPage={rowPerPage}
component ="div"
onPageChange={handlePageChange}
onRowPerPageChange={handleRowPerPageChange}
    </TablePagination> */}
    </>
  
  );
}