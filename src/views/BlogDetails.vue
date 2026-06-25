<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white flex flex-col relative overflow-x-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
    </div>

    <NavbarGrace class="relative z-20" />

    <main class="flex-grow w-full py-12 relative z-10 px-4 sm:px-6 lg:px-8">
      <div v-if="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
      </div>

      <div v-else-if="error" class="text-center py-20 text-red-600 font-medium bg-white/70 backdrop-blur-sm border border-red-100 rounded-2xl max-w-xl mx-auto">
        {{ error }}
      </div>

      <div v-else-if="blog" class="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm overflow-hidden mt-6">
        <div class="relative h-64 sm:h-80 md:h-96 w-full bg-slate-100">
          <img
            v-if="blog.thumbnail"
            :src="blog.thumbnail"
            :alt="blog.title"
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full flex items-center justify-center text-slate-400 text-lg font-medium">
            No Image Available
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
        </div>

        <div class="p-8 sm:p-12">
          <div class="flex items-center space-x-3 text-sm mb-6">
            <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs">
              <span class="w-6 h-1 bg-green-600 rounded-full mr-2"></span>
              Blog
            </div>
            <span class="text-slate-300">&bull;</span>
            <span class="text-slate-500 font-medium">{{ formatDate(blog.createdAt) }}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-10 leading-tight relative inline-block">
            {{ blog.title }}
            <span class="absolute -bottom-3 left-0 w-1/4 h-1.5 bg-green-500 rounded-full"></span>
          </h1>

          <div
            class="prose prose-lg max-w-none prose-headings:text-blue-900 prose-headings:font-bold prose-p:text-slate-700 prose-a:text-blue-800 prose-a:font-semibold hover:prose-a:text-green-600 prose-img:rounded-2xl prose-img:shadow-sm prose-strong:text-blue-900"
            v-html="blog.content"
          ></div>
          
          <div class="mt-12 pt-8 relative">
            <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-800/10 to-transparent"></div>
            
            <button
              @click="$router.push('/blog')"
              class="inline-flex items-center px-6 py-3 font-semibold text-white bg-blue-800 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-xl hover:bg-blue-700 transition-all duration-200"
            >
              <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all blogs
            </button>
          </div>
        </div>
      </div>
    </main>

    <fotter class="relative z-20" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/utils/api";
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import fotter from "@/components/layouts/fotter.vue";

const route = useRoute();
const router = useRouter();
const blog = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchBlogDetails = async () => {
  try {
    loading.value = true;
    error.value = null;
    const response = await api.get(`/blog/${route.params.slug}`);
    blog.value = response.data.data;
  } catch (err) {
    console.error("Error fetching blog details:", err);
    if (err.response && err.response.status === 404) {
      error.value = "Blog post not found.";
    } else {
      error.value = "Failed to load the blog post. Please try again later.";
    }
  } finally {
    loading.value = false;
  }
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
  fetchBlogDetails();
});
</script>

<style scoped>
/* Any additional specific scoped styles can go here if needed */
</style>