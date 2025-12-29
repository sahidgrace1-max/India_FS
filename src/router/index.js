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
    
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
