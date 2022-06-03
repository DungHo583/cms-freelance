import { createRouter, createWebHistory } from "vue-router";
import signIn from "@/views/signIn.vue";
import dashboard from "@/views/cms/Dashboard.vue";
import configExtention from "@/views/cms/ConfigExtention.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-in",
      name: "Đăng nhập",
      component: signIn,
    },
    {
      path: "/home",
      name: "Dashboard",
      component: dashboard,
    },
    {
      path: "/config-extention",
      name: "Cấu hình máy nhánh",
      component: configExtention,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
