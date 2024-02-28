import { appConfig } from '@config/app.config';
import { AxiosClient } from '@core/axios-client';

export class FileAxios extends AxiosClient {}

export const fileAxios = new FileAxios(appConfig.getServerUrl(), 'files');
