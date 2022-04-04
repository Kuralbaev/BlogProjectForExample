import { Article } from "@/models/Article";
import { Comment } from "@/models/Comment";

interface _state {
  data: [Article] | null;
  detail: Article | null;
  comments: [Comment] | null;
}

export default (api: any) => ({
  namespaced: true,
  state: {
    data: null,
    detail: null,
    comments: null,
  } as _state,

  mutations: {
    set(state: _state, payload: [Article]) {
      state.data = payload;
    },
    setDetail(state: _state, payload: Article) {
      state.detail = payload;
    },
    setDetailComment(state: _state, payload: [Comment]) {
      state.comments = payload;
    },
  },
  actions: {
    async get({ commit }: any): Promise<void> {
      const { data } = await api.all();

      const _new: [Article] = data.map((e: Record<string, any>) =>
        Article.toArticle(e)
      );

      commit("set", _new);
    },
    async getById(
      { commit }: any,
      { id }: Record<string, number>
    ): Promise<void> {
      const { data } = await api.byId(id);

      commit("setDetail", Article.toArticle(data));
    },
    async getArticleComment(
      { commit }: any,
      { id }: Record<string, number>
    ): Promise<void> {
      const { data } = await api.comments(id);

      const _new: [Comment] = data.map((e: Record<string, any>) =>
        Comment.toComment(e)
      );

      commit("setDetailComment", _new);
    },
    async sendArticleComment(
      { dispatch }: any,
      comment: Record<string, any>
    ): Promise<void> {
      const { result } = await api.sendComments(comment);

      if (result) dispatch("getArticleComment", { id: comment.article_id });
    },
  },
  getters: {
    data: (s: _state): [Article] | null => s.data,
    detail: (s: _state): Article | null => s.detail,
    comments: (s: _state): [Comment] | null => s.comments,
  },
});
