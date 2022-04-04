import { Alert } from "@/models/Alert";

interface _state {
  data: [Alert];
}

export default {
  namespaced: true,
  state: {} as Alert,
  mutations: {
    set(state: _state, payload: Alert) {
      state.data.push(payload);
    },
  },
  actions: {
    add({ commit }: any, alert: Alert): void {
      commit("set", alert);
    },
  },
  getters: {
    data: (s: _state): [Alert] => s.data,
  },
};
