import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";

import About from "@/views/About.vue";
import { useAuthStore } from "@/stores/auth";

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
  {
    path: "/university/usa",
    name: "USAUniversity",
    component: () => import("@/views/USAUniversity.vue"),
  },
  {
    path: "/university/uk",
    name: "UKUniversity",
    component: () => import("@/views/UkUniversity.vue"),
  },
  {
    path: "/university/canada",
    name: "CanadaUniversity",
    component: () => import("@/views/CanadaUniversity.vue"),
  },
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
  {
    path: "/destinations/newzealand",
    name: "NewZealandDestinations",
    component: () => import("@/views/NewZealandDestinations.vue"),
  },
  {
    path: "/test-preparation/ielts",
    name: "IELTSPreparation",
    component: () => import("@/views/IELTSPreparation.vue"),
  },
  {
    path: "/test-preparation/toefl",
    name: "TOEFLPreparation",
    component: () => import("@/views/TOEFLPreparation.vue"),
  },
  {
    path: "/test-preparation/gmat",
    name: "GMATPreparation",
    component: () => import("@/views/GMATPreparation.vue"),
  },
  {
    path: "/test-preparation/pte",
    name: "PTEPreparation",
    component: () => import("@/views/PTEPreparation.vue"),
  },
  {
    path: "/blog",
    name: "BlogList",
    component: () => import("@/views/BlogList.vue"),
  },
  {
    path: "/blog/:slug",
    name: "BlogDetails",
    component: () => import("@/views/BlogDetails.vue"),
  },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: () => import("@/views/admin/Login.vue"),
  },
  {
    path: "/admin",
    component: () => import("@/layouts/AdminLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "AdminDashboard",
        component: () => import("@/views/admin/Dashboard.vue"),
      },
      {
        path: "inquiries",
        name: "AdminInquiries",
        component: () => import("@/views/admin/InquiriesList.vue"),
      },
      {
        path: "contacts",
        name: "AdminContacts",
        component: () => import("@/views/admin/ContactsList.vue"),
      },
      {
        path: "blog",
        name: "AdminBlogPosts",
        component: () => import("@/views/admin/BlogPostsList.vue"),
      },
      {
        path: "destinations",
        name: "AdminDestinations",
        component: () => import("@/views/admin/DestinationsList.vue"),
      },
      {
        path: "universities",
        name: "AdminUniversities",
        component: () => import("@/views/admin/UniversitiesList.vue"),
      },
      {
        path: "scholarships",
        name: "AdminScholarships",
        component: () => import("@/views/admin/ScholarshipsList.vue"),
      },
      {
        path: "team",
        name: "AdminTeam",
        component: () => import("@/views/admin/TeamList.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/admin/login");
  } else if (to.path === "/admin/login" && authStore.isAuthenticated) {
    next("/admin");
  } else {
    next();
  }
});

export default router;
