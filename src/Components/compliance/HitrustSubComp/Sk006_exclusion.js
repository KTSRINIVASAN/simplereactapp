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
import {  Box, Container } from '@mui/material';
// import 'src\Components\Costs\Budget.css' 
// import '../../Costs/Budget.css'
import '../../compliance/Hitrust.css'
// import BaselineExclusiontable from './Baseline_exclusion_table';
import Sk006Exclusiontable from './Sk006_exclusion_table';

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

export default function Sk006Exclusion() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="contained" onClick={handleClickOpen}>
      View Exclusion
      </Button>
      <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} 
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Exclusion
        </BootstrapDialogTitle>
       
        <>
        <Container maxWidth="xl" >
     <Sk006Exclusiontable/>
        </Container>
    
        </>
        <DialogActions style={{display:'flex',justifyContent:'center'}}>
          <Button  variant="contained"  autoFocus onClick={handleClose} >
            Close
          </Button>
        </DialogActions>
        <Box style={{paddingLeft:'10px'}}><p>    <b>Notes:</b> Rules that have been marked as excluded are not executed/accounted for in the overall compliance score</p></Box> 
      </BootstrapDialog>
    </div>
  );
}