<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Чат</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Выйти</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div>
      <b-button class="users_toggle" v-b-toggle.collapse-1 variant="info"
        >Пользователи</b-button
      >
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <div class="users">
            <div class="user">
              <span>Женя</span>
              <span class="status online">В сети</span>
            </div>
            <div class="user">
              <span>Влад</span>
              <span class="status">Не в сети</span>
            </div>
            <div class="user">
              <span>Эдик</span>
              <span class="status online">В сети</span>
            </div>
            <div class="user">
              <span>Глеб</span>
              <span class="status">Не в сети</span>
            </div>
            <div class="user">
              <span>Ваня</span>
              <span class="status">Не в сети</span>
            </div>
          </div>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.users_toggle {
  display: block;
  width: 100%;
  height: 50px;
  margin: 0;
  border-radius: 0;
  text-align: left;
}

.status {
  float: right;
  color: gray;
}

.online {
  color: green;
  font-weight: bold;
}
</style>
