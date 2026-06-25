<template>
  <div class="min-h-screen bg-gray-50 flex flex-col relative overflow-x-hidden">
    <NavbarGrace />

    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Blog</h1>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Discover the latest insights, news, and tips from our experts.
        </p>
      </div>

      <div v-if="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1B2B5D]"></div>
      </div>

      <div v-else-if="error" class="text-center py-20 text-red-600">
        {{ error }}
      </div>

      <div v-else-if="blogs.length === 0" class="text-center py-20 text-gray-500">
        No published blogs found.
      </div>

      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
          @click="goToBlog(blog.slug)"
        >
          <div class="flex-shrink-0">
            <img
              v-if="blog.thumbnail"
              class="h-48 w-full object-cover"
              :src="blog.thumbnail"
              :alt="blog.title"
            />
            <div v-else class="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-400">
              No Image
            </div>
          </div>
          <div class="flex-1 p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-[#1B2B5D]">
                {{ formatDate(blog.createdAt) }}
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ blog.title }}
                </p>
                <p class="mt-3 text-base text-gray-500 line-clamp-3">
                  {{ blog.excerpt }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="text-sm">
                <button
                  type="button"
                  class="text-[#1B2B5D] font-semibold hover:text-blue-800"
                  @click.stop="goToBlog(blog.slug)"
                >
                  Read full article <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <fotter />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import api from "@/utils/api";
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import fotter from "@/components/layouts/fotter.vue";

const router = useRouter();
const blogs = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchBlogs = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await api.get("/blog", {
      params: { published: true, limit: 100 },
    });
    blogs.value = response.data.data.items || [];
  } catch (err) {
    console.error("Error fetching blogs:", err);
    error.value = "Failed to load blogs. Please try again later.";
  } finally {
    loading.value = false;
  }
};

const goToBlog = (slug) => {
  router.push(`/blog/${slug}`);
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

onMounted(() => {
  fetchBlogs();
});
</script>
