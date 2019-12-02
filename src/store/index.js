import Vue from "vue";
import Vuex from "vuex";
import chatkit from "../chatkit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    users: [],
    messages: [],
    rooms: ["Main", "Second", "Third", "Fourth"],
    error: null,
    userTyping: null,
    MAIN_ROOM_ID: "061ec58f-496e-4ad9-9609-c6221ca3ac19"
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
    },
    rooms(state) {
      return state.rooms;
    },
    userTyping(state) {
      return state.userTyping;
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
    },
    setUserTyping(state, userId) {
      state.userTyping = userId;
    }
  },
  actions: {
    async login(store, username) {
      const currentUser = await chatkit.connectUser(username);
      if (currentUser === []) {
        return false;
      }
      store.commit("setUsername", currentUser.id);
      await chatkit.subscribeToRoom(store.state.MAIN_ROOM_ID);
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
