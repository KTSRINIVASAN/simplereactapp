import React, { Component } from 'react'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { TableSortLabel } from '@mui/material';

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



export default class TableHeaderSorting extends Component {
    constructor(props){
        super(props)

    }
     createSortHandler = (property) => (event)=> {
        this.props.handleRequestSort(event,property)
            }
  render() {
   
    return (
<>
<TableHead>
          <TableRow className='budgetReport_table'>
            {/* <StyledTableCell >#</StyledTableCell> */}
            <StyledTableCell key='res'>
                <TableSortLabel
                active = {this.props.valueToOrderBy === 'res'}
                direction={this.props.valueToOrderBy === 'res' ? this.props.orderDirection : 'asc' }
                style={{color:'#fff'}}
                onClick={this.createSortHandler('res')}
                >
                Resource
                </TableSortLabel>
               </StyledTableCell>
            <StyledTableCell >Environment</StyledTableCell>
            <StyledTableCell >Environment</StyledTableCell>
            <StyledTableCell >Owner</StyledTableCell>
       
          

          </TableRow>
        </TableHead>
</>    )
  }
}
