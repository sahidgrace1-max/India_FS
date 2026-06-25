<template>
  <div 
    ref="sectionRef"
    class="relative overflow-hidden bg-white/70 backdrop-blur-sm border border-blue-100 rounded-[2rem] shadow-sm p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center min-h-[60vh] font-poppins w-full transition-all duration-1000 ease-out transform"
    :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
  >
    <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
    <div class="absolute top-1/4 left-1/4 w-48 h-48 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed pointer-events-none hidden md:block"></div>

    <div class="relative z-10 flex flex-col items-center text-center">
      <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-8">
        <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
        Overview
        <span class="w-8 h-1 bg-green-600 rounded-full ml-3"></span>
      </div>

      <div class="w-24 h-24 bg-gradient-to-br from-blue-50 to-white rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-blue-100 relative group">
        <div class="absolute inset-0 bg-blue-800/5 rounded-3xl group-hover:scale-110 transition-transform duration-500"></div>
        <svg class="w-12 h-12 text-blue-800 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      </div>

      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
        Welcome to the <br/>
        <span class="relative inline-block text-green-500 mt-2">
          Admin Dashboard
          <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
        </span>
      </h2>
      
      <p class="text-slate-600 text-lg max-w-lg mt-6 leading-relaxed">
        Select a category from the sidebar to manage your database records, update website content, and oversee student inquiries.
      </p>

      <div class="absolute -bottom-12 -right-12 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-20"></div>
      <div class="absolute top-10 -left-10 w-4 h-4 bg-blue-800 rounded-full animate-ping opacity-20" style="animation-delay: 1s;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
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
@keyframes rotateDashed {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}
</style>