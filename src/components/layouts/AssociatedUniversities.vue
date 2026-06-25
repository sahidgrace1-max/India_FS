<template>
  <section ref="sectionRef" class="relative w-full py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-20 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="text-center mb-16 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Global Network
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Associated 
          <span class="relative inline-block">
            Universities
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div 
        class="flex flex-col items-center w-full transition-all duration-1000 ease-out delay-200 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
      >
        <div class="flex items-center justify-center w-full gap-2 sm:gap-4">
          <button 
            @click="prevSlide" 
            class="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-800 flex items-center justify-center shadow-md hover:bg-blue-800 hover:text-white hover:shadow-lg transition-all duration-300 hover:scale-105 z-10"
            aria-label="Previous University"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div class="flex gap-4 sm:gap-6 justify-center overflow-hidden flex-1 py-4 px-2">
            <div
              v-for="university in visibleUniversities"
              :key="university.name"
              class="flex flex-col w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[200px]"
            >
              <a :href="university.website" target="_blank" class="block group h-full">
                <div class="h-full bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-blue-200">
                  <div class="relative h-32 sm:h-36 md:h-40 w-full overflow-hidden bg-slate-100">
                    <img
                      :src="university.photo"
                      :alt="university.name"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div class="p-4 flex-grow flex items-center justify-center text-center bg-white">
                    <span class="font-bold text-sm sm:text-base text-blue-900 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                      {{ university.name }}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <button 
            @click="nextSlide" 
            class="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-800 flex items-center justify-center shadow-md hover:bg-blue-800 hover:text-white hover:shadow-lg transition-all duration-300 hover:scale-105 z-10"
            aria-label="Next University"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import albertus from "@/assets/Albertus Magnus College.jpg";
import capilano from "@/assets/Capilano University (Public).png";
import stclair from "@/assets/St Clair College.png";
import uniTasmania from "@/assets/Uni-Tamania.jpeg";
import latrobe from "@/assets/La Trobe University.jpg";
import murdoch from "@/assets/MurdochUniversity.jpg";

const universities = [
  {
    name: "Albertus Magnus College",
    photo: albertus,
    website: "https://www.albertus.edu/",
  },
  {
    name: "Capilano University",
    photo: capilano,
    website: "https://www.capilanou.ca/",
  },
  {
    name: "St Clair College",
    photo: stclair,
    website: "https://www.stclaircollege.ca/",
  },
  {
    name: "La Trobe University",
    photo: latrobe,
    website: "https://www.latrobe.edu.au/",
  },
  {
    name: "Murdoch University",
    photo: murdoch,
    website: "https://www.murdoch.edu.au/",
  },
  {
    name: "University Of Tasmania",
    photo: uniTasmania,
    website: "https://www.utas.edu.au/",
  },
];

const currentIndex = ref(0);
let intervalId = null;

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const visibleCount = computed(() => {
  if (typeof window === "undefined") return 6;
  if (window.innerWidth < 640) return 2; // Mobile: 2 items
  if (window.innerWidth < 1024) return 3; // Tablet: 3 items
  if (window.innerWidth < 1280) return 4; // Small Desktop: 4 items
  return 5; // Desktop: 5 items for better spacing with cards
});

const visibleUniversities = computed(() => {
  const result = [];
  for (let i = 0; i < visibleCount.value; i++) {
    result.push(universities[(currentIndex.value + i) % universities.length]);
  }
  return result;
});

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % universities.length;
}

function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + universities.length) % universities.length;
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3500); // Slightly slower for better readability

  // Intersection Observer for animation
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
  clearInterval(intervalId);
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
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