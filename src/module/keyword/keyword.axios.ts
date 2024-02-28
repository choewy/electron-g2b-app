import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

export class KeywordAxios extends AxiosClient {}

export const keywordAxios = new KeywordAxios(appConfig.getServerUrl(), 'keywords');
