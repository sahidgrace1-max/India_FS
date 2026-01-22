<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <NavbarGrace />

    <!-- Animated Sections -->
    <div ref="heroSection" class="animate-section" data-animation="fade-up">
      <Hero />
    </div>

    <div ref="introSection" class="animate-section" data-animation="slide-left">
      <Intro />
    </div>

    <div ref="costSection" class="animate-section" data-animation="slide-right">
      <Cost_study />
    </div>

    <div
      ref="universitiesSection"
      class="animate-section"
      data-animation="fade-scale"
    >
      <UniversitiesAndCourses />
    </div>

    <div
      ref="applicationSection"
      class="animate-section"
      data-animation="slide-up"
    >
      <ApplicationStudent />
    </div>

    <div ref="faqSection" class="animate-section" data-animation="fade-up">
      <Faq />
    </div>

    <fotter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import Hero from "@/components/Destations/Canada/Hero.vue";
import Intro from "@/components/Destations/Canada/Intro.vue";
import Cost_study from "@/components/Destations/Canada/Cost_study.vue";
import UniversitiesAndCourses from "@/components/Destations/Canada/UniversitiesAndCourses.vue";
import ApplicationStudent from "@/components/Destations/Canada/Application&Student.vue";
import Faq from "@/components/Destations/Canada/Faq.vue";
import fotter from "@/components/layouts/fotter.vue";

// Refs for sections
const heroSection = ref(null);
const introSection = ref(null);
const costSection = ref(null);
const universitiesSection = ref(null);
const applicationSection = ref(null);
const faqSection = ref(null);

let observer = null;

onMounted(() => {
  const options = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, options);

  const sections = [
    heroSection.value,
    introSection.value,
    costSection.value,
    universitiesSection.value,
    applicationSection.value,
    faqSection.value,
  ];

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
/* Base state */
.animate-section {
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Fade Up */
.animate-section[data-animation="fade-up"] {
  transform: translateY(30px);
}
.animate-section[data-animation="fade-up"].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide Left */
.animate-section[data-animation="slide-left"] {
  transform: translateX(-40px);
}
.animate-section[data-animation="slide-left"].is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Right */
.animate-section[data-animation="slide-right"] {
  transform: translateX(40px);
}
.animate-section[data-animation="slide-right"].is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Up */
.animate-section[data-animation="slide-up"] {
  transform: translateY(35px);
}
.animate-section[data-animation="slide-up"].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade & Scale */
.animate-section[data-animation="fade-scale"] {
  transform: scale(0.95);
}
.animate-section[data-animation="fade-scale"].is-visible {
  opacity: 1;
  transform: scale(1);
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
