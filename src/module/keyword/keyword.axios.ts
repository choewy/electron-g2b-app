import { appConfig } from '@config/app.config';

import { AxiosClient } from '@core/axios-client';

import { KeywordDto } from './dto/keyword.dto';
import { GetKeywordsDto } from './dto/get-keywords.dto';
import { CreateKeywordDto } from './dto/create-keyword.dto';

export class KeywordAxios extends AxiosClient {
  async getKeywords(params: GetKeywordsDto) {
    return this.get<KeywordDto[]>('', { params });
  }

  async create(body: CreateKeywordDto) {
    return this.post<KeywordDto>('', body);
  }
}

export const keywordAxios = new KeywordAxios(appConfig.getServerUrl(), 'keywords');
