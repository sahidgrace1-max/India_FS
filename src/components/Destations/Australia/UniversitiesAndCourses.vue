<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <div 
          class="order-2 lg:order-1 flex items-center justify-center transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-lg">
            <div class="absolute -inset-4 bg-green-500/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="australia1"
              alt="Graduate Student in Australia"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[500px] lg:min-h-[800px]"
            />
          </div>
        </div>

        <div 
          class="order-1 lg:order-2 flex flex-col transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Academic Excellence
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 leading-tight">
            Australian Universities 
            <span class="relative inline-block text-green-500">
              Overview
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>
          
          <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
            <ul class="space-y-4 text-slate-700">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Australia has <span class="font-bold text-blue-900">43 universities</span>, including 2 private universities (Bond and Notre Dame).</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>International universities like <span class="font-bold text-blue-900">Carnegie Mellon</span> and <span class="font-bold text-blue-900">University College London</span> operate campuses in Adelaide.</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Australian universities maintain over <span class="font-bold text-blue-900">7,000 global agreements</span> with institutions worldwide.</span>
              </li>
            </ul>
          </div>

          <h3 class="text-2xl font-bold text-blue-900 mb-6">Global Recognition & Rankings</h3>
          <div class="grid sm:grid-cols-2 gap-4 mb-10">
            <div class="bg-blue-800 rounded-2xl p-6 text-white">
              <span class="text-3xl font-black text-green-400 block mb-1">8</span>
              <span class="text-sm font-medium">Universities in Top 100 Globally</span>
            </div>
            <div class="bg-white/70 border border-blue-100 rounded-2xl p-6 text-blue-900 shadow-sm">
              <span class="text-3xl font-black text-blue-800 block mb-1">9th</span>
              <span class="text-sm font-medium">Global University Ranking System</span>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-blue-900 mb-6">Role of Universities</h3>
          <ul class="grid sm:grid-cols-3 gap-4 mb-8">
            <li class="bg-white/70 border border-blue-100 rounded-xl p-4 text-center font-semibold text-blue-900 shadow-sm">Storing Knowledge</li>
            <li class="bg-white/70 border border-blue-100 rounded-xl p-4 text-center font-semibold text-blue-900 shadow-sm">Transferring Knowledge</li>
            <li class="bg-white/70 border border-blue-100 rounded-xl p-4 text-center font-semibold text-blue-900 shadow-sm">Research & Innovation</li>
          </ul>

          <div class="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4">
            <div class="text-3xl">🏆</div>
            <p class="text-slate-700 text-sm italic">
              Australia has produced <span class="font-bold text-blue-900">15 Nobel Prize Laureates</span> across various academic and research disciplines, supported by strong government investment in higher education.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import australia1 from "@/assets/australia1.png";

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
</style>