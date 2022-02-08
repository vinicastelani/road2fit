import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./store";
import AxiosConfig from "./services/AxiosConfig"
Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV == "development";


new Vue({
  vuetify,
  router,
  store,
  AxiosConfig,
  render: (h) => h(App)
}).$mount("#app");
