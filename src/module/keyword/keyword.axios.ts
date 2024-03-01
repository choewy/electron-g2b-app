import { appConfig } from '@config/app.config';

import { AxiosClient } from '@core/axios-client';

import { KeywordDto } from './dto/keyword.dto';
import { GetKeywordsDto } from './dto/get-keywords.dto';
import { SetKeywordDto } from './dto/set-keyword.dto';

export class KeywordAxios extends AxiosClient {
  async getKeywords(params: GetKeywordsDto) {
    return this.get<KeywordDto[]>('', { params });
  }

  async createKeyword(body: SetKeywordDto) {
    return this.post<KeywordDto>('', body);
  }

  async updateKeyword(id: number, body: SetKeywordDto) {
    return this.patch<KeywordDto>(String(id), body);
  }

  async deleteKeyword(id: number) {
    return this.delete<Pick<KeywordDto, 'id'>>(String(id));
  }
}

export const keywordAxios = new KeywordAxios(appConfig.getServerUrl(), 'keywords');
