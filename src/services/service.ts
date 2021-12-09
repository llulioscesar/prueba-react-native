import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export class Service {
  private axios: AxiosInstance;
  private token: string;

  public constructor(config: AxiosRequestConfig) {
    this.axios = axios.create(config);
    this.token = '';

    this.getToken = this.getToken.bind(this);
    this.setToken = this.setToken.bind(this);
    this.getInstance = this.getInstance.bind(this);

    this.getUri = this.getUri.bind(this);
    this.request = this.request.bind(this);
    this.get = this.get.bind(this);
    this.options = this.options.bind(this);
    this.delete = this.delete.bind(this);
    this.head = this.head.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
  }

  public getInstance(): AxiosInstance {
    return this.axios;
  }

  public getToken(): string {
    return `Bearer ${this.token}`;
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public getUri(config?: AxiosRequestConfig): string {
    return this.axios.getUri(config);
  }

  public request<T, R = AxiosResponse<T>>(
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.axios.request(config);
  }

  public get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axios.get(url, config);
  }

  public options<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axios.options(url, config);
  }

  public delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axios.delete(url, config);
  }

  public head<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axios.head(url, config);
  }

  public post<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axios.post(url, data, config);
  }

  public put<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axios.put(url, data, config);
  }

  public patch<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axios.patch(url, data, config);
  }

  public success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  public error<T>(error: AxiosError<T>): void {
    throw error;
  }
}
