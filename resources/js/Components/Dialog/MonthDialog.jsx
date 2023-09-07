import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ComboBox from "../Combobox";
import dayjs from 'dayjs';

export default function MonthDialog({ date, setSelectedType, formattedTypes, open, handleCloseAlertDialog, title, handleOnClick, buttonTitle = 'Hapus', onChange }) {

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
          <div className='flex '>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                // value={dayjs('2023-04')}
                defaultValue={dayjs(date)}
                views={['month', 'year']}
                onChange={(newValue) => onChange(dayjs(newValue).format('YYYY-MM'))}
              />
            </LocalizationProvider>
            <div className='w-52 mt-2'>
              <ComboBox types={formattedTypes} setValue={(e, newValue) => newValue ? setSelectedType(newValue.id) : null} />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlertDialog} variant='outlined'>Tutup</Button>
          <Button onClick={handleOnClick} autoFocus variant='contained'>
            {buttonTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}