import { GoogleSpreadsheetRow } from 'google-spreadsheet';

export type KeywordRowType = GoogleSpreadsheetRow & {
  keyword: string;
};

export type KeywordStoreType = {
  loading: boolean;
  rows: KeywordRowType[];
};
