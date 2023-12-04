export default [
  {
    path: "/tin-tuc",
    name: "Tin tức",
    component: () => import("@/views/introduction/pageIntro.vue"),
    meta: {
      showInMenu: true,
    },
  },
];
