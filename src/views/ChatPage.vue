<template>
  <div class="chatPage">
    <Navbar />
    <div class="main">
      <Messages />
      <NewMessage />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "../components/Navbar";
import Messages from "../components/Messages";
import NewMessage from "../components/NewMessage";

export default {
  components: { Navbar, Messages, NewMessage },
  computed: {
    ...mapGetters(["username"])
  },
  beforeMount() {
    if (this.username === null) {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
}
</style>
