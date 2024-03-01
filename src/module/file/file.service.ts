import { appConfig } from '@config/app.config';

import { FileDto } from './dto/file.dto';

export class FileServie {
  private createAnchor(file: FileDto) {
    const url = [appConfig.getCDNUrl(), file.key].join('/');
    const query = `?response-content-disposition=attachment;filename=${file.filename}`;

    const a = document.createElement('a');

    a.href = url + query;
    a.style.display = 'none';

    return a;
  }

  download(file: FileDto): void {
    const anchor = this.createAnchor(file);

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}

export const fileService = new FileServie();
