<template>
  <section 
    ref="sectionRef"
    class="relative min-h-[60vh] flex items-center justify-center overflow-hidden font-poppins py-20"
  >
    <div class="absolute inset-0 z-0 bg-blue-900">
      <div class="absolute inset-0 bg-[url('@/assets/image1.png')] bg-cover bg-center opacity-30"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
      
      <div class="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-3xl"></div>
    </div>

    <div 
      class="relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ease-out transform"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
    >
      <div class="flex items-center justify-center text-green-400 font-bold uppercase tracking-widest text-xs mb-6">
        <span class="w-8 h-1 bg-green-400 rounded-full mr-3"></span>
        Financial Support
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Available 
        <span class="relative inline-block text-green-400">
          Scholarships
          <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
        </span>
      </h1>

      <p class="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
        We, at Grace International, want to help you get the right scholarship for studying abroad with a variety of discounts and scholarship options. Don’t let study abroad costs get you down.
      </p>

      <button
        class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-800 rounded-xl shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:bg-blue-900 transition-all duration-200"
      >
        View Available Scholarships
      </button>
    </div>

    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-10">
      <svg class="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-white"></path>
      </svg>
    </div>
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
/* No specific custom CSS needed as Tailwind covers design system */
</style>