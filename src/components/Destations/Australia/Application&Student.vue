<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
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

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Application & 
            <span class="relative inline-block text-green-500">
              Visa Process
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>

          <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-6 rounded-2xl shadow-sm mb-10">
            <ul class="space-y-4 text-slate-700 text-lg">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div><span class="font-bold text-blue-900">Major Intakes:</span> February and July (some universities also offer October).</div>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div><span class="font-bold text-blue-900">Requirements:</span> English proficiency (IELTS, PTE, TOEFL), academic transcripts, SOP, LORs, financial proof.</div>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div><span class="font-bold text-blue-900">Student Visa (Subclass 500):</span> Requires Confirmation of Enrolment (CoE), Overseas Student Health Cover (OSHC), and proof of funds for tuition + living expenses.</div>
              </li>
            </ul>
            <p class="mt-6 text-slate-600 font-medium italic border-l-4 border-green-400 pl-4 py-1">
              Our team guides students through every step of the Australia student visa process in Delhi, ensuring high success rates.
            </p>
          </div>

          <h3 class="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
            Why Choose Grace International India for Australia?
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-3">
                <span class="text-green-500 text-xl">🏛️</span>
                <span class="text-slate-700 text-sm font-medium">Direct tie-ups with leading Australian universities.</span>
              </div>
            </div>
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-3">
                <span class="text-green-500 text-xl">🛡️</span>
                <span class="text-slate-700 text-sm font-medium">End-to-end support: counselling, prep, visas, scholarships.</span>
              </div>
            </div>
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-3">
                <span class="text-green-500 text-xl">📈</span>
                <span class="text-slate-700 text-sm font-medium">Latest guidance on post-study work and PR pathways.</span>
              </div>
            </div>
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-3">
                <span class="text-green-500 text-xl">🤝</span>
                <span class="text-slate-700 text-sm font-medium">Pre-departure & on-ground support from Grace offices in Australia.</span>
              </div>
            </div>
            <div class="bg-white/50 backdrop-blur-sm border border-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
              <div class="flex items-start gap-3">
                <span class="text-green-500 text-xl">🏆</span>
                <span class="text-slate-700 text-sm font-medium">Recognized as one of the best Australia education consultants in Delhi with 20+ years of expertise.</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          class="order-1 lg:order-2 flex justify-center transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12']"
        >
          <div class="relative group w-full max-w-lg">
            <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="australia3"
              alt="Application Process"
              class="relative rounded-3xl shadow-xl w-full object-cover border-4 border-white min-h-[400px] lg:min-h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import australia3 from "@/assets/australia3.png";

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (observer) observer.disconnect();
    }
  }, { threshold: 0.1 });

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
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