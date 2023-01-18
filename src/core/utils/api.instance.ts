import axios from 'axios';

export class ApiInstance {
  protected readonly request = axios.create();

  constructor() {
    this.request.interceptors.response.use(
      (response) => Promise.resolve(response.data),
      (e) => Promise.reject(e.response.data),
    );
  }
}
