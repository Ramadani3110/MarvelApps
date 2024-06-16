const routes = [
  {
    path: "/character",
    name: "index.character",
    component: () => import("@/views/Character/Index.vue"),
  },
];

export default routes;
