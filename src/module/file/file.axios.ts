import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

import { FileDto } from './dto/file.dto';
import { SearchType } from '@module/search/dto/enums';

export class FileAxios extends AxiosClient {
  getFiles(type: SearchType) {
    return this.get<FileDto[]>(type);
  }
}

export const fileAxios = new FileAxios(appConfig.getServerUrl(), 'files');
