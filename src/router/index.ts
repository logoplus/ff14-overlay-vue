import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: () => import("../pages/Home.vue") },
    { path: "/index.html", redirect: "/" },
    { path: "/timeline", component: () => import("../pages/Timeline.vue"), meta: { title: "时间轴" } },
    { path: "/timeline/settings", component: () => import("../pages/TimelineSettings.vue"), meta: { title: "时间轴编辑" } },
  ],
});
router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title as string;
});
export default router;
