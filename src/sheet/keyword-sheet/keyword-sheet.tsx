import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';
import { GoogleSheet } from '../google-sheet';
import { GoogleSheetKeywordTitle } from './enums';

export class KeywordSheet extends GoogleSheet {
  private readonly KEYWORD_HEADERS = ['keyword'];

  private async createSheet(
    title: GoogleSheetKeywordTitle,
  ): Promise<GoogleSpreadsheetWorksheet> {
    return this.addSheet({ title, headerValues: this.KEYWORD_HEADERS });
  }

  public async getSheetByTitle(
    title: GoogleSheetKeywordTitle,
  ): Promise<GoogleSpreadsheetWorksheet> {
    let sheet = this.sheetsByTitle[title];

    if (!sheet) {
      sheet = await this.createSheet(title);
    }

    return sheet;
  }
}
