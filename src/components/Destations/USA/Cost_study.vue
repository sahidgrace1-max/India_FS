<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content - Animated -->
        <div
          ref="leftContent"
          class="animate-section order-1 lg:order-1"
          data-animation="slide-left"
        >
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Cost of Studying & Living in the USA
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Tuition Fees (Public Universities):</span
              >
              USD
              <span class="font-semibold text-lg">9,000–23,000/year</span>
              depending on residency and program.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Tuition Fees (Private Universities):</span
              >
              USD
              <span class="font-semibold text-lg">31,000–60,000/year</span>
              depending on the institution.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Community/Two-Year Colleges:</span
              >
              USD
              <span class="font-semibold text-lg">3,000–6,000/year</span> for
              tuition.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Living Costs:</span
              >
              USD
              <span class="font-semibold text-lg">10,000–15,000/year</span>
              depending on city and lifestyle.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Average Total (Study + Living):</span
              >
              USD
              <span class="font-semibold text-lg">20,000–75,000/year</span>
              depending on type of university and location.
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            <span class="text-orange-600 font-medium text-lg"
              >Grace International India</span
            >
            <span class="text-lg">
              provides guidance on budgeting, financial aid, and managing
              expenses for Indian students in the USA.</span
            >
          </p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6 text-lg">
            Work Opportunities & Post-Study Options
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >On-Campus Work:</span
              >
              Indian students on F-1 visas can work part-time
              <span class="font-semibold text-lg">up to 20 hours per week</span>
              during semesters; full-time during breaks.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Optional Practical Training (OPT):</span
              >
              <ul class="ml-6 mt-2 space-y-1">
                <li class="text-gray-600 text-base text-lg">
                  Bachelor's or Master's – up to 12 months
                </li>
                <li class="text-gray-600 text-base text-lg">
                  STEM Degrees – can extend for an additional 24 months
                </li>
              </ul>
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6 text-lg">
            OPT allows Indian students to gain practical work experience in the
            USA after graduation.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed">
            <span class="font-semibold text-gray-900 text-lg"
              >Career & Visa Pathways:</span
            >
            <span class="text-lg">
              Indian students can explore H-1B work visas and other
              employment-based immigration options after completing their
              studies.</span
            >
          </p>
        </div>

        <!-- Right Image - Animated -->
        <div
          ref="rightImage"
          class="animate-section order-2 lg:order-2 flex items-center justify-center"
          data-animation="slide-right"
        >
          <img
            :src="bgImage"
            alt="Students studying in the USA"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[700px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/usa2.png";

// Refs for animated sections
const leftContent = ref(null);
const rightImage = ref(null);

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

  const sections = [leftContent.value, rightImage.value];
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
