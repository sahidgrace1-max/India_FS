<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-1/4 right-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <div 
          class="order-2 lg:order-1 flex items-center justify-center transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-lg lg:max-w-none">
            <div class="absolute -inset-4 bg-green-500/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="australia2"
              alt="Students studying in Australia"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[400px] lg:min-h-[700px] xl:min-h-[800px]"
            />
            
            <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4 hidden sm:flex border border-blue-50">
              <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                🇦🇺
              </div>
              <div>
                <p class="text-sm font-bold text-blue-900">Study in Australia</p>
                <p class="text-xs text-green-600 font-semibold uppercase tracking-wider">Plan Your Future</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          class="order-1 lg:order-2 flex flex-col transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Financial Planning
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 leading-tight">
            Cost of Studying in 
            <span class="relative inline-block text-green-500">
              Australia
              <span class="absolute -bottom-1 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>

          <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
            <ul class="space-y-4 mb-6">
              <li class="flex items-start text-slate-700">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-base"><span class="font-bold text-blue-900">Foundation Studies:</span> AUD <span class="font-semibold">9,000–14,000/year</span> (approx.)</span>
              </li>
              <li class="flex items-start text-slate-700">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-base"><span class="font-bold text-blue-900">Bachelor's Degree:</span> AUD <span class="font-semibold">15,000–33,000/year</span> (approx.)</span>
              </li>
              <li class="flex items-start text-slate-700">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-base"><span class="font-bold text-blue-900">Laboratory-based Degrees:</span> AUD <span class="font-semibold">14,000–35,000/year</span> (approx.)</span>
              </li>
              <li class="flex items-start text-slate-700">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-base"><span class="font-bold text-blue-900">Postgraduate & Master’s:</span> AUD <span class="font-semibold">20,000–37,000/year</span> (approx.)</span>
              </li>
            </ul>
            <p class="text-slate-600 text-sm leading-relaxed border-l-4 border-blue-200 pl-4 py-1 italic">
              International students are required to pay a tuition deposit (not more than <span class="font-semibold text-blue-800">50%</span> of the total course fees) before the visa stage, as per the ESOS Act.
            </p>
          </div>

          <h2 class="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 mt-4">
            Accommodation & 
            <span class="relative inline-block">
              Living Costs
              <span class="absolute bottom-1 left-0 w-full h-1 bg-green-400 rounded-full opacity-60"></span>
            </span>
          </h2>

          <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-6 sm:p-8 mb-8">
            <ul class="space-y-4">
              <li class="flex items-center justify-between text-slate-700 border-b border-blue-50 pb-3">
                <span class="font-bold text-blue-900 flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  Homestay / Farmstay
                </span>
                <span class="font-semibold bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-sm">AUD 110–270/wk</span>
              </li>
              <li class="flex items-center justify-between text-slate-700 border-b border-blue-50 pb-3">
                <span class="font-bold text-blue-900 flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  University Residential
                </span>
                <span class="font-semibold bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-sm">AUD 190–280/wk</span>
              </li>
              <li class="flex items-center justify-between text-slate-700 border-b border-blue-50 pb-3">
                <span class="font-bold text-blue-900 flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                  Private Hostels
                </span>
                <span class="font-semibold bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-sm">AUD 80–135/wk</span>
              </li>
              <li class="flex items-center justify-between text-slate-700">
                <span class="font-bold text-blue-900 flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  Shared Accommodation
                </span>
                <span class="font-semibold bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-sm">AUD 50–160/wk</span>
              </li>
            </ul>
          </div>

          <h2 class="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 mt-4">
            Work & 
            <span class="relative inline-block">
              Visa Regulations
              <span class="absolute bottom-1 left-0 w-full h-1 bg-green-400 rounded-full opacity-60"></span>
            </span>
          </h2>

          <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-6 sm:p-8">
            <ul class="space-y-4 mb-6">
              <li class="flex items-start text-slate-700">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span class="text-base"><span class="font-bold text-blue-900">Part-Time Work:</span> Up to <span class="font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">40 hours per fortnight</span> during semesters and full-time during scheduled breaks.</span>
              </li>
              <li class="flex items-start text-slate-700">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div class="w-full">
                  <span class="text-base font-bold text-blue-900">Post-Study Work Visa (Subclass 485):</span>
                  <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm">
                      <span class="font-semibold text-blue-800 block mb-1">Graduate Work Stream</span>
                      18 months duration
                    </div>
                    <div class="bg-blue-50/50 border border-blue-100 rounded-lg p-3 text-sm">
                      <span class="font-semibold text-blue-800 block mb-1">Post-Study Work Stream</span>
                      2 to 4 years (based on qualification)
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div class="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-4">
              <div class="text-2xl mt-1">🌟</div>
              <p class="text-slate-700 text-sm leading-relaxed">
                After gaining Australian work experience, international graduates may be eligible to apply for <span class="font-bold text-blue-900">skilled migration and PR pathways</span> under Australia’s migration framework.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import australia2 from "@/assets/australia2.png";

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