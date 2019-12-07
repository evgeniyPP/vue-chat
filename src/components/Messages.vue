<template>
  <div class="messages" v-chat-scroll="{ smooth: true }">
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

<style scoped>
.messages {
  margin-top: 50px;
  height: 80vh;
  overflow: auto;
}
</style>
