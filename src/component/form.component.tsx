import { CSSProperties, ReactElement } from 'react';
import { CalenderProps, FormProps } from './types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { TextField } from '@mui/material';

export class FormComponentClass {
  Search({ children, style, ...props }: FormProps): ReactElement {
    const defaultStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <form
        style={style ? Object.assign(defaultStyle, style) : defaultStyle}
        {...props}
      >
        {children}
      </form>
    );
  }

  Row({ children, style, ...props }: FormProps): ReactElement {
    const defaultStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <form
        style={style ? Object.assign(defaultStyle, style) : defaultStyle}
        {...props}
      >
        {children}
      </form>
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

export const FormComponent = new FormComponentClass();
