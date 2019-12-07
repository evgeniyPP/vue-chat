import Vue from "vue";
import Vuex from "vuex";
import chatkit from "../chatkit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    users: [],
    messages: [],
    rooms: [],
    error: null,
    userTyping: null,
    activeRoom: null
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
    },
    activeRoom(state) {
      return state.activeRoom;
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
    },
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setActiveRoom(state, payload) {
      state.activeRoom = payload;
    },
    clearChatRoom(state) {
      state.messages = [];
    }
  },
  actions: {
    async login(store, username) {
      try {
        const currentUser = await chatkit.connectUser(username);
        if (currentUser === []) {
          return false;
        }
        store.commit("setUsername", currentUser.id);

        const rooms = currentUser.rooms.map(room => ({
          id: room.id,
          name: room.name
        }));
        store.commit("setRooms", rooms);

        const activeRoom = store.state.activeRoom || rooms[0];
        store.commit("setActiveRoom", {
          id: activeRoom.id,
          name: activeRoom.name
        });
        await chatkit.subscribeToRoom(activeRoom.id);
        return true;
      } catch (e) {
        if (e.info.error === "services/chatkit/not_found/user_not_found") {
          store.commit("setError", "Пользователь не найден");
        } else {
          store.commit("setError", "Неизвестная ошибка");
        }
        return false;
      }
    },
    async changeRoom(store, roomId) {
      try {
        const room = await chatkit.subscribeToRoom(roomId);
        store.commit("setActiveRoom", {
          id: room.id,
          name: room.name
        });
        return true;
      } catch (e) {
        return false;
      }
    },
    async sendMessage(store, text) {
      try {
        await chatkit.sendMessage(text);
        return true;
      } catch (e) {
        store.commit("setError", e.info.error);
        return false;
      }
    },
    async exitChat(store) {
      try {
        await chatkit.disconnectUser();
        return true;
      } catch (e) {
        store.commit("setError", e.info.error);
        return false;
      }
    }
  }
});
