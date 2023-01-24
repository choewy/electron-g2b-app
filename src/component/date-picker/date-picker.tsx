import { FC } from 'react';
import { TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DatePickerProps } from './types';

export const DatePicker: FC<DatePickerProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DesktopDatePicker
        inputFormat="yyyy-MM-dd"
        renderInput={(params) => <TextField {...params} />}
        {...props}
      />
    </LocalizationProvider>
  );
};
