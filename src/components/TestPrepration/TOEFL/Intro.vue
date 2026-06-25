<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
      <div class="absolute top-1/4 left-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div 
          class="flex justify-center transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-lg">
            <div class="absolute -inset-4 bg-green-500/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src="@/assets/toefl.png"
              alt="TOEFL Study"
              class="relative rounded-3xl shadow-xl w-full object-cover border-4 border-white"
              style="min-height: 400px; max-height: 500px"
            />
          </div>
        </div>

        <div 
          class="flex flex-col justify-start transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Exam Overview
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            What is 
            <span class="relative inline-block text-green-500">
              TOEFL?
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>

          <div class="space-y-8">
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-6 rounded-2xl shadow-sm">
              <p class="text-slate-700 leading-relaxed">
                The TOEFL iBT® test, administered via the Internet, is an important part of your journey to study in an English-speaking country. It measures your ability to use and understand English at the university level, combining listening, reading, speaking, and writing skills to perform academic tasks.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-6 rounded-2xl shadow-sm">
                <h4 class="font-bold text-blue-900 mb-3 underline decoration-green-400 underline-offset-4">Who is it for?</h4>
                <ul class="text-slate-600 text-sm space-y-2">
                  <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Higher education students</li>
                  <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Language program seekers</li>
                  <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Scholarship candidates</li>
                  <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Visa applicants</li>
                </ul>
              </div>

              <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-6 rounded-2xl shadow-sm">
                <h4 class="font-bold text-blue-900 mb-3 underline decoration-green-400 underline-offset-4">Why TOEFL?</h4>
                <ul class="text-slate-600 text-sm space-y-2">
                  <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Stand out with scores</li>
                  <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Fair speaking assessment</li>
                  <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Measures academic skills</li>
                  <li class="flex items-center"><span class="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Convenient options</li>
                </ul>
              </div>
            </div>
          </div>
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
@keyframes rotateDashed {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}
</style>