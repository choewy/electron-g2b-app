import { ChangeEventHandler } from 'react';

export type SignUpAccountType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpInputProps = {
  account: SignUpAccountType;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
