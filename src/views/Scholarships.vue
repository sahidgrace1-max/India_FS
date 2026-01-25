<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <NavbarGrace />

    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <ScholarshipsHero />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, x: -60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <ScholarshipsTypes />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, x: 60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <Guidance />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <FrequentlyAskedQuestions />
    </div>

    <fotter />
  </div>
</template>

<script setup>
import ScholarshipsHero from "@/components/Scholarships/Hero.vue";
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import ScholarshipsTypes from "@/components/Scholarships/ScholarshipsTypes.vue";
import fotter from "@/components/layouts/fotter.vue";
import Guidance from "../components/Scholarships/Guidance.vue";
import FrequentlyAskedQuestions from "../components/Scholarships/FrequentlyAskedQuestions.vue";
</script>
