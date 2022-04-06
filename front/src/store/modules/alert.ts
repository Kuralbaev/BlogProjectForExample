import { Alert } from "@/models/Alert";

interface _state {
  data: Array<any>;
}

export default {
  namespaced: true,
  state: {
    data: [],
  } as _state,

  mutations: {
    set(state: _state, payload: Alert) {
      state.data.push(payload);
    },
    remove(state: _state, id: number) {
      state.data = state.data.filter((e) => e?.id !== id);
    },
  },

  actions: {
    add({ commit }: any, alert: Alert): void {
      commit("set", alert);

      setTimeout(() => {
        commit("remove", alert.id);
      }, alert.timeout);
    },
  },

  getters: {
    data: (s: _state): Array<any> => s.data,
  },
};
