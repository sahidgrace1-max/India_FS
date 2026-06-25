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
/* ─── Blog Content Typography ───
   v-html content doesn't receive Vue scoped attributes,
   so we use :deep() to style the rendered HTML from TipTap. */

:deep(.prose) h1 {
  font-size: 2em;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 1.5em;
  margin-bottom: 0.6em;
  color: #1e3a8a;
}

:deep(.prose) h2 {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 1.4em;
  margin-bottom: 0.6em;
  color: #1e3a8a;
}

:deep(.prose) h3 {
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 1.3em;
  margin-bottom: 0.5em;
  color: #1e3a8a;
}

:deep(.prose) h4 {
  font-size: 1.1em;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 1.2em;
  margin-bottom: 0.5em;
  color: #1e3a8a;
}

:deep(.prose) p {
  margin-bottom: 1.25em;
  line-height: 1.75;
  color: #334155;
}

:deep(.prose) strong {
  font-weight: 700;
  color: #1e3a8a;
}

:deep(.prose) em {
  font-style: italic;
}

:deep(.prose) a {
  color: #1e40af;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}

:deep(.prose) a:hover {
  color: #16a34a;
}

:deep(.prose) ul {
  list-style-type: disc;
  padding-left: 1.75em;
  margin-bottom: 1.25em;
}

:deep(.prose) ol {
  list-style-type: decimal;
  padding-left: 1.75em;
  margin-bottom: 1.25em;
}

:deep(.prose) li {
  margin-bottom: 0.5em;
  line-height: 1.75;
}

:deep(.prose) li > ul,
:deep(.prose) li > ol {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

:deep(.prose) blockquote {
  border-left: 4px solid #93c5fd;
  padding-left: 1.25em;
  margin: 1.5em 0;
  font-style: italic;
  color: #475569;
}

:deep(.prose) pre {
  background-color: #0f172a;
  color: #e2e8f0;
  padding: 1em 1.25em;
  border-radius: 0.75em;
  overflow-x: auto;
  margin: 1.5em 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
  line-height: 1.7;
}

:deep(.prose) code {
  background-color: #eff6ff;
  color: #1e40af;
  padding: 0.15em 0.35em;
  border-radius: 0.25em;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
}

:deep(.prose) pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  font-size: inherit;
}

:deep(.prose) img {
  max-width: 100%;
  height: auto;
  border-radius: 1em;
  margin: 1.5em 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

:deep(.prose) hr {
  border: none;
  border-top: 2px solid #e2e8f0;
  margin: 2em 0;
}

:deep(.prose) table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
}

:deep(.prose) th,
:deep(.prose) td {
  border: 1px solid #e2e8f0;
  padding: 0.75em 1em;
  text-align: left;
}

:deep(.prose) th {
  background-color: #f8fafc;
  font-weight: 600;
  color: #1e3a8a;
}

/* Task lists from TipTap */
:deep(.prose) ul[data-type="taskList"] {
  list-style: none;
  padding-left: 0;
}

:deep(.prose) ul[data-type="taskList"] li {
  display: flex;
  align-items: flex-start;
}

:deep(.prose) ul[data-type="taskList"] li > label {
  flex: 0 0 auto;
  margin-right: 0.5em;
}

:deep(.prose) ul[data-type="taskList"] li > div {
  flex: 1 1 auto;
}

/* YouTube embeds */
:deep(.prose) iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.75em;
  margin: 1.5em 0;
}
</style>