import { createRouter, createWebHistory } from "vue-router";
import SensorPage from "../components/SensorPage.vue";

const routes = [
  { path: "/", component: { template: "<div>Welcome to Fish Finder!</div>" } },
  { path: "/sensor", component: SensorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;