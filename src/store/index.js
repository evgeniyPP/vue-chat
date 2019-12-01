import Vue from "vue";
import Vuex from "vuex";
import chatkit from "../chatkit";

const MAIN_ROOM_ID = "061ec58f-496e-4ad9-9609-c6221ca3ac19";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    users: [],
    messages: [],
    error: null
  },
  getters: {
    username(state) {
      return state.username;
    },
    users(state) {
      return state.users;
    },
    messages(state) {
      return state.messages;
    }
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    setUsername(state, id) {
      state.username = id;
    },
    setUsers(state, members) {
      state.users = members;
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    async login(store, username) {
      const currentUser = await chatkit.connectUser(username);
      if (currentUser === []) {
        return false;
      }
      store.commit("setUsername", currentUser.id);
      await chatkit.subscribeToRoom(MAIN_ROOM_ID);
      return true;
    },
    async sendMessage(store, text) {
      try {
        await chatkit.sendMessage(text);
        return true;
      } catch (e) {
        store.commit("setError", e.info.error);
        return false;
      }
    }
  }
});
