import { Box, Card, CardContent, TablePagination, TextField } from '@mui/material'

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressBar } from 'react-bootstrap';

import DevicesIcon from '@mui/icons-material/Devices';
import StoreIcon from '@mui/icons-material/Store';
import StorageIcon from '@mui/icons-material/Storage';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import SourceRoundedIcon from '@mui/icons-material/SourceRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Correct from '../images/correct.svg'
import InCorrect from '../images/incorrect.svg'
import TableTags3 from './TableTags3';
import TableSortingMui from './TableSortingMui';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

// handleSearchResource = (x) =>{

// }

export default class Tagg3 extends Component {

  constructor(){
    super()
    this.state = {
      age:'',
      ElasticComputing: true,
      SimpleStorage: false,
      AmazonRelDatabase: false,
      SecretManager: false,
      RedShift: false,
      ElasticFileSystem: false,
      ImgTagsStatus:false,
      rightIconStatus:true,
      wrongIconStatus:false
    }
  }

  elasticComputing=()=>{
    console.log('sel data elasticComputing')
    this.setState({
      ElasticComputing: true,
      SimpleStorage: false,
      AmazonRelDatabase: false,
      SecretManager: false,
      RedShift: false,
      ElasticFileSystem: false,
    })
  
  }

   simpleStorage=()=>{
    this.setState({
      ElasticComputing: false,
      SimpleStorage: true,
      AmazonRelDatabase: false,
      SecretManager: false,
      RedShift: false,
      ElasticFileSystem: false,
    })
    console.log('sel data simpleStorage')
  
  }
   amazonRelDatabase=()=>{
    this.setState({
      ElasticComputing: false,
      SimpleStorage: false,
      AmazonRelDatabase: true,
      SecretManager: false,
      RedShift: false,
      ElasticFileSystem: false,
    })
    console.log('sel data amazonRelDatabase')
  
  }
   secretManager=()=>{
    this.setState({
      ElasticComputing: false,
      SimpleStorage: false,
      AmazonRelDatabase: false,
      SecretManager: true,
      RedShift: false,
      ElasticFileSystem: false,
    })
    console.log('sel data secretManager')
  
  }
   redShift=()=>{
    this.setState({
      ElasticComputing: false,
      SimpleStorage: false,
      AmazonRelDatabase: false,
      SecretManager: false,
      RedShift: true,
      ElasticFileSystem: false,
    })
    console.log('sel data redShift')
  
  }
   elasticFileSystem=()=>{
    this.setState({
      ElasticComputing: false,
      SimpleStorage: false,
      AmazonRelDatabase: false,
      SecretManager: false,
      RedShift: false,
      ElasticFileSystem: true,
    })
    console.log('sel data elasticFileSystem')
  
  }
  render() {
    let elasticComputingActive = (this.state.ElasticComputing ? ' activeTagCard':'')
    let simpleStorageActive = (this.state.SimpleStorage ? ' activeTagCard':'')
    let amazonRelDatabaseActive = (this.state.AmazonRelDatabase ? ' activeTagCard':'')
    let secretManagerActive = (this.state.SecretManager ? ' activeTagCard':'')
    let redShiftActive = (this.state.RedShift ? ' activeTagCard':'')
    let elasticFileSystemActive = (this.state.ElasticFileSystem ? ' activeTagCard':'')

    let IconTagsTable = (this.state.ImgTagsStatus ? Correct : InCorrect)

    const handleChange = (event) => {
      // setAge(event.target.value);
      console.log(event.target.value)
    };
    return (
      // <div>Tagg3</div>
      <>
        <div className='Hi_tags_container'>
          <div className='Hi_tags_res_blk'>
            <h2 className='top_res_blk_header'>Tag Compliance</h2>
           
    
     
            <Box className='res_blk_header'>
              <h4>Resources Overview</h4>
              <div className='res_heder_rft'>
                <span className='res_hed_rft_blk'> <span className='res_blk_comp'></span>Non Compliant</span>
                <span className='res_hed_rft_blk'><span className='res_blk_non_comp'></span>Compliant</span>
              </div>
            </Box>
            <Box className='res_blk_row1'>
              <Card sx={{ minWidth: 375 }} onClick={this.elasticComputing.bind(this)} className={`res_card${elasticComputingActive}`}>
                <CardContent>
                  <div className='res_header'>
                    <h3>Elastic Computing</h3>
                    <span> <DevicesIcon style={{ color: '#0046a9', fontSize: '30px' }} /></span>
                  </div>

                  <div className='progress_blk'>
            <span className='progress_status'> 10% Tag Compliance</span>
                    <ProgressBar>
                      <ProgressBar className='progress_comp'  now={44} key={1} />
                      <ProgressBar className='progress_non_comp' now={100-20} key={2} />
                      
                      {/* <ProgressBar active bsStyle="danger" now={10} key={3} /> */}
                    </ProgressBar>
                  </div>

                </CardContent>
              </Card>
              <Card sx={{ minWidth: 375 }}  onClick={this.simpleStorage.bind(this)} className={`res_card${simpleStorageActive}`}>
                <CardContent>
                  <div className='res_header'>
                    <h3>Simple Storage Service</h3>
                    <span> <StoreIcon style={{ color: '#0046a9', fontSize: '30px' }} /></span>
                  </div>
                  <div className='progress_blk'>
                  <span className='progress_status'> 0% Tag Compliance</span>

           <ProgressBar>
             <ProgressBar className='progress_comp'  now={100} key={1} />
             <ProgressBar className='progress_non_comp' now={0} key={2} />
             
             {/* <ProgressBar active bsStyle="danger" now={10} key={3} /> */}
           </ProgressBar>
         </div>

                </CardContent>
              </Card>
               <Card sx={{ minWidth: 375 }}  onClick={this.amazonRelDatabase.bind(this)} className={`res_card${amazonRelDatabaseActive}`}>
                <CardContent>
                  <div className='res_header'>
                    <h3>Amazon Relational Database</h3>
                    <span> <StorageIcon style={{ color: '#0046a9', fontSize: '30px' }} /></span>
                  </div>
                  <div className='progress_blk'>
                  <span className='progress_status'> 0% Tag Compliance</span>

           <ProgressBar>
             <ProgressBar className='progress_comp'  now={100} key={1} />
             <ProgressBar className='progress_non_comp' now={0} key={2} />
             
             {/* <ProgressBar active bsStyle="danger" now={10} key={3} /> */}
           </ProgressBar>
         </div>

                </CardContent>
              </Card>
            </Box>
            <Box className='res_blk_row2'>
              <Card sx={{ minWidth: 375 }}  onClick={this.secretManager.bind(this)} className={`res_card${secretManagerActive}`}>
                <CardContent>
                  <div className='res_header'>
                    <h3>Secrets Manager</h3>
                    <span> <ManageAccountsIcon style={{ color: '#0046a9', fontSize: '30px' }} /></span>
                  </div>
                  <div className='progress_blk'>
                  <span className='progress_status'> 30% Tag Compliance</span>

           <ProgressBar>
             <ProgressBar className='progress_comp'  now={64} key={1} />
             <ProgressBar className='progress_non_comp' now={36} key={2} />
             
             {/* <ProgressBar active bsStyle="danger" now={10} key={3} /> */}
           </ProgressBar>
         </div>

                </CardContent>
              </Card>
              <Card sx={{ minWidth: 375 }}  onClick={this.redShift.bind(this)} className={`res_card${redShiftActive}`}>
                <CardContent>
                  <div className='res_header'>
                    <h3>Red Shift</h3>
                    <span> <FilterTiltShiftIcon style={{ color: '#0046a9', fontSize: '30px' }} /></span>
                  </div>
                  <div className='progress_blk'>
                  <span className='progress_status'> 0% Tag Compliance</span>

           <ProgressBar>
             <ProgressBar className='progress_comp'  now={100} key={1} />
             <ProgressBar className='progress_non_comp' now={0} key={2} />
             
             {/* <ProgressBar active bsStyle="danger" now={10} key={3} /> */}
           </ProgressBar>
         </div>

                </CardContent>
              </Card>
               <Card sx={{ minWidth: 375 }}  onClick={this.elasticFileSystem.bind(this)} className={`res_card${elasticFileSystemActive}`}>
                <CardContent>
                  <div className='res_header'>
                    <h3>Elastic File System</h3>
                    <span> <SourceRoundedIcon style={{ color: '#0046a9', fontSize: '30px' }} /></span>
                  </div>
                  <div className='progress_blk'>
                  <span className='progress_status'> 20% Tag Compliance</span>

           <ProgressBar>
             <ProgressBar className='progress_comp'  now={78} key={1} />
             <ProgressBar className='progress_non_comp' now={32} key={2} />
             
             {/* <ProgressBar active bsStyle="danger" now={10} key={3} /> */}
           </ProgressBar>
         </div>

                </CardContent>
              </Card>
            </Box>

          </div>

      <div >
        <Box className='non_compliance_blk'>
        <h4>Non Compliant Tags</h4>
        <Card sx={{ minWidth: 375 }} >
                <CardContent>
                {this.state.ElasticComputing && <>
                    <h5 className='header_tag_table'>Elastic Computing</h5>
                    <Box className='table_non_comp'>
                    {/* <TableTags3/> */}
                    <TableSortingMui/>
</Box>
                    </>}
                    {this.state.SimpleStorage && <>
                    <h5 className='header_tag_table'>Simple Storage</h5>
                    <br/>
                    <p className='noRecords'>No Records Found</p>
                    </>}
                     {this.state.AmazonRelDatabase && <>
                    <h5 className='header_tag_table'>Amazon Relational Database</h5>
                    <br/>
                    <p className='noRecords'>No Records Found</p>
                    </>}
                    {this.state.SecretManager && <>
                    <h5 className='header_tag_table'>Secret Manager</h5>
                    <Box className='table_non_comp'>
                    <TableTags3/>
</Box>
                    </>}
                    {this.state.RedShift && <>
                    <h5 className='header_tag_table'>Red Shift</h5>
                    <br/>
                    <p className='noRecords'>No Records Found</p>
                    </>}
                     {this.state.ElasticFileSystem && <>
                    <h5 className='header_tag_table'>Elastic File System</h5>
                    <Box className='table_non_comp'>
                    <TableTags3/>
</Box>
                    </>}
                  <Box className='table_non_comp' style={{display:'none'}} >
                  
                    {/* <img className='statusImgTag icon'  src={IconTagsTable} alt='right or wrong img'/> */}
                    {/* <img className={`statusImgTag${this.state.ImgTagsStatus ? ' iconGreen' :' iconRed'}`}  src={IconTagsTable} alt='right or wrong img'/> */}
                      {/* <TableTags3/> */}
                    {/* <img className='statusImgTag icon' src={InCorrect} alt='right or wrong img'/> */}

                  <TableContainer className='service_table' component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow className='budgetReport_table'>
                          {/* <StyledTableCell >Alarm</StyledTableCell> */}
                          <StyledTableCell >#</StyledTableCell>
                          {/* <StyledTableCell    >Cost: Current vs Budgeted</StyledTableCell> */}
                          <StyledTableCell >Resource</StyledTableCell>
                          <StyledTableCell >Environment</StyledTableCell>
                          <StyledTableCell>Business Unit</StyledTableCell>
                          <StyledTableCell>Owner</StyledTableCell>



                        </TableRow>
                      </TableHead>
                      <TableBody>

                        <StyledTableRow className='th_sec_table' key='1'>
                          <StyledTableCell component="th" scope="row">1</StyledTableCell>
                          <StyledTableCell component="th" scope="row">

                            <div className='th_sec_table'>
                            eni-07f5e4f8ad4a987ee
                            </div>
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CheckCircleIcon className='active_table_tag'/></StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>



                        </StyledTableRow>

                        <StyledTableRow key='2'><StyledTableCell className='th_sec_table' component="th" scope="row">2</StyledTableCell>
                          <StyledTableCell component="th" scope="row">

                            <div className='th_sec_table'>
                            sg-0d84965e1be7dcaa4
                            </div>
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>

                          <StyledTableCell component="th" scope="row"><CheckCircleIcon className='active_table_tag'/></StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>


                        </StyledTableRow>

                        <StyledTableRow key='3'><StyledTableCell className='th_sec_table' component="th" scope="row">3</StyledTableCell>
                          <StyledTableCell component="th" scope="row">

                            <div className='th_sec_table'>
                            tgw-02fcd15824de725e0
                            </div>
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>


                          {/* <StyledTableCell component="th" scope="row"><CheckCircleIcon className='active_table_tag'/></StyledTableCell> */}
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>


                        </StyledTableRow><StyledTableRow key='4'><StyledTableCell className='th_sec_table' component="th" scope="row">4</StyledTableCell>
                          <StyledTableCell component="th" scope="row">

                            <div className='th_sec_table'>
                            tgw-attach-0bdea535291278b4a
                            </div>
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>


                          {/* <StyledTableCell component="th" scope="row"><CheckCircleIcon className='active_table_tag'/></StyledTableCell> */}
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>


                        </StyledTableRow><StyledTableRow key='5'><StyledTableCell className='th_sec_table' component="th" scope="row">5</StyledTableCell>
                          <StyledTableCell component="th" scope="row">

                            <div className='th_sec_table'>
                            vpc-050345cd6c0dd74f7
                            </div>
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>

                          {/* <StyledTableCell component="th" scope="row"><CheckCircleIcon className='active_table_tag'/></StyledTableCell> */}
                          <StyledTableCell component="th" scope="row"><CancelIcon className='inActive_table_tag'/></StyledTableCell>


                        </StyledTableRow>
                       


                      </TableBody>
                    </Table>
                  </TableContainer>
               
                  </Box>
            
                  </CardContent></Card>
        </Box>
     
      </div>
        </div>
      </>
    )
  }
}
