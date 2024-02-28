import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

export class SearchAxios extends AxiosClient {}

export const searchAxios = new SearchAxios(appConfig.getServerUrl(), 'search');
