<template>
  <b-card>
    <h6 class="title">{{ message.name }}</h6>
    <p>
      {{ message.text }}
    </p>
  </b-card>
</template>

<script>
export default {
  props: ['message']
};
</script>

<style scoped>
.title {
  font-size: 1.05rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
}

.card {
  width: 95%;
  margin: 0 auto;
  margin-top: 1em;
}

.card-body {
  padding: 1rem 1rem 0 1rem !important;
}
</style>
