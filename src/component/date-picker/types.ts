import { DateTime } from 'luxon';

export type DateChangeEventHandler = (
  value: DateTime | null,
  keyboardInputValue?: string | undefined,
) => void;

export type DatePickerProps = {
  label: string;
  value: DateTime | undefined;
  onChange: DateChangeEventHandler;
};
