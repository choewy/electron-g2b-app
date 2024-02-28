import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export type AxiosValidator = {
  validate(): string | void;
};

export class AxiosValidateError extends Error {
  name = AxiosValidateError.name;
}

export class AxiosException {
  readonly statusCode: number;
  readonly name: string;
  readonly message: string;
  readonly cause: unknown;

  constructor(e: AxiosError<any> | Error) {
    if (e instanceof AxiosError) {
      const response = e.response;

      this.statusCode = response.data?.data?.statusCode;
      this.name = response.data?.data?.name;
      this.message = response.data?.data?.message;
      this.cause = response.data?.data?.cause;
    } else {
      this.statusCode = -1;
      this.name = e.name;
      this.message = e.message;
      this.cause = e.cause;
    }
  }
}

export class AxiosReturnValue<R> {
  readonly ok: boolean;
  readonly version: string;
  readonly data: R;
  readonly error?: AxiosException;

  constructor(result: AxiosResponse | AxiosError<any> | Error) {
    if (result instanceof AxiosError) {
      this.ok = false;
      this.version = result.response?.data?.version ?? null;
      this.data = null;
      this.error = new AxiosException(result);

      return;
    }

    if (result instanceof Error) {
      this.ok = false;
      this.version = null;
      this.data = null;
      this.error = new AxiosException(result);

      return;
    }

    this.ok = true;
    this.version = result.data?.version ?? null;
    this.data = result.data?.data ?? null;
    this.error = null;
  }
}

export class AxiosLoadingEvent extends CustomEvent<boolean> {
  constructor(detail: boolean) {
    super(AxiosLoadingEvent.name, { detail });
  }

  static of(loading: boolean) {
    return new AxiosLoadingEvent(loading);
  }

  dispatch(): void {
    window.dispatchEvent(this);
  }
}

export abstract class AxiosClient {
  private readonly $axios: Axios;

  constructor(private readonly url: string, private readonly prefix?: string) {
    this.$axios = axios.create({
      baseURL: [this.url, this.prefix.startsWith('/') ? this.prefix.slice(1) : this.prefix].join('/'),
      withCredentials: true,
    });
  }

  private async promise<R>(
    fn: () => Promise<AxiosResponse>,
    opt?: { loading?: boolean },
  ): Promise<AxiosReturnValue<R>> {
    if (opt?.loading) {
      AxiosLoadingEvent.of(true).dispatch();
    }

    let returnValue: AxiosReturnValue<R>;

    try {
      returnValue = new AxiosReturnValue(await fn());
    } catch (e) {
      returnValue = new AxiosReturnValue(e as AxiosError | Error);
    }

    if (opt?.loading) {
      AxiosLoadingEvent.of(false).dispatch();
    }

    return returnValue;
  }

  private validate<D extends AxiosValidator = any>(config?: AxiosRequestConfig, data?: D) {
    if (typeof config?.params?.validate === 'function') {
      const message = config.params.validate();

      if (message) {
        throw new AxiosValidateError(message);
      }
    }

    if (typeof data?.validate === 'function') {
      const message = data.validate();

      if (message) {
        throw new AxiosValidateError(message);
      }
    }
  }

  protected async head<D = any>(
    url?: string,
    config?: AxiosRequestConfig<D> & {
      loading?: boolean;
    },
  ): Promise<AxiosReturnValue<null>> {
    return this.promise<null>(() => {
      this.validate(config);

      return this.$axios.head(url, config);
    }, config);
  }

  protected async get<R, D = any>(
    url?: string,
    config?: AxiosRequestConfig<D> & {
      loading?: boolean;
    },
  ): Promise<AxiosReturnValue<R>> {
    return this.promise<R>(() => {
      this.validate(config);

      return this.$axios.get(url, config);
    }, config);
  }

  protected async post<R, D extends AxiosValidator = any>(
    url?: string,
    data?: D,
    config?: AxiosRequestConfig<D> & {
      loading?: boolean;
    },
  ): Promise<AxiosReturnValue<R>> {
    return this.promise<R>(() => {
      this.validate(config, data);

      return this.$axios.post(url, data, config);
    }, config);
  }

  protected async patch<R, D extends AxiosValidator = any>(
    url?: string,
    data?: D,
    config?: AxiosRequestConfig<D> & {
      loading?: boolean;
    },
  ): Promise<AxiosReturnValue<R>> {
    return this.promise<R>(() => {
      this.validate(config, data);

      return this.$axios.patch(url, data, config);
    });
  }

  protected async put<R, D extends AxiosValidator = any>(
    url?: string,
    data?: D,
    config?: AxiosRequestConfig<D> & {
      loading?: boolean;
    },
  ): Promise<AxiosReturnValue<R>> {
    return this.promise<R>(() => {
      this.validate(config, data);

      return this.$axios.put(url, data, config);
    }, config);
  }

  protected async delete<R, D = any>(
    url?: string,
    config?: AxiosRequestConfig<D> & {
      loading?: boolean;
    },
  ): Promise<AxiosReturnValue<R>> {
    return this.promise<R>(() => {
      this.validate(config);

      return this.$axios.delete(url, config);
    }, config);
  }
}
