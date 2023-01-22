import { DateTime } from 'luxon';
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

export type CalenderChangeEventHandler = (
  value: DateTime | null,
  keyboardInputValue?: string | undefined,
) => void;

export type CalenderProps = {
  label: string;
  value: DateTime;
  onChange: CalenderChangeEventHandler;
};
