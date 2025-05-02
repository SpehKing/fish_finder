import { createRouter, createWebHistory } from "vue-router";
import SensorPage from "../components/SensorPage.vue";
import AboutPage from "../components/AboutPage.vue";

const routes = [
  { path: "/", component: { template: "<div>Welcome to Fish Finder!</div>" } },
  { path: "/sensor", component: SensorPage },
  { path: "/about", component: AboutPage }, // Add About page route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;