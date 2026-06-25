<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
      <div class="absolute top-1/4 left-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="text-center mb-16 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Financial Aid
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Scholarship 
          <span class="relative inline-block">
            Types
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        <div
          v-for="(type, idx) in scholarshipTypes"
          :key="type.title"
          ref="cards"
          :data-index="idx"
          class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 shadow-sm transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 group"
          :class="[isVisibleStates[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          :style="{ transitionDelay: `${idx * 100}ms` }"
        >
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
            <svg class="w-6 h-6 text-blue-800 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition-colors">{{ type.title }}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            {{ type.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scholarshipTypes = [
  { title: "Merit-based", desc: "These are based on the student’s academic qualifications, grades, and certificates achieved during their previous studies." },
  { title: "Student-specific", desc: "These are based on individual characteristics like gender, race, family background, religion, or other demographic-specific factors." },
  { title: "Destination-specific", desc: "These scholarships are provided by a country to international students who are planning for study abroad programs within that country." },
  { title: "Program-specific", desc: "Provided by individual study abroad programs, often based on a combination of academic excellence and personal achievements." },
  { title: "Subject-specific", desc: "These scholarships are awarded by institutions and programs to students focusing on a particular field of study or major." }
];

const sectionRef = ref(null);
const isVisible = ref(false);
const isVisibleStates = ref(Array(scholarshipTypes.length).fill(false));
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === sectionRef.value) {
          isVisible.value = true;
        } else {
          const index = entry.target.dataset.index;
          if (index !== undefined) {
            isVisibleStates.value[index] = true;
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (sectionRef.value) observer.observe(sectionRef.value);
  const cards = document.querySelectorAll('[data-index]');
  cards.forEach(card => observer.observe(card));
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