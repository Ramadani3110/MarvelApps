const routes = [
  {
    path: "/comic",
    name: "index.comic",
    component: () => import("@/views/Comic/Index.vue"),
  },
  {
    path: "/comic/:id",
    name: "detail.comic",
    component: () => import("@/views/Comic/Detail.vue"),
  },
];

export default routes;
