import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import View from "@/views/View.vue";
import { guard } from "@/router/guard";
import { Store } from "vuex";

export default function initRouter(store: Store<any>): Router {
  const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/article/:id",
      name: "view",
      component: View,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not_found",
      component: NotFound,
    },
  ];

  const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
  });

  router.beforeEach((to, from, next) => guard(to, from, next));

  return router;
}
