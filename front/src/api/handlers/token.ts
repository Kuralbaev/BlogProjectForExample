import { Axios, AxiosError, AxiosRequestConfig } from "axios";
import Token from "@/helpers/Token";
import { Store } from "vuex";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Cookies from "js-cookie";

export default function httpWithToken(http: Axios, store: Store<any>): void {
  http.interceptors.request.use(addAccessToken);
  http.interceptors.response.use((s) => s, setupRefreshAndRepeat(http, store));
}

function addAccessToken(config: AxiosRequestConfig): AxiosRequestConfig {
  const token = Token.get();

  if (token && config.method === "post") {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
}

function setupRefreshAndRepeat(http: Axios, store: Store<any>) {
  return async function (error: AxiosError) {
    if (error.response?.status !== 401) return Promise.reject(error);

    Token.clear();
    const response = await http.post(
      "/api/auth/token/refresh",
      {},
      {} as AxiosRequestConfig
    );

    if (+response.status === 401) {
      await store.dispatch("user/logout");
      return Promise.reject(error);
    }

    Token.set(response.data.access);
    return http.request(error.config);
  };
}
