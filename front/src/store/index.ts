import { createStore, Store } from "vuex";
import initModuleArticle from "@/store/modules/article";
import initModuleUser from "@/store/modules/user";
import createPersistedState from "vuex-persistedstate";

export default function initStore(api: any): Store<any> {
  const article = initModuleArticle(api.article);
  const user = initModuleUser(api.user);

  return createStore({
    modules: { user, article },
    plugins: [createPersistedState()],
    strict: process.env.NODE_ENV !== "production",
  });
}
