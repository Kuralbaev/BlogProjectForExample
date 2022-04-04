import { Axios } from "axios";

import createUserApi from "./user";
import createArticleApi from "./article";

export default (http: Axios): any => ({
  article: createArticleApi(http),
  user: createUserApi(http),
});
