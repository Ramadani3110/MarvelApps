const routes = [
  {
    path: "/comic",
    name: "index.comic",
    component: () => import("@/views/Comic/Index.vue"),
  },
];

export default routes;
