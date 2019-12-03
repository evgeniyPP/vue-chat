import Vue from "vue";
import App from "./App.vue";
import VueChatScroll from "vue-chat-scroll";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueChatScroll);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/ldbtn.min.css";
import "./assets/css/loading.min.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
