import { Axios, AxiosRequestConfig } from "axios";

export default (http: Axios): any => ({
  async authorization(payload: Record<string, string>) {
    const { data } = await http.post("/api/auth/token", payload, {
      errorAlert: "при попытке логина",
    } as AxiosRequestConfig);

    return data;
  },
  async verify(token: string) {
    const { data } = await http.post("/api/auth/token/verify", { token });
    return data;
  },
});
