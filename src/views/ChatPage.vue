<template>
  <div class="chatPage">
    <Navbar />
    <Messages />
    <NewMessage />
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

<style>
.chatPage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
