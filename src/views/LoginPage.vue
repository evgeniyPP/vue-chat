<template>
  <div class="wrapper">
    <b-jumbotron>
      <h1>Чат на Vue.js</h1>
      <p class="lead">
        Это мой чат, написанный на Vue.js с использованием Chatkit.
      </p>
      <p>Возможно, также используется BootstrapVue</p>
    </b-jumbotron>
    <b-form-group :validated="validated">
      <b-alert :show="alert" variant="danger">{{ alertText }}</b-alert>
      <label for="username">Введите свой никнейм</label>
      <b-form-input
        :value="username"
        @input="onInput"
        type="text"
        class="form-control"
        id="username"
        aria-describedby="username"
        placeholder="Ваш никнейм"
        required
      />
      <b-button
        @click="onSubmit"
        :disabled="!validated"
        type="button"
        variant="primary"
        class="ld-ext-right"
        :class="{ running: loading }"
        >Войти
        <div class="ld ld-ring ld-spin"></div>
      </b-button>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      validated: false,
      loading: false,
      alert: false,
      alertText: ""
    };
  },
  methods: {
    onInput(value) {
      this.username = value;
      if (value.length > 3) {
        this.validated = true;
      } else {
        this.validated = false;
      }
    },
    async onSubmit() {
      try {
        this.loading = true;
        await this.$store.dispatch("login", this.username);
        this.$router.push("/chat");
      } catch (e) {
        this.loading = false;
        this.alert = true;
        this.alertText = e;
      }
    }
  }
};
</script>

<style scoped>
.jumbotron {
  padding: 2em 1em;
  margin-bottom: 2em;
}

.form-group {
  max-width: 500px;
  margin: 0 1em;
}

.btn {
  margin-top: 1.5em;
}

.alert {
  margin: 0 auto 1em auto;
}

.ld {
  width: 1em;
  height: 1em;
}
</style>
