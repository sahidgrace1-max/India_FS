<template>
  <section
    ref="sectionRef"
    class="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-[128px]"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[128px]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div 
        class="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex justify-center mb-4">
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Why Grace
          </div>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
          Why Choose Grace International 
          <span class="text-green-500 underline decoration-green-400 underline-offset-8">{{ selectedBranch }}</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(advantage, index) in advantages[selectedBranch]"
          :key="advantage.title"
          class="bg-white/70 backdrop-blur-sm border border-blue-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
            <i :class="`${advantage.icon} text-2xl text-blue-800 group-hover:text-white transition-colors`"></i>
          </div>
          <h5 class="font-bold text-blue-900 text-lg mb-3">{{ advantage.title }}</h5>
          <p class="text-slate-600 text-sm leading-relaxed">
            {{ advantage.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-800/20 to-transparent"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();
const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const advantages = {
  Delhi: [
    {
      icon: "fas fa-subway",
      title: "Metro Connectivity",
      description: "Prime Connaught Place location with direct metro access from all NCR regions",
    },
    {
      icon: "fas fa-university",
      title: "University Network",
      description: "Strong partnerships with Delhi University, JNU, and other premier institutions",
    },
    {
      icon: "fas fa-language",
      title: "Local Language Support",
      description: "Counseling available in Hindi, English, and Punjabi languages",
    },
    {
      icon: "fas fa-handshake",
      title: "Government Relations",
      description: "Strong connections with Australian Embassy and High Commission",
    },
  ],

  Ahmedabad: [
    {
      icon: "fas fa-book",
      title: "Academic Heritage",
      description: "Serving the educational legacy of Ahmedabad with deep understanding of local students",
    },
    {
      icon: "fas fa-train",
      title: "Central Location",
      description: "Easy accessibility from all parts of Ahmedabad and Eastern India",
    },
    {
      icon: "fas fa-comments",
      title: "Language Support",
      description: "Counseling available in Bengali, Hindi, and English languages",
    },
    {
      icon: "fas fa-certificate",
      title: "Proven Track Record",
      description: "Years of experience guiding students from top colleges",
    },
  ],
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

<style scoped></style>