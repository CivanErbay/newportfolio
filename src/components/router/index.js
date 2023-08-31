import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/WhoAmI.vue"),
    },
    {
      path: "/whoami",
      component: () => import("../views/WhoAmI.vue"),
    },
    {
      path: "/projects",
      component: () => import("../views/Projects.vue"),
    },
    {
      path: "/techstack",
      component: () => import("../views/TechStack.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/mailsuccess",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/impressum",
      component: () => import("../views/Impressum.vue"),
    },
  ],
});

export default router;
