<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <Navbar />

    <!-- Hero Section -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
    >
      <Hero />
    </div>

    <!-- Section1 -->
    <div
      v-motion
      :initial="{ opacity: 0, x: -60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <Section1 />
    </div>

    <!-- Our Services -->
    <div
      v-motion
      :initial="{ opacity: 0, x: 60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <OurServices />
    </div>

    <!-- Top Study Destinations -->
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible-once="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
    >
      <TopStudyDestinations />
    </div>

    <!-- Test Preparation -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <TestPreparation />
    </div>

    <!-- Contact Form -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <ContactForm />
    </div>

    <!-- Testimonials -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <testimonials />
    </div>

    <!-- Associated Universities -->
    <div
      v-motion
      :initial="{ opacity: 0, x: -60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <AssociatedUniversities />
    </div>

    <!-- Accreditations -->
    <div
      v-motion
      :initial="{ opacity: 0, x: 60 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
    >
      <Accreditations />
    </div>

    <!-- Footer -->
    <Fotter />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/layouts/NavbarGrace.vue";
import Hero from "@/components/layouts/Hero.vue";
import Section1 from "@/components/layouts/Section1.vue";
import TopStudyDestinations from "@/components/layouts/TopStudyDestinations.vue";
import OurServices from "@/components/layouts/OurServices.vue";
import ContactForm from "@/components/layouts/ContactForm.vue";
import TestPreparation from "../components/layouts/TestPreparation.vue";
import AssociatedUniversities from "@/components/layouts/AssociatedUniversities.vue";
import Accreditations from "@/components/layouts/Accreditations.vue";
import Fotter from "@/components/layouts/fotter.vue";
import testimonials from "../components/layouts/testimonials.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Smooth scroll behavior
  gsap.to("html", {
    scrollBehavior: "smooth",
  });
});
</script>

<style scoped>
/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Optional: Add any custom styles here */
</style>
