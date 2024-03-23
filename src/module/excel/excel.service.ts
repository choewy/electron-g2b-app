import { appConfig } from '@config/app.config';

import { ExcelDto } from './dto/excel.dto';

export class ExcelService {
  private createAnchor(file: ExcelDto) {
    const url = [appConfig.getCDNUrl(), file.key].join('/');
    const query = `?response-content-disposition=attachment;filename=${file.filename}`;

    const a = document.createElement('a');

    a.href = url + query;
    a.style.display = 'none';

    return a;
  }

  download(file: ExcelDto): void {
    const anchor = this.createAnchor(file);

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}

export const excelService = new ExcelService();
