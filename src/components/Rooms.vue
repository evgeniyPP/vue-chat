<template>
  <b-nav-item-dropdown text="Комнаты">
    <b-dropdown-item v-for="(room, index) in rooms" :key="index" href="#">{{
      room
    }}</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["rooms"])
  }
};
</script>

<style></style>
