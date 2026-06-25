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
          class="order-2 lg:order-1 flex items-center justify-center transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-lg lg:max-w-none">
            <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="bgImage"
              alt="Students Graduation in New Zealand"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[500px] lg:min-h-[850px]"
            />
          </div>
        </div>

        <div 
          class="order-1 lg:order-2 flex flex-col transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Frequently Asked Questions
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-10 leading-tight">
            Study in 
            <span class="relative inline-block text-green-500">
              New Zealand
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
            – FAQs
          </h2>

          <div class="space-y-6">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="bg-white/70 backdrop-blur-sm border border-blue-100 p-6 rounded-2xl shadow-sm hover:border-blue-200 transition-colors"
            >
              <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-start gap-2">
                <span class="text-green-500 font-extrabold flex-shrink-0">Q{{ index + 1 }}.</span>
                {{ faq.question }}
              </h3>
              <p class="text-slate-700 leading-relaxed pl-8">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/newzealand3.png";

const faqs = [
  {
    question: "What is the cost of living in New Zealand for Indian students?",
    answer: "International students should budget around NZ$120–$200 per week for accommodation, depending on the city and type of housing. Living costs, including food, transport, and personal expenses, average NZ$15,000–$18,000 per year."
  },
  {
    question: "Can Indian students work while studying in New Zealand?",
    answer: "Yes, students can work up to 20 hours per week during term time and full-time during holidays. Part-time work helps cover living costs and gain practical experience."
  },
  {
    question: "Is English language proficiency required?",
    answer: "Yes. Most New Zealand institutions require IELTS, TOEFL, or PTE scores. Some institutions may accept prior English-medium education in place of a test."
  },
  {
    question: "What are the main intakes in New Zealand?",
    answer: "The main intakes are February and July. Some universities also offer an October intake for selected programs."
  },
  {
    question: "Can Indian students apply for post-study work visas?",
    answer: "Yes. Graduates can apply for post-study work visas valid for 1–3 years depending on their qualification level, providing opportunities to gain work experience in New Zealand."
  }
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