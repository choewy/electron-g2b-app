import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithChildren,
} from 'react';

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { labelText?: string };

export type FormProps = PropsWithChildren &
  DetailedHTMLProps<InputHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
