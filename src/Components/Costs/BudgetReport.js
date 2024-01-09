import { Box, Button, Card, CardContent, Container,  Menu, MenuItem } from '@mui/material'
import React from 'react'
// import BudgetBreadcrumb from '../../Breadcrums/BudgetBreadcrum'
// import BudgetTable from './BudgetTable'
// import BudgetBootstrapModal from './BudgetBootstrapModal'
// import Budget2tables from './Budget2tables'
import Budget3tables from './Budget3tables'
// import BudgetReportDialog from './BudgetreportDialog'
import BudgetReportBreadcrumb from '../../Breadcrums/BudgetReportBudgetcrum'
// import Budget3table from './Budget3tables'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import './Budget.css'
// import tableRed from '../images/table_red.jpg'

export default function BudgetReport() {
  const dummyMenuItems = [
    {
      title: "CSV"
    },
    // {
    //   title: "Move Item"
    // },
    {
      title: "PDF"
    }
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const nativeOnChange = e => {
  //   const detail = {
  //     selectedIndex: e.target.selectedIndex
  //   };
  //   e.target.selectedIndex = 0;

  //   e.target.dispatchEvent(new CustomEvent("itemClick", { detail }));
  // };

  // const itemClick = e => {
  //   console.log("Item Clicked " + e.detail);
  // };

  return (
    <Container maxWidth="xl" >
      <BudgetReportBreadcrumb />
      <Box className='feature_card'>
        <Card sx={{ minWidth: 275 }}>
          <CardContent >
            <Box style={{ width: '1000px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h5>Budget Reports</h5>
                </div>
                <div style={{ display: 'flex' }}>
                  {/* <Button variant="contained"> Create Budget</Button> */}
                  {/* <BudgetReportDialog/> */}
                  {/* <Button variant="contained" style={{ backgroundColor: 'rgb(252, 186, 3)', color: '#fff', margin: '0 0 0 10px' }}
                  
                  aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="Open to show more"
        title="Open to show more"><FileDownloadIcon /> Download
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {dummyMenuItems.map(item => (
                        <MenuItem onClick={handleClose} key={item.title} value={item.title}>
                          {item.title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Button> */}
                   <Button variant="contained" style={{ backgroundColor: 'rgb(252, 186, 3)', color: '#fff' }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        aria-label="Open to show more"
        title="Open to show more"
      >
       {/* <Button variant="contained" style={{ backgroundColor: 'rgb(252, 186, 3)', color: '#fff' }}>
        Download <FileDownloadIcon /> </Button>  */}
        Download <FileDownloadIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dummyMenuItems.map(item => (
          <MenuItem onClick={handleClose} key={item.title} value={item.title}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
                  {/* <BudgetBootstrapModal/> */}
                </div>
              </div>


              <br></br>
              {/* <BudgetTable/> */}
              {/* <Budget2tables/> */}
              <Budget3tables />

            </Box>

          </CardContent>
        </Card>
      </Box>
    </Container>

  )
}
