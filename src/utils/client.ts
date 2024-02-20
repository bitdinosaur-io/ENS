import type { AxiosResponse } from "axios";
import axios from "axios";

export const Axios = axios.create({
  // baseURL: "http://api.ord.watcher.tools", // dev api
  baseURL: "https://api.watcher.tools", // deploy api
  // baseURL: "http://api.ens.diagonalley.xyz", // deploy api
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

const responseBody = (response: AxiosResponse) => response.data;

class HttpClient {
  get<T>(endpoint: string, query?: any): Promise<T> {
    return Axios.get(endpoint, { params: query }).then(responseBody);
  }
  post<T>(endpoint: string, body: any): Promise<T> {
    return Axios.post(endpoint, body).then(responseBody);
  }
  put<T>(endpoint: string, body: any): Promise<T> {
    return Axios.put(endpoint, body).then(responseBody);
  }
  delete<T>(endpoint: string): Promise<T> {
    return Axios.delete(endpoint).then(responseBody);
  }
}

export default new HttpClient();
