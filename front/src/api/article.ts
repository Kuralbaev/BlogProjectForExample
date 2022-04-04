import { Axios, AxiosRequestConfig } from "axios";

export default (http: Axios): any => ({
  async all() {
    const { data } = await http.get("/api/article", {
      errorAlert: "при попытке получение постов",
    } as AxiosRequestConfig);

    return data;
  },
  async byId(id: number) {
    const { data } = await http.get(`/api/article/${id}`, {
      errorAlert: "при попытке получение постов",
    } as AxiosRequestConfig);

    return data;
  },
  async comments(id: number) {
    const { data } = await http.get(`/api/comment/${id}`, {
      errorAlert: "при попытке получение комментов",
    } as AxiosRequestConfig);

    return data;
  },
  async sendComments(comment: Record<string, string>) {
    const { data } = await http.post(`/api/comment/create`, comment, {
      errorAlert: "при попытке создание комментов",
    } as AxiosRequestConfig);

    return data;
  },
});
