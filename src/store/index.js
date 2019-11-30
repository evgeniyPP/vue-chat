import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        name: "Женя",
        online: true
      },
      {
        name: "Влад",
        online: false
      },
      {
        name: "Эдик",
        online: true
      },
      {
        name: "Глеб",
        online: false
      },
      {
        name: "Ваня",
        online: false
      }
    ]
  },
  getters: {
    users(state) {
      return state.users;
    }
  },
  mutations: {},
  actions: {}
});
