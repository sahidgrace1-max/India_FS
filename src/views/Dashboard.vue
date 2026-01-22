<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <Navbar />

    <!-- Hero Section -->
    <div ref="heroSection" class="animate-section" data-animation="fade-up">
      <Hero />
    </div>

    <!-- Section1 -->
    <div ref="section1" class="animate-section" data-animation="slide-left">
      <Section1 />
    </div>

    <!-- Our Services -->
    <div ref="ourServices" class="animate-section" data-animation="slide-right">
      <OurServices />
    </div>

    <!-- Top Study Destinations -->
    <div
      ref="topDestinations"
      class="animate-section"
      data-animation="fade-scale"
    >
      <TopStudyDestinations />
    </div>

    <!-- Test Preparation -->
    <div ref="testPrep" class="animate-section" data-animation="slide-up">
      <TestPreparation />
    </div>

    <!-- Contact Form -->
    <div ref="contactForm" class="animate-section" data-animation="fade-up">
      <ContactForm />
    </div>

    <!-- Testimonials -->
    <div
      ref="testimonialsSection"
      class="animate-section"
      data-animation="fade-up"
    >
      <testimonials />
    </div>

    <!-- Associated Universities -->
    <div ref="universities" class="animate-section" data-animation="slide-left">
      <AssociatedUniversities />
    </div>

    <!-- Accreditations -->
    <div
      ref="accreditations"
      class="animate-section"
      data-animation="slide-right"
    >
      <Accreditations />
    </div>

    <!-- Footer -->
    <Fotter />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, nextTick } from "vue";
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
    testimonials,
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
    const testimonialsSection = ref(null);
    const universities = ref(null);
    const accreditations = ref(null);

    let observer = null;

    onMounted(async () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              // optional: observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        },
      );

      // Wait until next tick to ensure refs are rendered
      await nextTick();

      const sections = [
        heroSection.value,
        section1.value,
        ourServices.value,
        topDestinations.value,
        testPrep.value,
        contactForm.value,
        testimonialsSection.value,
        universities.value,
        accreditations.value,
      ];

      sections.forEach((section) => {
        if (section) observer.observe(section);
      });
    });

    onUnmounted(() => {
      if (observer) observer.disconnect();
    });

    return {
      heroSection,
      section1,
      ourServices,
      topDestinations,
      testPrep,
      contactForm,
      testimonialsSection,
      universities,
      accreditations,
    };
  },
});
</script>

<style scoped>
/* Base state for all animated sections */
.animate-section {
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Fade Up Animation */
.animate-section[data-animation="fade-up"] {
  transform: translateY(30px);
}
.animate-section[data-animation="fade-up"].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide Left Animation */
.animate-section[data-animation="slide-left"] {
  transform: translateX(-40px);
}
.animate-section[data-animation="slide-left"].is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Right Animation */
.animate-section[data-animation="slide-right"] {
  transform: translateX(40px);
}
.animate-section[data-animation="slide-right"].is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Up Animation */
.animate-section[data-animation="slide-up"] {
  transform: translateY(35px);
}
.animate-section[data-animation="slide-up"].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade & Scale Animation */
.animate-section[data-animation="fade-scale"] {
  transform: scale(0.95);
}
.animate-section[data-animation="fade-scale"].is-visible {
  opacity: 1;
  transform: scale(1);
}

/* Smooth stagger delays (optional) */
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
.animate-section:nth-child(9) {
  transition-delay: 0.15s;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

.animate-section.is-visible {
  transition: all 0.5s ease;
}
</style>
