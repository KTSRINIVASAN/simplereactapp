import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Correct from '../images/correct.svg'
import InCorrect from '../images/incorrect.svg'
import { TablePagination } from '@mui/material';
import SearchBar from 'material-ui-search-bar';
import TableHeaderSorting from './TableHeaderSorting';
// import ClearIcon from '@mui/icons-material/Clear';
// import SearchIcon from "@material-ui/icons/Search";
// import { makeStyles } from '@mui/styles';

// interface rowTags {

// }

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#0046a9',
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
  
  const originalRows = [{id:1,res:'eni-07f5e4f8ad4a987ee',env:true,busUnit:false,owner:false},
  {id:2,res:'sg-0d84965e1be7dcaa4',env:false,busUnit:false,owner:false},
  {id:3,res:'tgw-02fcd15824de725e0',env:false,busUnit:false,owner:false},
  {id:4,res:'tgw-attach-0bdea535291278b4a',env:false,busUnit:false,owner:false},
  {id:5,res:'vpc-050345cd6c0dd74f7',env:false,busUnit:true,owner:false},
  {id:6,res:'i-03a541a7ecdd31b60',env:false,busUnit:false,owner:false},
  {id:7,res:'i-07fb0514fc7141927',env:false,busUnit:false,owner:false},
  {id:8,res:'nip-02561ba9fcbc7c921',env:false,busUnit:false,owner:false},
  {id:9,res:'eni-09db2340986c78f67',env:false,busUnit:false,owner:false},
  {id:10,res:'cvpn-endpoint-0a2b4b6b723833524',env:true,busUnit:false,owner:false}

]

export default class TableSortingMui extends Component {
    constructor(){
        super()
        this.state={
            orderDirection:'',
            valueToOrderBy:'',
            pageMuiTags:0,
            rowPerPageMuiTags:5,
            
        rowStateOriginal:[{id:1,res:'eni-07f5e4f8ad4a987ee',env:true,busUnit:false,owner:false},
        {id:2,res:'sg-0d84965e1be7dcaa4',env:false,busUnit:false,owner:false},
        {id:3,res:'tgw-02fcd15824de725e0',env:false,busUnit:false,owner:false},
        {id:4,res:'tgw-attach-0bdea535291278b4a',env:false,busUnit:false,owner:false},
        {id:5,res:'vpc-050345cd6c0dd74f7',env:false,busUnit:true,owner:false},
        {id:6,res:'i-03a541a7ecdd31b60',env:false,busUnit:false,owner:false},
        {id:7,res:'i-07fb0514fc7141927',env:false,busUnit:false,owner:false},
        {id:8,res:'nip-02561ba9fcbc7c921',env:false,busUnit:false,owner:false},
        {id:9,res:'eni-09db2340986c78f67',env:false,busUnit:false,owner:false},
        {id:10,res:'cvpn-endpoint-0a2b4b6b723833524',env:true,busUnit:false,owner:false}
      
      ],
      rowStatecheck:[],
        rowState:originalRows,
        searched:'',
        }
    }
    handleTagsPageChange(event,newpage){
        this.setState({
            pageMuiTags:newpage,
        })
        
    }

     handleTagsRowsPerPageChange(event) {
        this.setState({
            rowPerPageMuiTags: event.target.value,
            pageMui:0,
        })
    }

    handleRequestSort = (event,property)=>{
        const isAscending = ( this.state.valueToOrderBy === property && this.state.orderDirection === 'asc' )

        this.setState({
            valueToOrderBy: property,
            orderDirection : isAscending ? 'desc' : 'asc'
        })

    }
  render() {

    



    let rowTags = this.state.rowState
    // this.setState({
    //   rowStatecheck:rowTags


    // })

    if(this.state.rowStatecheck.length === 0 ){
      this.state.rowStatecheck.push(...rowTags)
    }
        console.log(JSON.stringify(this.state.rowStatecheck)+'jjjjj')


        function descendingComparator(a,b,orderBy){
          if(b[orderBy]< a[orderBy]){
            return -1
          }
          if(b[orderBy] > a[orderBy]){
            return 1
          }
          return 0
          }
          
          function getComparator(order, orderBy){
          
          return order === "desc"? (a,b) => descendingComparator(a,b, orderBy)
          : (a,b) => -descendingComparator(a,b, orderBy)
          }
          
          const sortedRowInformation = (rowArray, comparator) => {
          
          const stabilizedRowArray = rowArray.map((el,index) => [el,index])
          
          stabilizedRowArray.sort((a,b)=>{
          
            const order = comparator(a[0],b[0])
            if(order !==0) return order
            return a[1] - b[1]
          })
          return stabilizedRowArray.map((el) => el[0])
          }       

    const requestSearch = (searchVal) => {

      const filteredRows = this.state.rowStatecheck.filter((row)=>{
        // const filteredRows = originalRows.filter((row)=>{

        return row.res.toLowerCase().includes(searchVal.toLowerCase())
      })

      this.setState({
        rowState:filteredRows
      })

      console.log('lll'+searchVal)

    }


    const cancelsearch = () => {
      this.setState({
        searched:""

      })
      requestSearch(this.state.searched)
      console.log('sss')
    }
// let indx =0;
    return (
<>
<Paper>
  <SearchBar 
  value={this.state.searched}
  onChange={(searchVal)=> requestSearch(searchVal)}
  onCancelSearch={()=> cancelsearch()}
  />
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
       <TableHeaderSorting    
       orderDirection={this.state.orderDirection}
       valueToOrderBy={this.state.valueToOrderBy}
       handleRequestSort = {this.handleRequestSort.bind(this)}
          />
        <TableBody>

        {sortedRowInformation(this.state.rowState, getComparator(this.state.orderDirection, this.state.valueToOrderBy)).slice(this.state.pageMuiTags * this.state.rowPerPageMuiTags, this.state.pageMuiTags * this.state.rowPerPageMuiTags + this.state.rowPerPageMuiTags).map((person,index)=>(
  <StyledTableRow key={index}>
  {/* <StyledTableCell component="th" scope="row">
 {person.id}
</StyledTableCell> */}
<StyledTableCell component="th" scope="row">
 {person.res}
</StyledTableCell>
<StyledTableCell className='budget_table'>{person.env ? <img className='statusImgTag iconGreen' src={Correct} alt='right'/>: <img className='statusImgTag iconRed' src={InCorrect} alt='wrong'/>}</StyledTableCell>
<StyledTableCell className='budget_table'>{person.busUnit ? <img className='statusImgTag iconGreen' src={Correct} alt='right'/>: <img className='statusImgTag iconRed' src={InCorrect} alt='wrong'/>}</StyledTableCell>
<StyledTableCell className='budget_table'>{person.owner? <img className='statusImgTag iconGreen' src={Correct} alt='right'/>: <img className='statusImgTag iconRed' src={InCorrect} alt='wrong'/>}</StyledTableCell>

{/* <StyledTableCell style={{paddingLeft:'75px'}} className='budget_table'>{row.fat}</StyledTableCell> */}
{/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.carbs}</StyledTableCell> */}
{/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.protein}</StyledTableCell>
<StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.forcasted}</StyledTableCell> */}

</StyledTableRow>
))}

         
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination sx={{
                                        ".MuiTablePagination-toolbar": {
                                            // backgroundColor: "rgba(100,100,100,0.5)"
                                            // display:''
                                            // fontSize:'17px'
                                            display:'flex',
                                            alignItems:'center',
                                            // justifyContent:'center'
                                        },".MuiTablePagination-toolbar p": {
                                            // backgroundColor: "rgba(100,100,100,0.5)"
                                            // display:''
                                            fontSize:'14px',
                                            margin:0
                                        },
                                        ".MuiTablePagination-toolbar div": {
                                            // backgroundColor: "rgba(100,100,100,0.5)"
                                            // display:''
                                            fontSize:'14px'
                                        }, ".MuiTablePagination-toolbar svg": {
                                            // backgroundColor: "rgba(100,100,100,0.5)"
                                            // display:''
                                            fontSize:'25px !important'
                                        },
                                        ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
                                            fontWeight: "bold",
                                            color: "blue",
                                            fontSize:'14px',
                                            // width:'20px',
                                            // height:'20px'
                                        },
                                        ".MuiSelect-select": {
                                            backgroundColor: ' #f5f5f5',
                                            borderRadius: '5px'
                                        },".MuiButtonBase-root svg":{
                                            backgroundColor:'#f5f5f5',
                                            borderRadius:'50%'
                                        }
                                    }}
                                        rowsPerPageOptions={[5,10,15]}
                                        page={this.state.pageMuiTags}
                                        rowsPerPage={this.state.rowPerPageMuiTags}
                                        component="div"
                                        count={this.state.rowState.length}
                                        onPageChange={this.handleTagsPageChange.bind(this)}
                                        onRowsPerPageChange={this.handleTagsRowsPerPageChange.bind(this)}
                                        >
                                    </TablePagination>
</Paper>


</>    )
  }
}
