import axios, {
  AxiosInstance as Axios,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import { useNavigate } from 'react-router-dom';
import { PublicRouter } from '@/routes';
import { getAccessToken, removeAccessToken } from '../cookies';
import { axiosCofig } from './configs';
import { HttpMethod } from './enums';

const request = axios.create(axiosCofig);

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      const headers = config.headers as AxiosRequestHeaders;
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return config;
  },
  (error: any) => Promise.reject(error),
);

request.interceptors.response.use(
  (value: AxiosResponse) => value,
  (error: any) => {
    if (error.response.status === 401) {
      removeAccessToken();

      const navigate = useNavigate();
      return navigate(PublicRouter.Login.path, {
        replace: true,
      });
    }

    return Promise.reject(error);
  },
);

export abstract class AxiosInstance {
  protected readonly method = HttpMethod;
  protected readonly request!: Axios;

  constructor() {
    this.request = request;
  }
}
