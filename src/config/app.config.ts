export class AppConfig {
  private readonly TZ = process.env.TZ;
  private readonly ENV = process.env.REACT_APP_ENV;
  private readonly VERSION = process.env.REACT_APP_VERSION;
  private readonly SERVER_URL = process.env.REACT_APP_SERVER_URL;

  getTimeZone() {
    return this.TZ;
  }

  getEnv() {
    return this.ENV;
  }

  getEnvText() {
    switch (this.ENV) {
      case 'local':
        return 'Local';

      case 'develop':
        return 'Dev';

      case 'product':
        return 'Prod';
    }
  }

  getVersion() {
    return this.VERSION;
  }

  getServerUrl() {
    return this.SERVER_URL;
  }
}

export const appConfig = new AppConfig();
