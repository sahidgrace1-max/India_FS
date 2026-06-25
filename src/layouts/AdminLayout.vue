<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-800 text-white flex flex-col">
      <div class="p-4 text-xl font-bold border-b border-gray-700">
        Admin Dashboard
      </div>
      <nav class="flex-1 p-4 space-y-2">
        <router-link
          to="/admin"
          class="block px-4 py-2 rounded hover:bg-gray-700"
          active-class="bg-gray-700"
          >Dashboard</router-link
        >
        <router-link
          to="/admin/inquiries"
          class="block px-4 py-2 rounded hover:bg-gray-700"
          active-class="bg-gray-700"
          >Inquiries</router-link
        >
        <router-link
          to="/admin/blog"
          class="block px-4 py-2 rounded hover:bg-gray-700"
          active-class="bg-gray-700"
          >Blog Posts</router-link
        >
        <router-link
          to="/admin/team"
          class="block px-4 py-2 rounded hover:bg-gray-700"
          active-class="bg-gray-700"
          >Team Members</router-link
        >
      </nav>
      <div class="p-4 border-t border-gray-700">
        <button
          @click="handleLogout"
          class="w-full px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-left text-center"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="bg-white shadow">
        <div class="px-4 py-4 sm:px-6 lg:px-8">
          <h1 class="text-xl font-semibold text-gray-900">
            {{ currentRouteName }}
          </h1>
        </div>
      </header>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const currentRouteName = computed(() => {
  return route.name || "Dashboard";
});

const handleLogout = () => {
  authStore.logout();
  router.push("/admin/login");
};
</script>
