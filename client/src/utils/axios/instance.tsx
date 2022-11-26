import axios, {
  AxiosInstance as Axios,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { useNavigate } from 'react-router-dom';
import { PublicRouter } from '@/routes';
import { getAccessToken, removeAccessToken } from '../cookies';
import { axiosCofig } from './configs';
import { AxiosConfigHeaderType } from './types';
import { HttpMethod } from './enums';

export abstract class AxiosInstance {
  protected readonly method = HttpMethod;
  protected readonly request!: Axios;

  private requestInterceptors(): [
    (config: AxiosRequestConfig) => AxiosRequestConfig,
    (error: any) => Promise<never>,
  ] {
    return [
      (config) => {
        const accessToken = getAccessToken();

        if (accessToken) {
          const { common } = config.headers as AxiosConfigHeaderType;
          common.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    ];
  }

  private responseInterceptors(): [
    (config: AxiosResponse) => AxiosResponse,
    (error: any) => void | Promise<never>,
  ] {
    return [
      (value) => value,
      (error) => {
        if (error.response.status === 401) {
          removeAccessToken();

          const navigate = useNavigate();
          return navigate(PublicRouter.Login.path, {
            replace: true,
          });
        }

        return Promise.reject(error);
      },
    ];
  }

  constructor() {
    this.request = axios.create(axiosCofig);

    this.request.interceptors.request.use(...this.requestInterceptors());
    this.request.interceptors.response.use(...this.responseInterceptors());
  }
}
