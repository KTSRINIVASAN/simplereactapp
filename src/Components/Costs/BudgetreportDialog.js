import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
import {  Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import '../Costs/Budget.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function BudgetreportDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}> 
      Create Budget
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create Budget
        </BootstrapDialogTitle>
        {/* <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent> */}
        <>
        <form style={{padding:'15px'}}>


  <div className='budget_form'>
  <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-label"> Budget Scope</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>All Services</MenuItem>
          <MenuItem value={20}>Selective Services</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  </div>
  <div className='budget_form'>
  <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-label">Template</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Zero Spend Budget</MenuItem>
          <MenuItem value={20}>Monthly Cost Budget</MenuItem>
          <MenuItem value={10}>Daily Saving Budget</MenuItem>
          <MenuItem value={20}>Daily Reservation Budget</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  </div>
  <div  className='budget_form' style={{width:'500px'}}>
    {/* <FormLabel>Username</FormLabel> */}
    <TextField style={{width:'500px'}} variant="standard" label="Budget Name"  multiple/>
  </div>
  <div  className='budget_form' >
    {/* <FormLabel>Username</FormLabel> */}
    <TextField style={{width:'500px'}} variant="standard" label="Email" type='email' multiple/>
  </div>
 
</form>
        </>
        <DialogActions style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}