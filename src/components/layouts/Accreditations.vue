<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-40"></div>
      <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-green-500 rounded-full opacity-60"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="text-center mb-12 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Trust & Recognition
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Global 
          <span class="relative inline-block">
            Accreditations
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div 
        class="flex justify-center max-w-6xl mx-auto transition-all duration-1000 ease-out delay-200 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95']"
      >
        <div class="w-full bg-white/70 backdrop-blur-sm border border-blue-100 rounded-3xl shadow-sm p-6 sm:p-8 md:p-12 hover:shadow-lg hover:border-blue-200 transition-all duration-500 group">
          <img
            src="@/assets/long1.png"
            alt="Accreditations"
            class="h-24 sm:h-32 md:h-36 lg:h-40 w-full object-contain filter drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </div>
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
/* No extra custom CSS required; everything handled by Tailwind */
</style>