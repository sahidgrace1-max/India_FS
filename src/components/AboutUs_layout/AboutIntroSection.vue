<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
      >
        <div class="w-full lg:w-2/5 flex justify-center">
          <div class="relative bg-white/70 backdrop-blur-sm border border-blue-100 p-8 rounded-[2rem] shadow-sm">
            <img
              src="@/assets/G.png"
              class="w-64 h-auto object-contain"
              alt="Grace International"
            />
            <div class="absolute -bottom-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        <div class="w-full lg:w-3/5">
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Office Profile
          </div>

          <h1 class="text-3xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
            Grace International 
            <span class="relative inline-block text-green-500">
              {{ selectedBranch }}
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h1>

          <div 
            class="text-slate-700 text-base md:text-lg leading-relaxed bg-white/50 backdrop-blur-sm border border-blue-50 p-8 rounded-3xl shadow-sm"
            v-html="branchContent[selectedBranch]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();
const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const branchContent = {
  Delhi: `Established in 2006, Grace International has been a leading and trusted educational service provider, formed for the sole purpose of providing comprehensive solutions to students planning to pursue higher education from reputed universities and colleges in Australia, New Zealand, the USA, UK, Canada and many more countries.
    <br /><br />
    Our Delhi office, strategically located in the heart of India's capital, serves as the gateway for North Indian students aspiring to study abroad. With over 25,000 students recruited worldwide, Grace International Delhi is synonymous with reliability, promptness, and unwavering commitment towards students who aspire to pursue education and gain invaluable experience while studying abroad.
    <br /><br />
    Our qualified and driven team in Delhi emphasizes providing genuine and realistic solutions to our students, understanding the unique cultural and educational background of North Indian students.`,

  Ahmedabad: `Established in 2006, Grace International has been a leading and trusted educational service provider, formed for the sole purpose of providing comprehensive solutions to students planning to pursue higher education from reputed universities and colleges in Australia, New Zealand, the USA, UK, Canada and many more countries.
    <br /><br />
    Our Ahmedabad office, nestled in the intellectual capital of Eastern India, serves as the trusted partner for Bengali students aspiring to study abroad. With over 25,000 students recruited worldwide, Grace International Ahmedabad is synonymous with academic excellence, cultural understanding, and unwavering commitment towards students who aspire to pursue education and gain invaluable experience while studying abroad.
    <br /><br />
    Our qualified and driven team in Ahmedabad emphasizes providing genuine and realistic solutions to our students, respecting the rich academic heritage and cultural values of Eastern Indian students.`,
};

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

<style scoped></style>