import { createRouter, createWebHistory } from "vue-router";
import characterRoutes from "./character";
import comicRoutes from "./comic";
import seriesRoutes from "./series";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  ...characterRoutes,
  ...comicRoutes,
  ...seriesRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "border-indigo-500",
  linkExactActiveClass: "border-indigo-700",
});

export default router;
