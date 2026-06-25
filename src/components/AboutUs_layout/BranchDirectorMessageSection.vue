<template>
  <section
    ref="sectionRef"
    class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div 
        class="text-center mb-16 transition-all duration-1000 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex justify-center mb-4">
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Leadership
          </div>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-blue-900">
          Director's 
          <span class="relative inline-block text-green-500">
            Message
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div 
        class="flex flex-col lg:flex-row gap-12 items-center transition-all duration-1000 delay-300 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
      >
        <div class="w-full lg:w-2/5">
          <div class="relative group p-2 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-[2rem] shadow-sm">
            <div class="overflow-hidden rounded-[1.5rem] aspect-[4/5]">
              <img
                :src="directorData[selectedBranch].image"
                :alt="directorData[selectedBranch].name"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="absolute -bottom-6 -left-6 bg-blue-800 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <span class="text-4xl font-bold">19+</span>
              <p class="text-xs uppercase tracking-widest font-bold opacity-80">Years Experience</p>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-3/5">
          <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-8 md:p-12 rounded-[2rem] shadow-sm relative">
            <div class="text-6xl text-green-400 opacity-20 mb-6 font-serif leading-none">“</div>
            
            <p
              class="text-blue-900 text-lg md:text-xl leading-relaxed font-medium text-justify mb-8"
              v-html="directorData[selectedBranch].message"
            ></p>

            <div class="border-t border-blue-100 pt-8 mt-4">
              <h4 class="text-2xl font-bold text-blue-900">
                {{ directorData[selectedBranch].name }}
              </h4>
              <p class="text-green-600 font-bold uppercase tracking-widest text-sm mt-1">
                Director, Grace International India
              </p>
            </div>
          </div>
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

const directorData = {
  Delhi: {
    name: "Mayank Srivastava",
    image: new URL("@/assets/Dir.jpeg", import.meta.url).href,
    message: `As the Director of our India operations, it is both an honor and a privilege to support the ambitious and dynamic student community of India. At Grace International, we deeply understand the aspirations of students from Delhi, NCR, Punjab, Haryana, and neighboring regions. We are committed to turning your international education dreams into reality. Your success is not just our goal—it is our purpose.`,
  },
  Ahmedabad: {
    name: "Mayank Srivastava",
    image: new URL("@/assets/Dir.jpeg", import.meta.url).href,
    message: `As the Director of our India operations, it is both an honor and a privilege to support the ambitious and dynamic student community of India. At Grace International, we deeply understand the aspirations of students from Delhi, NCR, Punjab, Haryana, and neighboring regions. We are committed to turning your international education dreams into reality. Your success is not just our goal—it is our purpose.`,
  },
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