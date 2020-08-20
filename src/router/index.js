import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home")
    },
    {
      path: "/photos/:id",
      name: "detailimage",
      component: () => import("@/components/DetailImage")
    },
    {
      path: "/users/:username",
      name: "listimageuser",
      component: () => import("@/components/ListImageUser")
    },
  ],
});