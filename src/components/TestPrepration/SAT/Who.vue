<template>
  <div class="relative w-full overflow-hidden">
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-blue-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="closeModal"
      >
        <div class="bg-white/95 backdrop-blur-md rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-blue-50 p-6">
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div 
            class="flex justify-center transition-all duration-1000 ease-out transform order-1 lg:order-2"
            :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12']"
          >
            <div class="relative group w-full max-w-lg">
              <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="@/assets/uk2.png"
                alt="IELTS Study Desk"
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
              Exam Overview
            </div>

            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8">
              Who is it 
              <span class="relative inline-block text-green-500">
                for?
                <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
              </span>
            </h2>

            <div class="space-y-6 text-slate-700 leading-relaxed text-lg bg-white/70 backdrop-blur-sm border border-blue-100 p-8 rounded-2xl shadow-sm">
              <p>
                IELTS is the International English Language Testing System, the world's proven English language test. IELTS was one of the pioneers of four skills English language testing over 25 years ago, and continues to set the standard for English language testing today.
              </p>
              
              <div>
                <h4 class="font-bold text-blue-900 mb-2">What is the IELTS test like?</h4>
                <p>You can choose between the Academic or General Training versions of the test. All candidates do the same Listening and Speaking sections.</p>
              </div>

              <div>
                <h4 class="font-bold text-blue-900 mb-2">Level and Scores:</h4>
                <p>Multi-level. You get a score between 1 and 9. Half scores such as 6.5 are possible. Universities often demand an IELTS score of 6 or 7. They may also demand a minimum score in each of the 4 sections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section 
      ref="ctaRef" 
      class="relative py-20 px-4 bg-blue-900 overflow-hidden"
    >
      <div class="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"></div>
      
      <div 
        class="relative z-10 container mx-auto text-center transition-all duration-1000 ease-out transform"
        :class="[isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Take Your First Step Towards <span class="text-green-400">Success</span>
        </h2>
        <p class="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Enroll in your Preparation Class with Grace International
        </p>
        <button
          @click="showModal = true"
          class="px-10 py-4 bg-blue-800 text-white font-bold rounded-xl shadow-lg hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
        >
          APPLY NOW
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import EnrollmentFormIELTS from "./EnrollmentFormIELTS.vue";

export default {
  name: "IELTSWho",
  components: {
    EnrollmentFormIELTS,
  },
  setup() {
    const showModal = ref(false);
    const sectionRef = ref(null);
    const ctaRef = ref(null);
    const isVisible = ref(false);
    const isCtaVisible = ref(false);
    let observer = null;

    const closeModal = () => {
      showModal.value = false;
    };

    onMounted(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.value) isVisible.value = true;
            if (entry.target === ctaRef.value) isCtaVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

      if (sectionRef.value) observer.observe(sectionRef.value);
      if (ctaRef.value) observer.observe(ctaRef.value);
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    return {
      showModal,
      closeModal,
      sectionRef,
      ctaRef,
      isVisible,
      isCtaVisible
    };
  },
};
</script>

<style scoped>
@keyframes rotateDashed {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>