import { PropsWithChildren } from 'react';

export type DownloadTargetOptionType = {
  csv: boolean;
  xlsx: boolean;
};

export type DownloadProviderProps = PropsWithChildren & {
  rows: object[];
  resetRows(): void;
  filename: string;
};
