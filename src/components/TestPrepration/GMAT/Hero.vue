<template>
  <section 
    ref="sectionRef" 
    class="relative min-h-[400px] flex items-center justify-center overflow-hidden font-poppins py-20"
  >
    <div 
      class="absolute inset-0 z-0 bg-cover bg-center" 
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="absolute inset-0 bg-blue-900/85"></div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl"></div>
    </div>

    <div 
      class="relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ease-out transform"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
    >
      <div class="flex items-center justify-center text-green-400 font-bold uppercase tracking-widest text-xs mb-6">
        <span class="w-8 h-1 bg-green-400 rounded-full mr-3"></span>
        Expert Coaching
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
        Master Your 
        <span class="relative inline-block text-green-400">
          Preparation
          <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
        </span>
      </h1>

      <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
        Comprehensive coaching and expert guidance to help you ace your entrance exams and secure your dream university placement.
      </p>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/20 to-green-600/20 transform skew-y-1"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/image1.png";

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
/* Scoped styles are kept minimal as Tailwind handles design system requirements */
</style>