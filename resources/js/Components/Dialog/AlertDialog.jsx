import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DateDialog from "../../Components/Dialog/DateDialog";

export default function AlertDialog({ dateReturned, open, handleCloseAlertDialog, title, description, handleOnClick, buttonTitle = 'Hapus' }) {
  const dateNow = new Date();
  const dateReturnedFormatted = new Date(dateReturned);

  dateNow.setHours(0, 0, 0, 0);
  dateReturnedFormatted.setHours(0, 0, 0, 0);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseAlertDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className='flex items-center gap-2'>
            <div className='text-red-600 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            {title}
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnClick} autoFocus variant='outlined'>
            {buttonTitle}
          </Button>
          <Button onClick={handleCloseAlertDialog} variant='contained'>Tutup</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}