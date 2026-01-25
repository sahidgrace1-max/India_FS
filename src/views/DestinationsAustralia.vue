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
      <UniversitiesAndCourses />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, x: 60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <Cost_study />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <ApplicationStudent />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <faq />
    </div>

    <fotter />
  </div>
</template>

<script setup>
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import Hero from "@/components/Destations/Australia/Hero.vue";
import Intro from "@/components/Destations/Australia/Intro.vue";
import fotter from "@/components/layouts/fotter.vue";
import Cost_study from "../components/Destations/Australia/Cost_study.vue";
import faq from "../components/Destations/Australia/Faq.vue";
import ApplicationStudent from "../components/Destations/Australia/Application&Student.vue";
import UniversitiesAndCourses from "../components/Destations/Australia/UniversitiesAndCourses.vue";
</script>
