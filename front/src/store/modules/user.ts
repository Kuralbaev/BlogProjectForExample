import { User } from "@/models/User";
import Token from "@/helpers/Token";

interface _state {
  isLogin: boolean;
  user: User | null;
}

export default (api: any) => ({
  namespaced: true,
  state: {
    isLogin: false,
    user: null,
  } as _state,

  mutations: {
    set(state: _state, payload: User): void {
      state.isLogin = true;
      state.user = payload;
    },
    logout(state: _state, payload: User): void {
      state.isLogin = false;
      state.user = null;
    },
  },

  actions: {
    async authorization(
      { commit }: any,
      { username, password }: Record<string, string>
    ): Promise<void> {
      const data = await api.authorization({ username, password });
      Token.set(data.access);

      commit("set", User.toUser(data.user));
    },
    async logout({ commit }: any): Promise<void> {
      Token.clear();

      commit("logout");
    },
  },

  getters: {
    isLogin: (s: _state): boolean => s.isLogin,
  },
});
