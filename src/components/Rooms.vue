<template>
  <b-nav-item-dropdown text="Комнаты">
    <b-dropdown-item
      v-for="(room, index) in rooms"
      :key="index"
      @click="changeRoom(room.id)"
      >{{ room.name }}</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["rooms"])
  },
  methods: {
    async changeRoom(roomId) {
      await this.$store.dispatch("changeRoom", roomId);
    }
  }
};
</script>

<style></style>
