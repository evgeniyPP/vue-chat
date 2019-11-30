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
          <div class="users" v-for="(user, index) in users" :key="index">
            <div class="user">
              <span>{{ user.name }}</span>
              <span class="status" :class="statusClass(user.online)">{{
                status(user.online)
              }}</span>
            </div>
          </div>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    status(online) {
      return online ? "В сети" : "Не в сети";
    },
    statusClass(online) {
      return online ? "online" : "";
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    }
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

.status {
  float: right;
  color: gray;
}

.online {
  color: green;
  font-weight: bold;
}
</style>
