import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function DateDialog({ open, handleCloseAlertDialog, title, handleOnClick, buttonTitle = 'Hapus', setData }) {

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
            {title}
          </div>
        </DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(newValue) => setData('return_date', dayjs(newValue).format('YYYY-MM-DD'))}
            />
          </LocalizationProvider>
          {/* <DialogContentText id="alert-dialog-description">
          </DialogContentText> */}
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