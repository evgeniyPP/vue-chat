<template>
  <div class="chatPage">
    <Navbar />
    <div class="main">
      <Messages />
      <UserTyping />
      <NewMessage />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '../components/Navbar';
import Messages from '../components/Messages';
import NewMessage from '../components/NewMessage';
import UserTyping from '../components/UserTyping';

export default {
  components: { Navbar, Messages, NewMessage, UserTyping },
  computed: {
    ...mapGetters(['username'])
  },
  beforeMount() {
    if (this.username === null) {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
