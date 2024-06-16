const routes = [
  {
    path: "/series",
    name: "index.series",
    component: () => import("@/views/Series/Index.vue"),
  },
];

export default routes;
