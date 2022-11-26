import Cookies, { CookieSetOptions } from 'universal-cookie';
import { CookieKey } from './enums';

const cookies = new Cookies();
const options: CookieSetOptions = {
  path: '/',
  maxAge: 200000,
};

export const getAccessToken = (): string => {
  return cookies.get(CookieKey.AccessToken);
};

export const setAccessToken = (token: string): void => {
  cookies.set(CookieKey.AccessToken, token, options);
};

export const removeAccessToken = (): void => {
  cookies.remove(CookieKey.AccessToken, options);
};
