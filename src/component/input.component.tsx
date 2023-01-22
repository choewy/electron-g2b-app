import { TextField } from '@mui/material';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ReactElement } from 'react';
import { CalenderProps, InputProps } from './types';

export class InputComponentClass {
  Radio({ labelText, ...props }: InputProps): ReactElement {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {labelText && <label htmlFor={props.id}>{labelText}</label>}
        <input type="radio" {...props} />
      </div>
    );
  }

  Check({ labelText, ...props }: InputProps): ReactElement {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {labelText && <label htmlFor={props.id}>{labelText}</label>}
        <input type="checkbox" {...props} />
      </div>
    );
  }

  Text({ labelText, ...props }: InputProps): ReactElement {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {labelText && <label htmlFor={props.id}>{labelText}</label>}
        <input type="text" {...props} />
      </div>
    );
  }

  Calender(props: CalenderProps): ReactElement {
    return (
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DesktopDatePicker
          inputFormat="yyyy-MM-dd"
          renderInput={(params) => <TextField {...params} />}
          {...props}
        />
      </LocalizationProvider>
    );
  }
}

export const InputComponent = new InputComponentClass();
