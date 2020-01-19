<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="title">Чат {{ username }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <Users />
          <Rooms />
          <b-nav-item @click="onExit">Выйти</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Rooms from './Rooms';
import Users from './Users';
import { mapGetters } from 'vuex';

export default {
  components: { Rooms, Users },
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    async onExit() {
      const exit = await this.$store.dispatch('exitChat');
      if (exit) {
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 1.35rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}
.navbar {
  position: fixed;
  z-index: 1000;
  width: 100%;
}
</style>
