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
      <div 
        class="text-center mb-16 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Global Network
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Our Education 
          <span class="relative inline-block text-green-500">
            Partners
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div 
        class="flex justify-center mb-16 transition-all duration-1000 ease-out delay-200 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="relative w-full max-w-md h-40 rounded-3xl overflow-hidden group shadow-lg border border-blue-100">
          <img
            :src="usa"
            alt="USA"
            class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] flex items-center justify-center">
            <h1 class="text-white text-4xl font-bold tracking-wider">UNITED STATES</h1>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
        <div
          v-for="(uni, idx) in universities"
          :key="idx"
          ref="cards"
          :data-index="idx"
          class="flex flex-col items-center p-6 sm:p-8 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-[2rem] shadow-sm transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-xl hover:border-blue-200"
          :class="[isVisibleStates[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          :style="{ transitionDelay: `${idx * 50}ms` }"
        >
          <a
            :href="uni.link"
            target="_blank"
            rel="noopener noreferrer"
            class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center overflow-hidden mb-6 border-4 border-white bg-white rounded-full transition-transform duration-500 ease-out hover:rotate-6 shadow-md"
          >
            <img
              :src="uni.img"
              :alt="uni.name"
              class="object-contain w-full h-full p-3 sm:p-4"
            />
          </a>
          <span class="text-center text-base sm:text-lg font-bold text-blue-900 leading-tight">{{ uni.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import usa from "@/assets/usa.jpeg";
import davis from "@/assets/davis.jpg";
import concordia from "@/assets/Concordia.webp";
import webster from "@/assets/Webster.jpg";
import avila from "@/assets/avila-university.webp";
import bethany from "@/assets/bethany-college-stacked-logo.avif";
import elmhurst from "@/assets/elmhurst-university.jpg";
import southeast from "@/assets/Southeast.webp";
import southwest from "@/assets/SouthwestMinnesotaState.jpg";
import youngstown from "@/assets/Youngstown.jpeg";
import texasstate from "@/assets/TexasState.jpg";
import arkansas from "@/assets/Arkansas_State_Unversity-.jpg";
import wright from "@/assets/wright-state-university.png";
import felician from "@/assets/Felician-University.webp";
import westcliff from "@/assets/westcliff-campus.jpg";
import williampatterson from "@/assets/WP_Campus.webp";
import bridgeport from "@/assets/BridgeportUniversity.jpg";
import middletennessee from "@/assets/MiddleTennessee.jpg";
import hustontillotson from "@/assets/Huston-Tillotson University.avif";
import coloradomesa from "@/assets/colorado-mesa-university.jpg";
import albertus from "@/assets/Albertus Magnus College.jpg";

const universities = [
  { name: "Davis Univ.", img: davis, link: "https://www.davis.edu/" },
  { name: "Concordia Univ.", img: concordia, link: "https://www.concordia.edu/" },
  { name: "Webster Univ.", img: webster, link: "https://www.webster.edu/" },
  { name: "Avila Univ.", img: avila, link: "https://www.avila.edu/" },
  { name: "Bethany College", img: bethany, link: "https://www.bethanykc.edu/" },
  { name: "Elmhurst Univ.", img: elmhurst, link: "https://www.elmhurst.edu/" },
  { name: "Southeast Missouri State", img: southeast, link: "https://www.semo.edu/" },
  { name: "Southwest Minnesota State", img: southwest, link: "https://www.smsu.edu/" },
  { name: "Youngstown State", img: youngstown, link: "https://www.ysu.edu/" },
  { name: "Texas State Univ.", img: texasstate, link: "https://www.txstate.edu/" },
  { name: "Arkansas State Univ.", img: arkansas, link: "https://www.astate.edu/" },
  { name: "Wright State Univ.", img: wright, link: "https://www.wright.edu/" },
  { name: "Felician Univ.", img: felician, link: "https://www.felician.edu/" },
  { name: "Westcliff Univ.", img: westcliff, link: "https://www.westcliff.edu/" },
  { name: "William Patterson", img: williampatterson, link: "https://www.wpunj.edu/" },
  { name: "Bridgeport Univ.", img: bridgeport, link: "https://www.bridgeport.edu/" },
  { name: "Middle Tennessee State", img: middletennessee, link: "https://www.mtsu.edu/" },
  { name: "Huston-Tillotson Univ.", img: hustontillotson, link: "https://www.huston-tillotson.edu/" },
  { name: "Colorado Mesa Univ.", img: coloradomesa, link: "https://www.coloradomesa.edu/" },
  { name: "Albertus Magnus", img: albertus, link: "https://www.albertus.edu/" },
];

const sectionRef = ref(null);
const isVisible = ref(false);
const isVisibleStates = ref(Array(universities.length).fill(false));
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === sectionRef.value) {
          isVisible.value = true;
        } else {
          const index = entry.target.dataset.index;
          if (index !== undefined) {
            isVisibleStates.value[index] = true;
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (sectionRef.value) observer.observe(sectionRef.value);
  const cards = document.querySelectorAll('[data-index]');
  cards.forEach(card => observer.observe(card));
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