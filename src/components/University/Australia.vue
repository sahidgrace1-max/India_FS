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
            src="@/assets/aus.jpeg"
            alt="Australia"
            class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] flex items-center justify-center">
            <h1 class="text-white text-4xl font-bold tracking-wider">AUSTRALIA</h1>
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
          <p class="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">{{ uni.Serial }}</p>
          <span class="text-center text-base sm:text-lg font-bold text-blue-900 leading-tight">{{ uni.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import uniTasmania from "@/assets/Uni-Tamania.jpeg";
import latrobe from "@/assets/La Trobe University.jpg";
import murdoch from "@/assets/MurdochUniversity.jpg";
import uow from "@/assets/University of Wollongong.jpg";
import newcastle from "@/assets/University of New Castle Australia.png";
import jamescook from "@/assets/jamesook-university.jpg";
import victoria from "@/assets/Victoria University.webp";
import edith from "@/assets/Edith Cowan University.avif";
import torrens from "@/assets/Torrens.png";
import southernCross from "@/assets/Southern Cross University.jpg";
import charlesTourt from "@/assets/Charles Sturt University.jpg";
import sunshineCoast from "@/assets/University of the Sunshine Coast .jpg";
import centralQld from "@/assets/Central Queensland University.jpg";
import navitas from "@/assets/Navitas University.png";
import canterbury from "@/assets/Canterbury Institute of Management.jpg";
import excelsia from "@/assets/Excelsia University College.jpg";

const universities = [
  { Serial: "(CRICOS 00586B)", name: "University Of Tasmania", img: uniTasmania, link: "https://www.utas.edu.au/" },
  { Serial: "(CRICOS 00115M)", name: "La Trobe University", img: latrobe, link: "https://www.latrobe.edu.au/" },
  { Serial: "(CRICOS 00125J)", name: "Murdoch University", img: murdoch, link: "https://www.murdoch.edu.au/" },
  { Serial: "(CRICOS 00102E)", name: "University of Wollongong", img: uow, link: "https://www.uow.edu.au/" },
  { Serial: "(CRICOS 00109J)", name: "University of New Castle Australia", img: newcastle, link: "https://www.newcastle.edu.au/" },
  { Serial: "(CRICOS 00117J)", name: "James Cook University", img: jamescook, link: "https://www.jcu.edu.au/" },
  { Serial: "(CRICOS 00124K)", name: "Victoria University", img: victoria, link: "https://www.vu.edu.au/" },
  { Serial: "(CRICOS 00279B)", name: "Edith Cowan University", img: edith, link: "https://www.ecu.edu.au/" },
  { Serial: "(CRICOS 03389E)", name: "Torrens University", img: torrens, link: "https://www.torrens.edu.au/" },
  { Serial: "(CRICOS 01241G)", name: "Southern Cross University", img: southernCross, link: "https://www.scu.edu.au/" },
  { Serial: "(CRICOS 00005F)", name: "Charles Sturt University", img: charlesTourt, link: "https://www.csu.edu.au/" },
  { Serial: "(CRICOS 01595D)", name: "University of the Sunshine Coast", img: sunshineCoast, link: "https://www.usc.edu.au/" },
  { Serial: "(CRICOS 00244B)", name: "Central Queensland University", img: centralQld, link: "https://www.cqu.edu.au/" },
  { Serial: "(CRICOS 00231G)", name: "Navitas University", img: navitas, link: "https://www.navitas.com/" },
  { Serial: "(CRICOS 03809A)", name: "Canterbury Institute", img: canterbury, link: "https://cihe.edu.au/" },
  { Serial: "(CRICOS 02664K)", name: "Excelsia University College", img: excelsia, link: "https://excelsia.edu.au/" },
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