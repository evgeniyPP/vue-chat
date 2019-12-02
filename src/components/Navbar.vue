<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Чат</b-navbar-brand>
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
import Rooms from "./Rooms";
import Users from "./Users";

export default {
  components: { Rooms, Users },
  methods: {
    async onExit() {
      const exit = await this.$store.dispatch("exitChat");
      if (exit) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style></style>
