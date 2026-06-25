<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 left-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/4"></div>
      
      <div class="absolute top-1/4 left-10 w-48 h-48 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed"></div>
      <div class="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-40"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div
        class="text-center mb-16 transition-all duration-1000 ease-out transform w-full"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Expert Coaching
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Test 
          <span class="relative inline-block">
            Preparation
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl justify-items-center">
        <div
          v-for="(test, index) in testPrograms"
          :key="test.name"
          @click="test.action"
          class="w-full flex justify-center transition-all duration-700 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="group relative w-full h-40 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <span class="relative z-10 text-3xl sm:text-4xl font-extrabold text-blue-900 group-hover:text-blue-800 transition-colors duration-300 drop-shadow-sm">
              {{ test.name }}
            </span>
            
            <div class="relative z-10 mt-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center text-xs sm:text-sm font-bold text-green-600 uppercase tracking-wider">
              Explore
              <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>

            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToIELTS = () => {
  router.push({ name: "IELTSPreparation" });
};
const goToPTE = () => {
  router.push({ name: "PTEPreparation" });
};
const goToTOEFL = () => {
  router.push({ name: "TOEFLPreparation" });
};
const goToGMAT = () => {
  router.push({ name: "GMATPreparation" });
};

const testPrograms = [
  { name: "IELTS", action: goToIELTS },
  { name: "PTE", action: goToPTE },
  { name: "TOEFL", action: goToTOEFL },
  { name: "GMAT", action: goToGMAT },
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