const routes = [
  {
    path: "/series",
    name: "index.series",
    component: () => import("@/views/Series/Index.vue"),
  },
  {
    path: "/series/:id",
    name: "detail.series",
    component: () => import("@/views/Series/Detail.vue"),
  },
];

export default routes;
