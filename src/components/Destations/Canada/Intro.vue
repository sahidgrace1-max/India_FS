<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8 font-poppins">
    <div class="max-w-7xl mx-auto">
      <!-- Intro Paragraph - Full Width -->
      <div
        ref="introParagraph"
        class="animate-section"
        data-animation="fade-up"
      >
        <p class="text-gray-700 text-lg leading-relaxed font-">
          Canada is one of the most preferred study destinations for
          international students due to its high-quality education system,
          multicultural society, and excellent post-study work opportunities.
          With globally recognized degrees and strong pathways to permanent
          residency, Canada offers students a perfect balance of education and
          career growth.
        </p>
      </div>

      <!-- Image and Content Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Section -->
        <div
          ref="imageSection"
          class="animate-section"
          data-animation="slide-left"
        >
          <img
            :src="bgImage"
            alt="Canadian University Campus"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[500px]"
          />
        </div>

        <!-- Content Section -->
        <div
          ref="contentSection"
          class="animate-section"
          data-animation="slide-right"
        >
          <div class="prose max-w-none">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 font-">
              Why Study in Canada?
            </h2>

            <ul class="space-y-4">
              <li class="text-gray-700 text-lg font-">
                <span class="font-semibold text-gray-900 font-"
                  >World-Class Education</span
                >
                – Canadian universities and colleges are internationally
                recognized for academic excellence and research quality.
              </li>

              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900"
                  >Affordable Study Options</span
                >
                – Tuition fees and living costs are comparatively lower than
                other major study destinations like the USA and UK.
              </li>

              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900"
                  >Post-Graduation Work Permit (PGWP)</span
                >
                – Students can work for up to
                <span class="font-semibold">3 years</span> after completing
                eligible programs.
              </li>

              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900"
                  >Work While Studying</span
                >
                – International students can work up to
                <span class="font-semibold">20 hours per week</span> during
                academic sessions and full-time during breaks.
              </li>

              <li class="text-gray-700 text-lg">
                <span class="font-semibold text-gray-900"
                  >PR & Immigration Opportunities</span
                >
                – Canada offers clear pathways to permanent residency through
                programs like Express Entry and Provincial Nominee Programs
                (PNP).
              </li>
            </ul>

            <p class="text-gray-700 text-lg leading-relaxed mt-6">
              Graduates in Canada benefit from strong employment prospects in
              fields such as IT, healthcare, engineering, business, and skilled
              trades, supported by a stable economy and inclusive work
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/canada.webp";

// Refs for animation
const introParagraph = ref(null);
const imageSection = ref(null);
const contentSection = ref(null);

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
/* Base animation state */
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
</style>
