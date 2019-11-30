<template>
  <div class="chatPage">
    <Navbar />
    <Messages />
    <NewMessage />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Messages from "../components/Messages";
import NewMessage from "../components/NewMessage";

export default {
  components: { Navbar, Messages, NewMessage }
};
</script>

<style>
.chatPage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
