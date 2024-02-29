import { appConfig } from '@config/app.config';

import { FileDto } from './dto/file.dto';

export class FileServie {
  private createAnchor(file: FileDto) {
    const anchor = document.createElement('a');

    anchor.href = [appConfig.getCDNUrl(), file.key].join('/');
    anchor.download = file.filename;
    anchor.style.setProperty('display', 'none');

    return anchor;
  }

  download(file: FileDto): void {
    const anchor = this.createAnchor(file);

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}

export const fileService = new FileServie();
