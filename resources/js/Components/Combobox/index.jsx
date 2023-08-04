import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Buttons from '../Button';

export default function ComboBox({types, setValue}) {
  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={types}
      size='small'
      renderInput={(params) => <TextField {...params} label="Jenis" />}
      onChange={setValue}
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
}