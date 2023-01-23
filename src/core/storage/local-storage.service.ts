export class LocalStorageService {
  private readonly PATH_KEY = 'path';

  setPath(path: string): void {
    return localStorage.setItem(this.PATH_KEY, path);
  }

  get path(): string | null {
    return localStorage.getItem(this.PATH_KEY);
  }
}

export const localStorageService = new LocalStorageService();
