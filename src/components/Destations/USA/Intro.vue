<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Intro Paragraph - Animated -->
      <div
        ref="introParagraph"
        class="animate-section mb-12"
        data-animation="fade-up"
      >
        <p class="text-gray-700 text-lg leading-relaxed text-lg">
          The United States (USA) is one of the most sought-after study abroad
          destinations for Indian students. With world-renowned universities,
          cutting-edge research opportunities, diverse programs, and flexible
          career pathways, studying in the USA opens doors to academic
          excellence, global exposure, and professional growth.
        </p>
      </div>

      <!-- Image and Content Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Section - Animated -->
        <div
          ref="imageSection"
          class="animate-section"
          data-animation="slide-left"
        >
          <img
            :src="bgImage"
            alt="US University Campus"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[500px]"
          />
        </div>

        <!-- Content Section - Animated -->
        <div
          ref="contentSection"
          class="animate-section"
          data-animation="slide-right"
        >
          <div class="prose max-w-none">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Why Study in the USA?
            </h2>

            <ul class="space-y-4">
              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900 text-lg"
                  >Top-Ranked Universities</span
                >
                – The USA hosts elite institutions such as MIT, Harvard,
                Stanford, and Yale, along with prestigious public universities
                like UCLA and University of Michigan.
              </li>

              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900"
                  >Wide Range of Programs</span
                >
                – From engineering and IT to liberal arts and business, students
                can choose from undergraduate, graduate, and research-focused
                degrees.
              </li>

              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900"
                  >Cutting-Edge Research & Innovation</span
                >
                – Opportunities to work on advanced projects, gain lab
                experience, and collaborate with leading experts.
              </li>

              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900"
                  >Flexible Career Opportunities</span
                >
                – Access to internships, on-campus work, and Optional Practical
                Training (OPT) after graduation.
              </li>

              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900"
                  >Diverse Student Community</span
                >
                – Interact with students from around the world and experience a
                multicultural campus environment.
              </li>
            </ul>

            <p class="text-gray-700 text-base leading-relaxed mt-6 text-lg">
              Indian students in the USA also benefit from strong industry
              links, networking opportunities, and pathways to work experience
              that help build successful international careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/usa.png";

// Refs for animated sections
const introParagraph = ref(null);
const imageSection = ref(null);
const contentSection = ref(null);

let observer = null;

onMounted(() => {
  const options = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, options);

  const sections = [
    introParagraph.value,
    imageSection.value,
    contentSection.value,
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

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
