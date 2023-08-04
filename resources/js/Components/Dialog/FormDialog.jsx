import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({open, handleClose, handleTypeSubmit, setTypeValue, label, dialogTitle}) {
  const handleTypeChange = (event) => {
    setTypeValue(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={label}
            type="text"
            fullWidth
            variant="standard"
            onChange={handleTypeChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Kembali</Button>
          <Button onClick={handleTypeSubmit}>Tambah</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
