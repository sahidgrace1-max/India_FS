<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
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
              :src="bgImage"
              alt="Students Graduation in the UK"
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
            Academic Overview
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
            Top Universities in 
            <span class="relative inline-block text-green-500">
              the UK
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div v-for="uni in universities" :key="uni" class="bg-white/70 backdrop-blur-sm border border-blue-100 p-4 rounded-xl shadow-sm flex items-center gap-3">
              <span class="text-green-500 font-bold">#</span>
              <span class="font-bold text-blue-900 text-sm">{{ uni }}</span>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-blue-900 mb-6">Popular Courses</h3>
          <div class="flex flex-wrap gap-3 mb-10">
            <span v-for="course in courses" :key="course" class="bg-blue-50 text-blue-800 font-bold px-4 py-2 rounded-xl text-sm border border-blue-100">
              {{ course }}
            </span>
          </div>

          <h3 class="text-2xl font-bold text-blue-900 mb-6">Scholarships</h3>
          <div class="space-y-4">
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm">
              <p class="font-bold text-blue-900">Chevening Scholarships</p>
              <p class="text-slate-600 text-sm">Fully funded UK government scholarships.</p>
            </div>
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm">
              <p class="font-bold text-blue-900">GREAT Scholarships</p>
              <p class="text-slate-600 text-sm">£10,000 tuition fee support for selected UK universities.</p>
            </div>
          </div>

          <p class="mt-8 text-slate-500 text-sm italic font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
            Tip: Strong IELTS or PTE scores significantly improve admission and scholarship chances in UK universities.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/uk.png";

const universities = [
  "University of Oxford",
  "University of Cambridge",
  "Imperial College London",
  "LSE",
  "University College London (UCL)"
];

const courses = [
  "Business & Management",
  "IT & Computer Science",
  "Engineering",
  "Health & Life Sciences",
  "Law, Media & Creative Arts"
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
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}
</style>