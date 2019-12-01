<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Чат</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Выйти</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div>
      <b-button class="users_toggle" v-b-toggle.collapse-1 variant="info"
        >Пользователи</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <div class="users">
            <div class="user" v-for="(user, index) in users" :key="index">
              <span>{{ user.name }}</span>
              <span class="status" :class="statusClass(user.presence)">{{
                status(user.presence)
              }}</span>
            </div>
          </div>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    status(presence) {
      return presence === "online" ? "В сети" : "Не в сети";
    },
    statusClass(presence) {
      return presence === "online" ? "online" : "";
    }
  },
  computed: {
    ...mapGetters(["users"])
  }
};
</script>

<style scoped>
.users_toggle {
  display: block;
  width: 100%;
  height: 50px;
  margin: 0;
  border-radius: 0;
  text-align: left;
}

.users {
  padding-bottom: 1em;
}

.status {
  float: right;
  color: gray;
}

.online {
  color: green;
  font-weight: bold;
}
</style>
