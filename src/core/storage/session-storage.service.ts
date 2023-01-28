export class SessionStorageService {
  private readonly PATH_KEY = 'path';

  setPath(path: string): void {
    return sessionStorage.setItem(this.PATH_KEY, path);
  }

  resetPath() {
    return sessionStorage.removeItem(this.PATH_KEY);
  }

  get path(): string | null {
    return sessionStorage.getItem(this.PATH_KEY);
  }
}

export const sessionStorageService = new SessionStorageService();
