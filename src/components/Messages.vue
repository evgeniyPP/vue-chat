<template>
  <div class="messages">
    <OneMessage
      v-for="(message, index) in messages"
      :key="index"
      :message="message"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OneMessage from "./OneMessage";

export default {
  components: {
    OneMessage
  },
  computed: {
    ...mapGetters(["messages"])
  }
};
</script>

<style scoped></style>
