import { Axios, AxiosResponse } from "axios";
import { Store } from "vuex";
import { Alert } from "@/models/Alert";

export default function httpErrorsHandler(
  http: Axios,
  store: Store<any>
): void {
  http.interceptors.response.use(
    (s) => s,
    function (error) {
      return errorWithAlerts(error, store);
    }
  );
}

function errorWithAlerts(
  error: AxiosResponse,
  store: Store<any>
): AxiosResponse {
  const config = error.config;

  if ("errorAlert" in config) {
    let { errorAlert }: any = config;
    if (typeof errorAlert === "string") {
      errorAlert = { text: errorAlert };
    }

    store.dispatch(
      "alert/add",
      new Alert(
        Math.floor(Math.random() * 10000) + 1,
        "Ошибка ответа от сервера " + errorAlert.text,
        errorAlert.timeout ?? 5000,
        errorAlert.critical ?? false
      )
    );
  }
  return error;
}
