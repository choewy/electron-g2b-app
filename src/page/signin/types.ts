import { ChangeEventHandler } from 'react';

export type SignInAccountType = {
  email: string;
  password: string;
};

export type SignInInputProps = {
  account: SignInAccountType;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
