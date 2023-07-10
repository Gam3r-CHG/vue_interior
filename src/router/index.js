import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/project",
    name: "Project",
    // route level code-splitting
    // this generates a separate chunk (blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blog" */ "@/views/ProjectView.vue"),
  },
  {
    path: "/blog/:pageNumber(\\d+)?",
    name: "Blog",
    // route level code-splitting
    // this generates a separate chunk (blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blog" */ "@/views/BlogView.vue"),
  },
  {
    path: "/article/:articleId(\\d+)?",
    name: "Article",
    // route level code-splitting
    // this generates a separate chunk (blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blog" */ "@/views/ArticleView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "blog" */ "@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
