<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <NavbarGrace />

    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <AboutIntroSection />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, x: -60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <BranchDirectorMessageSection />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible-once="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
    >
      <AboutStatsSection />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, x: 60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <BranchAdvantagesSection />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <BranchTeamSection />
    </div>

    <fotter />
  </div>
</template>

<script setup>
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import fotter from "@/components/layouts/fotter.vue";
import AboutIntroSection from "@/components/AboutUs_layout/AboutIntroSection.vue";
import BranchDirectorMessageSection from "@/components/AboutUs_layout/BranchDirectorMessageSection.vue";
import AboutStatsSection from "@/components/AboutUs_layout/AboutStatsSection.vue";
import BranchAdvantagesSection from "@/components/AboutUs_layout/BranchAdvantagesSection.vue";
import BranchTeamSection from "@/components/AboutUs_layout/BranchTeamSection.vue";
</script>
