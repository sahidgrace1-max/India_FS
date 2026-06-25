<template>
  <div class="relative w-full overflow-hidden">
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-blue-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-blue-50">
          <button
            @click="closeModal"
            class="absolute top-6 right-6 text-slate-400 hover:text-blue-900 z-10 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <EnrollmentFormIELTS @close="closeModal" />
        </div>
      </div>
    </transition>

    <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div 
            class="flex justify-center transition-all duration-1000 ease-out transform order-1 lg:order-2"
            :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12']"
          >
            <div class="relative group w-full max-w-lg">
              <div class="absolute -inset-4 bg-green-500/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="@/assets/uk2.png"
                alt="GMAT Study Desk"
                class="relative rounded-3xl shadow-xl w-full object-cover border-4 border-white"
                style="min-height: 400px; max-height: 500px"
              />
            </div>
          </div>

          <div 
            class="flex flex-col justify-start transition-all duration-1000 ease-out delay-300 transform order-2 lg:order-1"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          >
            <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
              <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
              Exam Insights
            </div>
            
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8">
              Who is it 
              <span class="relative inline-block text-green-500">
                for?
                <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
              </span>
            </h2>

            <div class="space-y-6 text-slate-700 leading-relaxed text-lg">
              <p>
                The GMAT (Graduate Management Admission Test) is intended for students applying to MBA programs and other graduate management degrees. Business schools worldwide use GMAT scores to evaluate applicants' readiness for advanced study in mathematics, analytical writing, and verbal reasoning.
              </p>
              
              <div>
                <h4 class="font-bold text-blue-900 mb-2">What is the GMAT test like?</h4>
                <p>The GMAT consists of three main sections: Analytical Writing Assessment, Verbal Ability, and Quantitative Reasoning. It is primarily computer-based, though paper-based versions may be offered in areas with limited computer access.</p>
              </div>

              <div>
                <h4 class="font-bold text-blue-900 mb-2">Level and Scores:</h4>
                <p>Scores range from 200 to 800. Exam scores are valid for five years. Business schools typically use these scores to compare candidates and determine admission eligibility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-20 px-4 bg-blue-900 overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 container mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Take Your First Step Towards <span class="text-green-400">Success</span>
        </h2>
        <p class="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Enroll in your GMAT Preparation Class with Grace International and achieve your academic dreams.
        </p>
        <button
          @click="showModal = true"
          class="px-10 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-700 hover:-translate-y-0.5 transition-all duration-300"
        >
          APPLY NOW
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import EnrollmentFormIELTS from "./EnrollmentFormIELTS.vue";

const showModal = ref(false);
const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const closeModal = () => {
  showModal.value = false;
};

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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>