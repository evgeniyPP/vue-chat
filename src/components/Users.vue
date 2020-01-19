<template>
  <div>
    <b-nav-item-dropdown text="Пользователи" right>
      <b-dropdown-item v-for="(user, index) in users" :key="index">
        <div class="user">
          <span class="status" v-if="status(user.presence)">&#10004;</span>
          <span class="status" v-else>&#10006;</span>
          {{ user.name }}
        </div>
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    status(presence) {
      return presence === 'online' ? true : false;
    }
  },
  computed: {
    ...mapGetters(['users'])
  }
};
</script>

<style scoped>
.status {
  margin-right: 10px;
}
</style>
