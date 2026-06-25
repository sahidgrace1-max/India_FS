<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-white relative overflow-x-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -right-40 w-96 h-96 bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute top-2/4 -left-40 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10">
      <NavbarGrace />

      <div
        ref="sectionIntro"
        class="transition-all duration-1000 ease-out transform"
        :class="[visibleSections.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
      >
        <AboutIntroSection />
      </div>

      <div class="w-full h-4 bg-gradient-to-r from-blue-800/5 via-green-600/5 to-transparent transform -skew-y-1 my-4"></div>

      <div
        ref="sectionDirector"
        class="transition-all duration-1000 ease-out transform"
        :class="[visibleSections.director ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16']"
      >
        <BranchDirectorMessageSection />
      </div>

      <div
        ref="sectionStats"
        class="transition-all duration-1000 ease-out transform"
        :class="[visibleSections.stats ? 'opacity-100 scale-100' : 'opacity-0 scale-95']"
      >
        <AboutStatsSection />
      </div>

      <div class="w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform skew-y-1 my-4"></div>

      <div
        ref="sectionAdvantages"
        class="transition-all duration-1000 ease-out transform"
        :class="[visibleSections.advantages ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16']"
      >
        <BranchAdvantagesSection />
      </div>

      <div
        ref="sectionTeam"
        class="transition-all duration-1000 ease-out transform"
        :class="[visibleSections.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <BranchTeamSection />
      </div>

      <fotter />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import fotter from "@/components/layouts/fotter.vue";
import AboutIntroSection from "@/components/AboutUs_layout/AboutIntroSection.vue";
import BranchDirectorMessageSection from "@/components/AboutUs_layout/BranchDirectorMessageSection.vue";
import AboutStatsSection from "@/components/AboutUs_layout/AboutStatsSection.vue";
import BranchAdvantagesSection from "@/components/AboutUs_layout/BranchAdvantagesSection.vue";
import BranchTeamSection from "@/components/AboutUs_layout/BranchTeamSection.vue";

// DOM References for Intersection Observer
const sectionIntro = ref(null);
const sectionDirector = ref(null);
const sectionStats = ref(null);
const sectionAdvantages = ref(null);
const sectionTeam = ref(null);

// Visibility Trackers
const visibleSections = ref({
  intro: false,
  director: false,
  stats: false,
  advantages: false,
  team: false
});

let observers = [];

onMounted(() => {
  const config = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  };

  const createObserver = (elementRef, key) => {
    if (!elementRef.value) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        visibleSections.value[key] = true;
        obs.disconnect(); // Fire once
      }
    }, config);

    obs.observe(elementRef.value);
    observers.push(obs);
  };

  createObserver(sectionIntro, "intro");
  createObserver(sectionDirector, "director");
  createObserver(sectionStats, "stats");
  createObserver(sectionAdvantages, "advantages");
  createObserver(sectionTeam, "team");
});

onUnmounted(() => {
  observers.forEach((obs) => obs.disconnect());
});
</script>

<style scoped>
/* Scoped keyframes for micro-interactions if extended globally */
@keyframes slowRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate-dashed {
  animation: slowRotate 25s linear infinite;
}
</style>