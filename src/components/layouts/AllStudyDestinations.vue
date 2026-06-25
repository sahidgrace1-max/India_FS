<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl transform translate-x-1/4"></div>
      <div class="absolute top-1/3 left-1/2 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed transform -translate-x-1/2"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 w-full flex flex-col items-center">
      <div
        class="text-center mb-16 transition-all duration-1000 ease-out transform px-4"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Explore The World
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Top Study 
          <span class="relative inline-block">
            Destinations
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
        
        <p class="text-slate-600 text-lg font-medium max-w-2xl mx-auto">
          Let us help you find the best suited college in your desired location to help you build your career!
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-7xl px-4 justify-items-center">
        <div
          v-for="(dest, index) in destinations"
          :key="dest.name"
          class="w-full max-w-sm transition-all duration-700 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <router-link
            :to="dest.path"
            class="relative group cursor-pointer block overflow-hidden rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-[340px] bg-white/70 backdrop-blur-sm"
          >
            <img
              :src="dest.image"
              :alt="dest.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            <div class="absolute inset-0 flex flex-col items-center justify-end pb-10 transition-transform duration-300 group-hover:translate-y-[-10px]">
              <span class="text-white text-2xl font-bold tracking-wide text-center px-4 drop-shadow-md mb-2">
                {{ dest.name }}
              </span>
              
              <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-green-400 font-semibold text-sm uppercase tracking-wider">
                Explore
                <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import nzImg from "@/assets/newzealand.png";
import ausImg from "@/assets/aus.jpeg";
import usaImg from "@/assets/usa.jpeg";
import ukImg from "@/assets/uk.jpeg";
import canadaImg from "@/assets/canada.webp";

const destinations = [
  { name: "New Zealand", path: "/destinations/newzealand", image: nzImg },
  { name: "Australia", path: "/destinations/australia", image: ausImg },
  { name: "USA", path: "/destinations/usa", image: usaImg },
  { name: "UK", path: "/destinations/uk", image: ukImg },
  { name: "Canada", path: "/destinations/canada", image: canadaImg },
];

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
  from {
    transform: translate(-50%, 0) rotate(0deg);
  }
  to {
    transform: translate(-50%, 0) rotate(360deg);
  }
}

.animate-rotate-dashed {
  animation: rotateDashed 35s linear infinite;
}
</style>