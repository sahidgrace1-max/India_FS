<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Intro Paragraph - Full Width -->
      <div
        ref="introParagraph"
        class="animate-section w-full mb-12"
        data-animation="fade-up"
      >
        <p class="text-gray-700 text-lg leading-relaxed">
          New Zealand is known for high-quality education and an unbeatable
          lifestyle. Its education system emphasizes practical, hands-on
          learning to equip students with skills and experiences that are
          globally recognized. New Zealand qualifications are respected
          worldwide, and students benefit from an immersive English-language
          environment and opportunities to work while studying and after
          graduation.
        </p>
      </div>

      <!-- Image and Content Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content Section -->
        <div
          ref="contentSection"
          class="animate-section order-1 lg:order-1"
          data-animation="slide-left"
        >
          <div class="prose max-w-none">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Why Study in New Zealand?
            </h2>

            <ul class="space-y-4">
              <li class="text-gray-700">
                <span class="font-semibold text-gray-900 text-lg"
                  >World-Class Universities</span
                >
                <span class="text-lg">
                  – New Zealand’s universities rank in the top 3% globally,
                  offering degrees recognized internationally.</span
                >
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900 text-lg"
                  >Practical Learning</span
                >
                <span class="text-lg">
                  – Hands-on, student-centered education helps develop
                  problem-solving, teamwork, and critical-thinking skills.</span
                >
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900 text-lg"
                  >Safe and Welcoming Environment</span
                >
                <span class="text-lg">
                  – New Zealand is culturally diverse, safe, and known for its
                  natural beauty and outdoor lifestyle.</span
                >
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900 text-lg"
                  >Work Opportunities</span
                >
                <span class="text-lg"
                  >– Students can work part-time during study periods and
                  full-time during holidays, gaining practical experience and
                  developing employability skills.</span
                >
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900 text-lg"
                  >Global Recognition</span
                >
                <span class="text-lg">
                  – Qualifications from New Zealand are respected worldwide,
                  opening doors to higher studies and career opportunities
                  across the globe.</span
                >
              </li>
            </ul>

            <p class="text-gray-700 text-base leading-relaxed text-lg mt-6">
              Studying in New Zealand offers a unique combination of academic
              excellence, personal growth, and unforgettable life experiences in
              one of the world’s most beautiful and inspiring countries.
            </p>
          </div>
        </div>

        <!-- Image Section -->
        <div
          ref="imageSection"
          class="animate-section order-2 lg:order-2"
          data-animation="slide-right"
        >
          <img
            :src="bgImage"
            alt="New Zealand Education"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[500px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/newzealand.png";

// Refs for animation
const introParagraph = ref(null);
const contentSection = ref(null);
const imageSection = ref(null);

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
    contentSection.value,
    imageSection.value,
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
/* Base state for animations */
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

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
