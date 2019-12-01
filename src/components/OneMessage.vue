<template>
  <b-card>
    <h6>{{ message.username }}</h6>
    <p>
      {{ message.text }}
    </p>
  </b-card>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style>
.card {
  width: 95%;
  margin: 0 auto;
  margin-top: 1em;
}

.card-body {
  padding: 1rem 1rem 0 1rem !important;
}
</style>
