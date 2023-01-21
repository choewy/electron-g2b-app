import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from './credentials/20230120.json';

export class GoogleSheet extends GoogleSpreadsheet {
  constructor() {
    super(process.env.REACT_APP_GOOGLE_SHEET_DOC_ID);
  }

  async connect(): Promise<void> {
    await this.useServiceAccountAuth(credentials);
    await this.loadInfo();
  }
}
