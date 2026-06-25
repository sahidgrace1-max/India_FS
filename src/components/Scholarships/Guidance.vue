<template>
  <section
    ref="sectionRef"
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        <div
          class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 lg:p-10 shadow-sm transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Our Support
          </div>
          <h2 class="text-3xl font-bold text-blue-900 mb-6">
            We <span class="relative inline-block text-green-500">Provide</span>
          </h2>
          <p class="text-green-600 font-medium mb-6">
            We provide various types of assistance some of which are:
          </p>
          <ul class="space-y-4">
            <li v-for="(item, i) in benefits" :key="i" class="flex items-start text-slate-700">
              <span class="text-green-500 mr-3 mt-1.5 shrink-0 text-xs">●</span>
              {{ item }}
            </li>
          </ul>
        </div>

        <div
          class="transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Strategy
          </div>
          <h2 class="text-3xl font-bold text-blue-900 mb-6">
            Guidance and <span class="relative inline-block">Advice</span>
          </h2>
          <div class="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
            <p>
              Attending college overseas may seem daunting owing to the cost of study, but that’s exactly why you need to find, apply for, and receive scholarships which are essential to ensure that you won’t be burdened up with huge student loan payments after graduation.
            </p>
            <p class="mt-4">
              Scholarships aren’t just an additional benefit any longer. They’re essential to bridge the gap between the increasing cost of education overseas and what you can afford. So we’re sure that you understand the bigger picture as to why scholarships have become so essential.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const benefits = [
  "Explore scholarships that cater to the student’s financial level and educational interests",
  "Alert students about new upcoming scholarships",
  "Offer information on international scholarships",
  "Provide assistance to prepare the necessary documents and apply"
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
/* No additional CSS needed beyond Tailwind */
</style>