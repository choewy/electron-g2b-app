import { FunctionComponent } from 'react';

import { TextField, TextFieldProps } from '@mui/material';

export const DateTextField: FunctionComponent<
  TextFieldProps & {
    min?: string;
    max?: string;
  }
> = ({ min, max, ...textFieldProps }) => {
  if (textFieldProps.className == null) {
    textFieldProps.className = '';
  }

  if (textFieldProps.inputProps == null) {
    textFieldProps.inputProps = {};
  }

  textFieldProps.className += ' date-input';
  textFieldProps.inputProps.min = min ?? '1970-01-01';
  textFieldProps.inputProps.max = max ?? '9999-12-31';

  return <TextField {...textFieldProps} type="date" required />;
};
