<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <NavbarGrace />

    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <Hero />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, x: -60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <Intro />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible-once="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
    >
      <Who />
    </div>

    <fotter />
  </div>
</template>

<script setup>
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import Hero from "@/components/TestPrepration/PTE/Hero.vue";
import Intro from "@/components/TestPrepration/PTE/Intro.vue";
import fotter from "@/components/layouts/fotter.vue";
import Who from "../components/TestPrepration/PTE/Who.vue";
</script>
