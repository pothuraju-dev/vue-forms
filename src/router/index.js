import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../components/Home.vue"),
  },
  {
    path: "/starter",
    name: "starter",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../components/starter/Form.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
