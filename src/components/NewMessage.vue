<template>
  <div class="newMessage">
    <b-form-textarea
      id="textarea"
      v-model="text"
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
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      console.log(this.text);
      this.text = "";
    }
  }
};
</script>

<style scoped>
.newMessage {
  position: fixed;
  margin-top: 83vh;
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
</style>
