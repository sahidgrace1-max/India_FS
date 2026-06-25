<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute top-1/3 left-1/2 w-72 h-72 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed transform -translate-x-1/2"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="text-center mb-16 transition-all duration-1000 ease-out transform"
        :class="[isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          What We Offer
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Our Core 
          <span class="relative inline-block">
            Services
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center relative z-10">
        
        <div
          ref="card1"
          data-index="0"
          class="w-full max-w-sm flex flex-col bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-6 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 group"
          :class="[isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          style="transition-delay: 0ms;"
        >
          <div class="overflow-hidden rounded-xl mb-6 bg-slate-100 relative">
            <img
              src="@/assets/freecounselling.png"
              alt="Free Counseling"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-3 text-center group-hover:text-blue-700 transition-colors">
            Free Counseling
          </h3>
          <div class="text-slate-600 text-sm leading-relaxed text-center">
            <p class="mb-2 font-medium">Dreaming to Study Abroad? Start Here —</p>
            <p>
              Get expert guidance for
              <span class="font-semibold text-blue-800 block mt-1">Australia | UK | Canada | USA | New Zealand | Europe</span>
            </p>
          </div>
        </div>

        <div
          ref="card2"
          data-index="1"
          class="w-full max-w-sm flex flex-col bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-6 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 group"
          :class="[isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          style="transition-delay: 150ms;"
        >
          <div class="overflow-hidden rounded-xl mb-6 bg-slate-100 relative">
            <img
              src="@/assets/profileassessment.png"
              alt="Free Profile Assessment"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-3 text-center group-hover:text-blue-700 transition-colors">
            Profile Assessment
          </h3>
          <div class="text-slate-600 text-sm leading-relaxed text-center">
            <p class="mb-2">
              Your career deserves the <span class="font-semibold text-blue-800">right direction.</span>
            </p>
            <p>
              Get a <span class="font-semibold text-green-600">FREE Study Abroad Profile Assessment</span> from experts at Grace International and discover your best options based on your education, budget & goals.
            </p>
          </div>
        </div>

        <div
          ref="card3"
          data-index="2"
          class="w-full max-w-sm flex flex-col bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-6 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 group"
          :class="[isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          style="transition-delay: 300ms;"
        >
          <div class="overflow-hidden rounded-xl mb-6 bg-slate-100 relative">
            <img
              src="@/assets/freevisaprocessing.png"
              alt="Free Visa Processing"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-3 text-center group-hover:text-blue-700 transition-colors">
            Visa Processing
          </h3>
          <div class="text-slate-600 text-sm leading-relaxed text-center">
            <p class="mb-2">
              Secure your student visa with expert guidance and <span class="font-semibold text-green-600">zero processing charges</span>.
            </p>
            <p class="font-medium text-blue-800">
              Trusted by thousands of students globally.
            </p>
          </div>
        </div>

        <div
          ref="card4"
          data-index="3"
          class="w-full max-w-sm flex flex-col bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-6 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 group"
          :class="[isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          style="transition-delay: 450ms;"
        >
          <div class="overflow-hidden rounded-xl mb-6 bg-slate-100 relative">
            <img
              src="@/assets/noservicecharge.png"
              alt="No Services Charge"
              class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 class="text-xl font-bold text-blue-900 mb-3 text-center group-hover:text-blue-700 transition-colors">
            No Service Charge
          </h3>
          <div class="text-slate-600 text-sm leading-relaxed text-center">
            <p>
              At Grace International, we proudly operate on a <span class="font-semibold text-green-600">No Service Charge</span> policy for our core services. We provide end-to-end support for your international education journey.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sectionRef = ref(null);
const isHeaderVisible = ref(false);

const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const isVisible = ref([false, false, false, false]);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === sectionRef.value) {
          isHeaderVisible.value = true;
        } else {
          const index = entry.target.dataset.index;
          if (index !== undefined) {
            isVisible.value[index] = true;
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  if (sectionRef.value) observer.observe(sectionRef.value);
  if (card1.value) observer.observe(card1.value);
  if (card2.value) observer.observe(card2.value);
  if (card3.value) observer.observe(card3.value);
  if (card4.value) observer.observe(card4.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
@keyframes rotateDashed {
  from {
    transform: translate(-50%, 0) rotate(0deg);
  }
  to {
    transform: translate(-50%, 0) rotate(360deg);
  }
}

.animate-rotate-dashed {
  animation: rotateDashed 35s linear infinite;
}
</style>