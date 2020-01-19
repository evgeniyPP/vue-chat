<template>
  <div class="newMessage">
    <b-form-textarea
      id="textarea"
      v-model="text"
      @input="isTyping"
      placeholder="Новое сообщение..."
    ></b-form-textarea>
    <b-button @click="onSubmit" type="button" variant="primary"></b-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { isTyping } from '../chatkit.js';

export default {
  data() {
    return {
      text: ''
    };
  },
  computed: {
    ...mapGetters(['activeRoom'])
  },
  methods: {
    async onSubmit() {
      const send = await this.$store.dispatch('sendMessage', this.text);
      if (send) this.text = '';
    },
    async isTyping() {
      await isTyping(this.activeRoom.id);
    }
  }
};
</script>

<style scoped>
.newMessage {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 45px;
  background: #fff;
}

textarea {
  width: 95%;
  margin: 5px;
  padding: 3px 5px;
  resize: none;
}

button {
  margin: 0 5px;
  width: 38px;
  height: 38px;
  background-image: url('../assets/send.png');
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
</style>
