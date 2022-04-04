import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/style/index.scss";

import initHttp from "@/api/http";
import initApi from "@/api/index";
import initStore from "@/store";
import initRouter from "@/router";
import httpErrorsHandler from "@/api/handlers/errors";
import httpWithToken from "@/api/handlers/token";

const http = initHttp();
const api = initApi(http);
const store = initStore(api);
const router = initRouter(store);

httpWithToken(http, store);
httpErrorsHandler(http, store);

const app = createApp(App);
app.config.globalProperties.$api = api;

app.use(store);
app.use(router);
app.mount("#app");
