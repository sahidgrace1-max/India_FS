<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-20 right-20 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="text-center mb-16 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Insights & News
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Latest from Our 
          <span class="relative inline-block">
            Blog
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
        <p class="mt-6 max-w-2xl mx-auto text-lg text-slate-600 font-medium">
          Stay updated with the latest insights, tips, and news about studying abroad
        </p>
      </div>

      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800 relative">
          <div class="absolute inset-0 rounded-full border-t-2 border-green-600 animate-ping opacity-20"></div>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-12 text-red-600 font-medium bg-white/70 backdrop-blur-sm border border-red-100 rounded-2xl max-w-xl mx-auto">
        {{ error }}
      </div>

      <div v-else-if="blogs.length === 0" class="text-center py-12 text-slate-500 font-medium">
        No blog posts available yet.
      </div>

      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(blog, index) in blogs"
          :key="blog.id"
          class="flex flex-col bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-700 ease-out cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 group"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          :style="{ transitionDelay: `${index * 150}ms` }"
          @click="goToBlog(blog.slug)"
        >
          <div class="flex-shrink-0 h-52 overflow-hidden relative">
            <img
              v-if="blog.thumbnail"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              :src="blog.thumbnail"
              :alt="blog.title"
            />
            <div v-else class="h-full w-full bg-gradient-to-br from-slate-100 to-blue-50/50 flex items-center justify-center">
              <svg class="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-60"></div>
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
              {{ formatDate(blog.createdAt) }}
            </div>
          </div>

          <div class="flex-1 p-6 flex flex-col justify-between relative">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-blue-900 line-clamp-2 transition-colors group-hover:text-blue-700">
                {{ blog.title }}
              </h3>
              
              <p class="mt-3 text-base text-slate-600 line-clamp-3">
                {{ blog.excerpt }}
              </p>
            </div>

            <div class="mt-6 flex items-center">
              <span class="inline-flex items-center text-blue-800 font-semibold transition-colors group-hover:text-green-600">
                Read full article
                <svg class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div 
        v-if="blogs.length > 0" 
        class="text-center mt-16 transition-all duration-1000 ease-out delay-500 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
      >
        <router-link
          to="/blog"
          class="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-800 rounded-xl shadow-lg shadow-blue-800/20 transition-all duration-200 transform hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:bg-blue-900 group"
        >
          View All Blog Posts
          <svg class="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import api from "@/utils/api";

const router = useRouter();
const blogs = ref([]);
const loading = ref(true);
const error = ref(null);

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const fetchLatestBlogs = async () => {
  try {
    loading.value = true;
    error.value = null;
    
    const response = await api.get("/blog", {
      params: { 
        published: true, 
        limit: 3,
        sort: '-createdAt' 
      },
    });
    
    blogs.value = response.data.data.items || [];
  } catch (err) {
    console.error("Error fetching latest blogs:", err);
    error.value = "Failed to load blog posts.";
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
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
};

onMounted(() => {
  fetchLatestBlogs();

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (observer) observer.disconnect();
    }
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes rotateDashed {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}
</style>