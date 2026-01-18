import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";

import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/our-services",
    name: "Services",
    component: () => import("@/views/OurServices.vue"),
  },
  {
    path: "/university/australia",
    name: "AustraliaUniversity",
    component: () => import("@/views/AustraliaUniversity.vue"),
  },
  // {
  //   path: "/university/usa",
  //   name: "USAUniversity",
  //   component: () => import("@/views/USAUniversity.vue"),
  // },
  // {
  //   path: "/university/uk",
  //   name: "UKUniversity",
  //   component: () => import("@/views/UKUniversity.vue"),
  // },
  // {
  //   path: "/university/canada",
  //   name: "CanadaUniversity",
  //   component: () => import("@/views/CanadaUniversity.vue"),
  // },
  {
    path: "/scholarships",
    name: "Scholarships",
    component: () => import("@/views/Scholarships.vue"),
  },
  {
    path: "/destinations/australia",
    name: "AustraliaDestinations",
    component: () => import("@/views/DestinationsAustralia.vue"),
  },
  {
    path: "/destinations/uk",
    name: "UkDestinations",
    component: () => import("@/views/UkDestinations.vue"),
  },
  {
    path: "/destinations/usa",
    name: "UsaDestinations",
    component: () => import("@/views/UsaDestination.vue"),
  },
  {
    path: "/destinations/canada",
    name: "CanadaDestinations",
    component: () => import("@/views/CanadaDestinations.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
