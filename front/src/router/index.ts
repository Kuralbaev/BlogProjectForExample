import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import Home from "@/views/Home.vue";
import { guard } from "@/router/guard";
import { Store } from "vuex";

export default function initRouter(store: Store<any>): Router {
  const routes: Array<RouteRecordRaw> = [
    {
      path: "",
      name: "Home",
      component: Home,
    },
    {
      path: "/article/:id",
      name: "view",
      component: () => import("../views/View.vue"),
    },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  router.beforeEach((to, from, next) => guard(to, from, next));

  return router;
}
