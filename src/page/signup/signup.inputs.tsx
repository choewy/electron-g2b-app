import { FC, Fragment } from 'react';
import { FormControl, Input, InputLabel, InputProps } from '@mui/material';
import { SignUpInputProps } from './types';

const signUpInputProps = ({
  account,
  onChange,
}: SignUpInputProps): Array<InputProps & { labelText: string }> => [
  {
    type: 'text',
    name: 'email',
    labelText: '이메일',
    placeholder: '이메일을 입력하세요.',
    value: account.email,
    autoComplete: 'off',
    onChange,
  },
  {
    type: 'password',
    name: 'password',
    labelText: '비밀번호',
    placeholder: '비밀번호를 입력하세요.',
    value: account.password,
    autoComplete: 'off',
    onChange,
  },
  {
    type: 'password',
    name: 'confirmPassword',
    labelText: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력하세요.',
    value: account.confirmPassword,
    autoComplete: 'off',
    onChange,
  },
];

export const SignUpInputs: FC<SignUpInputProps> = (props) => {
  return (
    <Fragment>
      {signUpInputProps(props).map(({ labelText, ...props }) => {
        const id = ['singup', 'input', props.name].join('-');

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
