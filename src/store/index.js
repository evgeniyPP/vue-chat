import Vue from "vue";
import Vuex from "vuex";
import chatkit from "../chatkit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
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
    username(state) {
      return state.username;
    },
    users(state) {
      return state.users;
    }
  },
  mutations: {
    setUsername(state, id) {
      state.username = id;
    }
  },
  actions: {
    async login(store, username) {
      const currentUser = await chatkit.connectUser(username);
      if (currentUser === []) {
        return false;
      }
      store.commit("setUsername", currentUser.id);
      return true;
    }
  }
});
