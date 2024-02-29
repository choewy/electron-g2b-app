import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

import { SearchType } from './dto/enums';
import { StartSearchDto } from './dto/start-search.dto';
import { SearchDto } from './dto/search.dto';

export class SearchAxios extends AxiosClient {
  async has(type: SearchType) {
    return this.get<SearchDto | null>(type);
  }

  async search(type: SearchType, body: StartSearchDto) {
    return this.post<SearchDto>(type, body);
  }
}

export const searchAxios = new SearchAxios(appConfig.getServerUrl(), 'search');
