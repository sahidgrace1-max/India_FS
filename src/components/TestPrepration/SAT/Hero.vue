<template>
  <section
    ref="sectionRef"
    class="relative min-h-[400px] flex items-center justify-center overflow-hidden font-poppins py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-1/4 left-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div
      class="relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ease-out transform"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
    >
      <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-xs mb-6">
        <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
        Exam Preparation
      </div>

      <h1 class="text-4xl md:text-6xl font-bold text-blue-900 mb-6 tracking-tight">
        IELTS Test 
        <span class="relative inline-block text-blue-900">
          Preparation
          <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
        </span>
      </h1>
      
      <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
        Achieve your target score with Grace International's expert IELTS coaching and tailored study resources.
      </p>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform skew-y-1 z-10"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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
    threshold: 0.2,
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