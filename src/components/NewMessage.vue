<template>
  <div class="newMessage">
    <div class="typing">{{ typing }}</div>
    <b-form-textarea
      id="textarea"
      v-model="text"
      @input="isTyping"
      placeholder="Новое сообщение..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <b-button @click="onSubmit" type="button" variant="primary">
      <img src="../assets/send.png" alt="" />
    </b-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { isTyping } from "../chatkit.js";

export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    async onSubmit() {
      const send = await this.$store.dispatch("sendMessage", this.text);
      if (send) this.text = "";
    },
    async isTyping() {
      await isTyping(this.activeRoom.id);
    }
  },
  computed: {
    ...mapGetters(["userTyping", "activeRoom"]),
    typing() {
      return this.userTyping ? `${this.userTyping} пишет сообщение...` : "";
    }
  }
};
</script>

<style scoped>
.newMessage {
  position: fixed;
  margin-top: 79vh;
  width: 100%;
  height: 100%;
  background: #fff;
}

textarea {
  width: 95%;
  margin-left: 2.5%;
}

button {
  width: 40px;
  height: 40px;
  position: absolute;
  float: right;
  top: 2em;
  right: 0.5em;
  font-weight: bold;
  border-radius: 100%;
  margin-top: 0.5em;
  margin-right: 0.5em;
}

img {
  position: absolute;
  top: 35%;
  left: 15%;
  width: 70%;
}
.typing {
  height: 3vh;
  color: gray;
  font-size: 0.85rem;
  margin-left: 1em;
  margin-bottom: 0.5em;
}
</style>
