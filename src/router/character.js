const routes = [
  {
    path: "/character",
    name: "index.character",
    component: () => import("@/views/Character/Index.vue"),
  },
  {
    path: "/character/:id",
    name: "detail.character",
    component: () => import("@/views/Character/Detail.vue"),
  },
];

export default routes;
