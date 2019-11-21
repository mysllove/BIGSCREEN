import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/specialClass",
    children: [
      {
        path: "specialClass",
        component: () => import("@/views/specialClass/index"),
        name: "specialClass"
      },
      {
        path: "courseCenter",
        component: () => import("@/views/courseCenter/index"),
        name: "courseCenter"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
