import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

import { ExcelDto } from './dto/excel.dto';
import { SearchType } from '@module/search/dto/enums';

export class ExcelAxios extends AxiosClient {
  getExcels(type: SearchType) {
    return this.get<ExcelDto[]>(type);
  }
}

export const fileAxios = new ExcelAxios(appConfig.getServerUrl(), 'excel');
