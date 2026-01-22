<!-- Dashboard.vue - Enhanced with Scroll Animations -->
<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <Navbar />

    <!-- Add animation wrapper divs around each section -->
    <div ref="heroSection" class="animate-section" data-animation="fade-up">
      <Hero />
    </div>

    <div ref="section1" class="animate-section" data-animation="slide-left">
      <Section1 />
    </div>

    <div ref="ourServices" class="animate-section" data-animation="slide-right">
      <OurServices />
    </div>

    <div
      ref="topDestinations"
      class="animate-section"
      data-animation="fade-scale"
    >
      <TopStudyDestinations />
    </div>

    <div ref="testPrep" class="animate-section" data-animation="slide-up">
      <TestPreparation />
    </div>

    <div ref="contactForm" class="animate-section" data-animation="fade-up">
      <ContactForm />
    </div>

    <div ref="universities" class="animate-section" data-animation="slide-left">
      <AssociatedUniversities />
    </div>

    <div
      ref="accreditations"
      class="animate-section"
      data-animation="slide-right"
    >
      <Accreditations />
    </div>

    <Fotter />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
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

export default defineComponent({
  name: "Dashboard",
  components: {
    Navbar,
    Hero,
    Section1,
    TopStudyDestinations,
    OurServices,
    ContactForm,
    TestPreparation,
    AssociatedUniversities,
    Accreditations,
    Fotter,
  },
  setup() {
    const heroSection = ref(null);
    const section1 = ref(null);
    const ourServices = ref(null);
    const topDestinations = ref(null);
    const testPrep = ref(null);
    const contactForm = ref(null);
    const universities = ref(null);
    const accreditations = ref(null);

    let observer = null;

    onMounted(() => {
      // Intersection Observer setup
      const options = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optional: unobserve after animation to improve performance
            // observer.unobserve(entry.target);
          }
        });
      }, options);

      // Observe all sections
      const sections = [
        heroSection.value,
        section1.value,
        ourServices.value,
        topDestinations.value,
        testPrep.value,
        contactForm.value,
        universities.value,
        accreditations.value,
      ];

      sections.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    return {
      heroSection,
      section1,
      ourServices,
      topDestinations,
      testPrep,
      contactForm,
      universities,
      accreditations,
    };
  },
});
</script>

<style scoped>
/* Base state for all animated sections - SLOWER & LIGHTER */
.animate-section {
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Fade Up Animation - Lighter movement */
.animate-section[data-animation="fade-up"] {
  transform: translateY(30px);
}

.animate-section[data-animation="fade-up"].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide from Left Animation - Lighter movement */
.animate-section[data-animation="slide-left"] {
  transform: translateX(-40px);
}

.animate-section[data-animation="slide-left"].is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide from Right Animation - Lighter movement */
.animate-section[data-animation="slide-right"] {
  transform: translateX(40px);
}

.animate-section[data-animation="slide-right"].is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Up Animation - Lighter movement */
.animate-section[data-animation="slide-up"] {
  transform: translateY(35px);
}

.animate-section[data-animation="slide-up"].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade & Scale Animation - Subtle scale */
.animate-section[data-animation="fade-scale"] {
  transform: scale(0.95);
}

.animate-section[data-animation="fade-scale"].is-visible {
  opacity: 1;
  transform: scale(1);
}

/* Rotate Animation - Lighter rotation */
.animate-section[data-animation="rotate"] {
  transform: rotate(-2deg) translateY(20px);
}

.animate-section[data-animation="rotate"].is-visible {
  opacity: 1;
  transform: rotate(0deg) translateY(0);
}

/* Zoom In Animation - Subtle zoom */
.animate-section[data-animation="zoom"] {
  transform: scale(0.92);
}

.animate-section[data-animation="zoom"].is-visible {
  opacity: 1;
  transform: scale(1);
}

/* Add smooth transition for background */
.min-h-screen {
  transition: background-color 0.5s ease;
}

/* Optional: Add stagger effect for multiple sections - Lighter delays */
.animate-section:nth-child(1) {
  transition-delay: 0s;
}

.animate-section:nth-child(2) {
  transition-delay: 0.15s;
}

.animate-section:nth-child(3) {
  transition-delay: 0.15s;
}

.animate-section:nth-child(4) {
  transition-delay: 0.15s;
}

.animate-section:nth-child(5) {
  transition-delay: 0.15s;
}

.animate-section:nth-child(6) {
  transition-delay: 0.15s;
}

.animate-section:nth-child(7) {
  transition-delay: 0.15s;
}

.animate-section:nth-child(8) {
  transition-delay: 0.15s;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Remove hover effect for cleaner look */
.animate-section.is-visible {
  transition: all 0.5s ease;
}
</style>
