<template>
  <p v-if="userTyping" class="typing">{{ typing }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userTyping']),
    typing() {
      return this.userTyping ? `${this.userTyping} пишет сообщение...` : '';
    }
  }
};
</script>

<style scoped>
.typing {
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 25px;
  color: gray;
  text-align: center;
  margin-bottom: 45px;
  background: #fff;
}
</style>
