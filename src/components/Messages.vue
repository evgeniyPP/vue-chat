<template>
  <div v-if="messages.length" class="messages" v-chat-scroll="{ smooth: true }">
    <OneMessage v-for="(message, index) in messages" :key="index" :message="message" />
  </div>
  <p v-else class="messages no-messages">Сообщений нет</p>
</template>

<script>
import { mapGetters } from 'vuex';
import OneMessage from './OneMessage';

export default {
  components: {
    OneMessage
  },
  computed: {
    ...mapGetters(['messages'])
  }
};
</script>

<style scoped>
.messages {
  overflow: auto;
  -ms-overflow-style: none;
  height: calc(100vh-45px-58px-25px);
  margin-top: 56px;
  margin-bottom: 75px;
}

.messages::-webkit-scrollbar {
  display: none;
}

.no-messages {
  margin-top: 100px;
  color: gray;
}
</style>
