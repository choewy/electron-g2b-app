import { FC, Fragment, ReactNode } from 'react';
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  InputProps,
} from '@mui/material';
import {
  AccountCircle as AccountIcon,
  Lock as PasswordIcon,
} from '@mui/icons-material';
import { SignInInputProps } from './types';

const signInInputProps = ({
  account,
  onChange,
}: SignInInputProps): Array<
  InputProps & { labelText: string; icon?: ReactNode }
> => [
  {
    type: 'text',
    name: 'email',
    labelText: '이메일',
    placeholder: '이메일을 입력하세요.',
    value: account.email,
    autoComplete: 'off',
    onChange,
    icon: <AccountIcon />,
  },
  {
    type: 'password',
    name: 'password',
    labelText: '비밀번호',
    placeholder: '비밀번호를 입력하세요.',
    value: account.password,
    autoComplete: 'off',
    onChange,
    icon: <PasswordIcon />,
  },
];

export const SignInInputs: FC<SignInInputProps> = (props) => {
  return (
    <Fragment>
      {signInInputProps(props).map(({ labelText, icon, ...props }) => {
        const id = ['signin', 'input', props.name].join('-');

        return (
          <FormControl
            key={id}
            variant="standard"
            sx={{ width: '100%', minWidth: '220px', maxWidth: '320px' }}
          >
            <InputLabel htmlFor={id}>{labelText}</InputLabel>
            <Input
              {...props}
              id={id}
              startAdornment={
                <InputAdornment position="start">{icon}</InputAdornment>
              }
              sx={{ marginY: '20px' }}
              inputProps={{
                style: {
                  fontSize: 13,
                },
              }}
            />
          </FormControl>
        );
      })}
    </Fragment>
  );
};
