import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function TooltipBasic({message}) {
  return (
    <div>
      <Tooltip title={message}>
        <ErrorOutlineIcon fontSize='24'/>
      </Tooltip>
    </div>
  );
}