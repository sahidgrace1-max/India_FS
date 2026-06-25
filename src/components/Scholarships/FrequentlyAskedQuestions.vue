<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-1/3 right-1/4 w-72 h-72 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        <div 
          class="w-full lg:w-[400px] bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-8 lg:p-10 transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Reach Out
          </div>
          <h2 class="text-3xl font-bold text-blue-900 mb-6">Contact for <span class="text-green-500">Scholarship</span></h2>
          <p class="mb-8 text-slate-600 font-medium">
            We are open Monday – Saturday, 9am – 7pm.
          </p>
          
          <div class="space-y-6">
            <div class="group">
              <strong class="block text-blue-900 text-sm mb-1 uppercase tracking-wider">Head Office</strong>
              <div class="text-slate-600 text-sm leading-relaxed">
                Office No. 505, 6th Floor, Westend Mall,<br />Near District Centre, Janak Puri (West),<br />New Delhi, 110058, India
              </div>
            </div>
            <div>
              <strong class="block text-blue-900 text-sm mb-1 uppercase tracking-wider">Phone</strong>
              <a href="tel:8750040975" class="text-slate-600 text-sm hover:text-green-600 transition-colors font-medium">8750040975</a>
            </div>
            <div>
              <strong class="block text-blue-900 text-sm mb-1 uppercase tracking-wider">Email</strong>
              <a href="mailto:enquiry.in@graceintlgroup.com" class="text-slate-600 text-sm hover:text-green-600 transition-colors font-medium break-all">enquiry.in@graceintlgroup.com</a>
            </div>
          </div>
        </div>

        <div 
          class="flex-1 transition-all duration-1000 ease-out delay-200 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <h2 class="text-3xl font-bold text-blue-900 mb-8">Frequently Asked <span class="relative inline-block text-green-500">Questions</span></h2>
          <div class="flex flex-col gap-4">
            <div
              v-for="(faq, idx) in faqs"
              :key="idx"
              class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-md cursor-pointer group"
              @click="toggle(idx)"
            >
              <div class="flex justify-between items-center text-blue-900 font-bold text-lg group-hover:text-green-600 transition-colors">
                <span>{{ faq.question }}</span>
                <span class="text-2xl font-bold transition-transform duration-300" :class="{'rotate-45': faq.open}">+</span>
              </div>
              <transition name="fade-slide">
                <div v-if="faq.open" class="mt-4 text-slate-600 font-medium text-base border-t border-blue-50 pt-4">
                  {{ faq.answer }}
                </div>
              </transition>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";

const faqs = reactive([
  {
    question: "What Is A Study Abroad Scholarship?",
    answer: "A study abroad scholarship is financial aid awarded to students to help cover the costs of studying in another country.",
    open: false,
  },
  {
    question: "How Does Grace International Help With Scholarships?",
    answer: "Grace International assists students by providing guidance, resources, and support throughout the scholarship application process.",
    open: false,
  },
  {
    question: "What Are The Benefits Of A Scholarship?",
    answer: "Benefits include financial support, recognition of academic merit, and enhanced educational opportunities.",
    open: false,
  },
  {
    question: "How Do Students Check Eligibility?",
    answer: "Eligibility criteria vary by scholarship, but generally include academic achievement, extracurricular involvement, and financial need.",
    open: false,
  },
]);

function toggle(idx) {
  faqs[idx].open = !faqs[idx].open;
}

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

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>