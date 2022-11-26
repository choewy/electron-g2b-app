import { AxiosHeaders } from 'axios';

export type AxiosCommonHeaderType = AxiosHeaders & { Authorization: string };
export type AxiosConfigHeaderType = {
  common: AxiosCommonHeaderType;
};
