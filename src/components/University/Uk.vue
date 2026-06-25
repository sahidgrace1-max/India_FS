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
            src="@/assets/uk.jpeg"
            alt="UK"
            class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] flex items-center justify-center">
            <h1 class="text-white text-4xl font-bold tracking-wider">UNITED KINGDOM</h1>
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
import uk from "@/assets/uk.jpeg";
import birminghamcity from "@/assets/Birmingham CIty.webp";
import bpp from "@/assets/BPP University.webp";
import bradford from "@/assets/bradford.png";
import bristol from "@/assets/bristol.png";
import buckinghamshire from "@/assets/buckinghamshire.png";
import cardiffmet from "@/assets/cardiff-metropolitan-university.png";
import coventry from "@/assets/Coventry University.png";
import creativearts from "@/assets/creative arts.png";
import demontfort from "@/assets/de-montfort-university.png";
import edinburghnapier from "@/assets/EdinburghNapierUniversity.png";
import leedsbeckett from "@/assets/leeds-beckett-university.png";
import londonmet from "@/assets/londonmetropolitanuniversity.webp";
import lsbu from "@/assets/LSBU.png";
import northumbria from "@/assets/Northumbria_University_logo.png";
import ravensbourne from "@/assets/ravensbourneuniversity.png";
import regentcollege from "@/assets/RegentCollege.png";
import roehampton from "@/assets/roehampton.png";
import salford from "@/assets/salford.png";
import stirling from "@/assets/Stirling.png";
import sunderland from "@/assets/Sunderland.png";
import uel from "@/assets/Northumbria_University_logo.png";
import lawuni from "@/assets/university of law.png";
import hertfordshire from "@/assets/University_of_Hertfordshire.png";
import greenwich from "@/assets/university-of-greenwich.png";
import huddersfield from "@/assets/university-of-huddersfield.png";
import westlondon from "@/assets/UWL-Logo.png";
import westscotland from "@/assets/UWS.png";
import wolverhampton from "@/assets/Wolverhampton.png";
import worcester from "@/assets/worcester.png";

const universities = [
  { name: "Birmingham City", img: birminghamcity, link: "https://www.bcu.ac.uk/" },
  { name: "BPP University", img: bpp, link: "https://www.bpp.com/" },
  { name: "Univ. of Bradford", img: bradford, link: "https://www.bradford.ac.uk/" },
  { name: "Univ. of Bristol", img: bristol, link: "https://www.bristol.ac.uk/" },
  { name: "Buckinghamshire New", img: buckinghamshire, link: "https://www.bucks.ac.uk/" },
  { name: "Cardiff Met", img: cardiffmet, link: "https://www.cardiffmet.ac.uk/" },
  { name: "Coventry University", img: coventry, link: "https://www.coventry.ac.uk/" },
  { name: "Creative Arts", img: creativearts, link: "https://www.uca.ac.uk/" },
  { name: "De Montfort", img: demontfort, link: "https://www.dmu.ac.uk/" },
  { name: "Edinburgh Napier", img: edinburghnapier, link: "https://www.napier.ac.uk/" },
  { name: "Leeds Beckett", img: leedsbeckett, link: "https://www.leedsbeckett.ac.uk/" },
  { name: "London Metropolitan", img: londonmet, link: "https://www.londonmet.ac.uk/" },
  { name: "LSBU", img: lsbu, link: "https://www.lsbu.ac.uk/" },
  { name: "Northumbria Univ.", img: northumbria, link: "https://www.northumbria.ac.uk/" },
  { name: "Ravensbourne", img: ravensbourne, link: "https://www.ravensbourne.ac.uk/" },
  { name: "Regent College", img: regentcollege, link: "https://www.rcl.ac.uk/" },
  { name: "Univ. of Roehampton", img: roehampton, link: "https://www.roehampton.ac.uk/" },
  { name: "Univ. of Salford", img: salford, link: "https://www.salford.ac.uk/" },
  { name: "Univ. of Stirling", img: stirling, link: "https://www.stir.ac.uk/" },
  { name: "Univ. of Sunderland", img: sunderland, link: "https://www.sunderland.ac.uk/" },
  { name: "Univ. of East London", img: uel, link: "https://www.uel.ac.uk/" },
  { name: "University of Law", img: lawuni, link: "https://www.law.ac.uk/" },
  { name: "Univ. of Hertfordshire", img: hertfordshire, link: "https://www.herts.ac.uk/" },
  { name: "Univ. of Greenwich", img: greenwich, link: "https://www.greenwich.ac.uk/" },
  { name: "Univ. of Huddersfield", img: huddersfield, link: "https://www.hud.ac.uk/" },
  { name: "Univ. of West London", img: westlondon, link: "https://www.uwl.ac.uk/" },
  { name: "Univ. of the West of Scotland", img: westscotland, link: "https://www.uws.ac.uk/" },
  { name: "Univ. of Wolverhampton", img: wolverhampton, link: "https://www.wlv.ac.uk/" },
  { name: "University of Worcester", img: worcester, link: "https://www.worcester.ac.uk/" },
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