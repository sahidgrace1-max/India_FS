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
          ref="imageRef"
          class="order-2 lg:order-1 flex items-center justify-center transition-all duration-1000 ease-out transform"
          :class="[imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-lg lg:max-w-none">
            <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="faqImage"
              alt="Students Graduation in the UK"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[500px] lg:min-h-[750px]"
            />
          </div>
        </div>

        <div 
          ref="contentRef"
          class="order-1 lg:order-2 flex flex-col transition-all duration-1000 ease-out delay-300 transform"
          :class="[contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Frequently Asked Questions
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-10 leading-tight">
            Study in the 
            <span class="relative inline-block text-green-500">
              UK
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
import faqImage from "@/assets/FAQ.png";

const faqs = [
  {
    question: "What is the cost of living in the UK for Indian students?",
    answer: "The UK student visa requires Indian students to show living expenses of £1,265 per month in London (up to a maximum of £11,385 for 9 months). Costs may be lower outside London."
  },
  {
    question: "Can Indian students get PR in the UK?",
    answer: "Yes. After completing studies, students can work under the Graduate Route visa and later apply for Skilled Worker visas, which can lead to permanent settlement."
  },
  {
    question: "Is English proficiency mandatory to study in the UK?",
    answer: "Most UK universities require IELTS or an equivalent English language test, though some institutions may waive it based on prior education."
  },
  {
    question: "Can Indian students work while studying in the UK?",
    answer: "Yes, students can work up to 20 hours per week during term time and full-time during vacations."
  },
  {
    question: "Which intake is best for Indian students?",
    answer: "The September intake is the main intake in the UK, followed by January. Some universities also offer May intakes for selected programs."
  }
];

const imageRef = ref(null);
const contentRef = ref(null);

const imageVisible = ref(false);
const contentVisible = ref(false);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === imageRef.value) imageVisible.value = true;
        if (entry.target === contentRef.value) contentVisible.value = true;
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  if (imageRef.value) observer.observe(imageRef.value);
  if (contentRef.value) observer.observe(contentRef.value);
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