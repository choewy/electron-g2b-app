import axios from 'axios';

export class ApiInstance {
  protected readonly request = axios.create();

  constructor() {
    this.request.interceptors.response.use(
      (r) => Promise.resolve(r.data),
      (e) => Promise.reject(e.response.data),
    );
  }
}
