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
          class="order-1 lg:order-2 flex flex-col justify-start transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Frequently Asked Questions
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-10 leading-tight">
            Study in the 
            <span class="relative inline-block text-green-500">
              USA
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

        <div 
          class="order-2 lg:order-1 flex items-center justify-center transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-lg">
            <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="faqImage"
              alt="Students Graduation in the USA"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[500px]"
            />
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
    question: "What is the cost of living in the USA for Indian students?",
    answer: "The cost of studying and living varies by university, but on average it is around US$36,000–60,000 per year, including tuition and living expenses."
  },
  {
    question: "Can Indian students get PR in the USA?",
    answer: "The USA does not have direct PR for students. Indian students can work on OPT (Optional Practical Training) after graduation and later apply for H-1B or other work visas, which may lead to permanent residency."
  },
  {
    question: "Is English proficiency mandatory for the USA?",
    answer: "Yes, an English proficiency test like TOEFL or IELTS is required for admission to US universities."
  },
  {
    question: "Can Indian students work while studying in the USA?",
    answer: "Yes, students on an F-1 visa can work on-campus up to 20 hours per week during semesters and full-time during breaks. Off-campus work requires special authorization."
  },
  {
    question: "Which intake is best for Indian students to study in the USA?",
    answer: "The Fall intake (August/September) is the main intake, followed by Spring (January). Some universities also offer Summer intakes (May/June) for select programs."
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