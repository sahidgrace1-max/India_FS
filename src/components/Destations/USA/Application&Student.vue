<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute top-1/4 right-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <div 
          class="order-2 lg:order-1 flex flex-col justify-start transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Process & Support
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
            Application & Student 
            <span class="relative inline-block text-green-500">
              Visa Process
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>

          <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-6 sm:p-8 rounded-2xl shadow-sm mb-10">
            <ul class="space-y-4 text-slate-700 text-lg">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div><span class="font-bold text-blue-900">Major Intakes:</span> Fall (August/September) and Spring (January), some offer Summer (May/June).</div>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div><span class="font-bold text-blue-900">Requirements:</span> TOEFL/IELTS, GRE/GMAT (if required), transcripts, SOP, LORs, and financial proof.</div>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div><span class="font-bold text-blue-900">Student Visa (F-1):</span> Requires Form I-20, proof of funds, SEVIS fee, and a US visa interview.</div>
              </li>
            </ul>
            <p class="mt-6 text-slate-600 font-medium italic border-l-4 border-green-400 pl-4 py-1">
              Our team guides students through every step of the US student visa process, ensuring smooth application and high success rates.
            </p>
          </div>

          <h3 class="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
            Why Choose 
            <span class="text-green-500 underline decoration-green-400 underline-offset-4">Grace International?</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm flex items-start gap-3">
              <span class="text-green-500 text-xl">🏛️</span>
              <span class="text-slate-700 text-sm font-medium">Direct tie-ups with leading US universities.</span>
            </div>
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm flex items-start gap-3">
              <span class="text-green-500 text-xl">🛡️</span>
              <span class="text-slate-700 text-sm font-medium">End-to-end: applications, visas, scholarships.</span>
            </div>
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm flex items-start gap-3">
              <span class="text-green-500 text-xl">📈</span>
              <span class="text-slate-700 text-sm font-medium">Latest guidance on OPT and H-1B pathways.</span>
            </div>
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm flex items-start gap-3">
              <span class="text-green-500 text-xl">🤝</span>
              <span class="text-slate-700 text-sm font-medium">On-ground support from Grace offices in the USA.</span>
            </div>
          </div>
        </div>

        <div 
          class="order-1 lg:order-2 flex justify-center transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12']"
        >
          <div class="relative group w-full max-w-lg lg:max-w-none">
            <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="bgImage"
              alt="US Application Process"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[500px] lg:min-h-[800px]"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/usa4.png";

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