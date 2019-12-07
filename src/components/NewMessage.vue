<template>
  <div>
    <span class="typing">{{ typing }}</span>
    <div class="newMessage">
      <b-form-textarea
        id="textarea"
        v-model="text"
        @input="isTyping"
        placeholder="Новое сообщение..."
        rows="1"
      ></b-form-textarea>
      <b-button @click="onSubmit" type="button" variant="primary"> </b-button>
    </div>
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
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
}

textarea {
  width: 95%;
  margin: 5px;
  padding: 3px 5px;
  resize: none;
  align-self: stretch;
}

button {
  margin: 0 5px;
  width: 38px;
  height: 38px;
  background-image: url("../assets/send.png");
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 50% 47%;
  border-radius: 100%;
}

img {
  position: absolute;
  top: 35%;
  left: 15%;
  width: 70%;
}
.typing {
  color: gray;
  font-size: 0.85rem;
  margin-left: 0.5em;
  margin-bottom: 0.25em;
}
</style>
