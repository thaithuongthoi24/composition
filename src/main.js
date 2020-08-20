import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueCompositionApi from '@vue/composition-api'
import InfiniteLoading from 'vue-infinite-loading';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(InfiniteLoading);
Vue.config.productionTip = false;
Vue.use(VueCompositionApi)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
