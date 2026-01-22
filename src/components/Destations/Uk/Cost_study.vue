<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div
          class="order-1 lg:order-1 space-y-6 opacity-0 animate-fadeUp delay-100"
        >
          <h2
            class="text-3xl font-bold text-gray-900 mb-6 opacity-0 animate-fadeUp delay-200"
          >
            Cost of Studying in the UK
          </h2>

          <ul class="space-y-3 mb-6">
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-300"
            >
              <span class="font-semibold text-gray-900">Tuition Fees:</span>
              <span class="font-semibold">£9,500–£13,000/year</span> for
              undergraduate courses and
              <span class="font-semibold">£12,000–£15,000/year</span> for
              postgraduate programs.
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-400"
            >
              <span class="font-semibold text-gray-900"
                >Living Costs (London – UKVI Requirement):</span
              >
              <span class="font-semibold">£1,265 per month</span> (up to a
              maximum of 9 months).
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-500"
            >
              <span class="font-semibold text-gray-900"
                >Average Total (Study + Living):</span
              >
              <span class="font-semibold">£20,000–£30,000 per year</span>
              depending on location and lifestyle.
            </li>
          </ul>

          <p
            class="text-gray-700 text-sm leading-relaxed mb-6 opacity-0 animate-fadeUp delay-600"
          >
            <span class="text-orange-600 font-medium"
              >Grace International India</span
            >
            assists Indian students with accurate financial planning, budgeting,
            and UKVI-compliant documentation for studying in the UK.
          </p>

          <h2
            class="text-xl font-bold text-gray-900 mb-5 opacity-0 animate-fadeUp delay-700"
          >
            Work & Career Opportunities
          </h2>

          <ul class="space-y-2.5 mb-4">
            <li
              class="text-gray-700 text-sm opacity-0 animate-fadeUp delay-800"
            >
              <span class="font-semibold text-gray-900">Part-Time Work:</span>
              Up to
              <span class="font-semibold">20 hours per week</span> during term
              time and full-time during holidays.
            </li>
            <li
              class="text-gray-700 text-sm opacity-0 animate-fadeUp delay-900"
            >
              <span class="font-semibold text-gray-900"
                >Post-Study Work Visa (Graduate Route):</span
              >
              <ul class="ml-6 mt-2 space-y-1">
                <li
                  class="text-gray-600 text-sm opacity-0 animate-fadeUp delay-1000"
                >
                  Bachelor’s – 2 years
                </li>
                <li
                  class="text-gray-600 text-sm opacity-0 animate-fadeUp delay-1100"
                >
                  Master’s – 2 years
                </li>
                <li
                  class="text-gray-600 text-sm opacity-0 animate-fadeUp delay-1200"
                >
                  PhD – 3 years
                </li>
              </ul>
            </li>
          </ul>

          <p
            class="text-gray-700 text-sm leading-relaxed mb-5 opacity-0 animate-fadeUp delay-1300"
          >
            The UK Graduate Route allows international students to gain valuable
            work experience after completing their studies.
          </p>

          <p
            class="text-gray-700 text-base leading-relaxed opacity-0 animate-fadeUp delay-1400"
          >
            <span class="font-semibold text-gray-900">Career Pathways:</span>
            UK work experience significantly improves global employability,
            especially in sectors like IT, healthcare, finance, engineering, and
            business management.
          </p>
        </div>

        <!-- Right Image -->
        <div
          class="order-2 lg:order-2 flex items-center justify-center opacity-0 animate-zoomIn delay-1500"
        >
          <img
            :src="bgImage"
            alt="Students studying in the UK"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[600px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/canada.png";
</script>

<style scoped>
/* Fade-up animation */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Zoom-in animation */
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animation classes */
.animate-fadeUp {
  animation: fadeUp 1s ease-out forwards;
}
.animate-zoomIn {
  animation: zoomIn 1s ease-out forwards;
}

/* Delay utilities */
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-400 {
  animation-delay: 0.4s;
}
.delay-500 {
  animation-delay: 0.5s;
}
.delay-600 {
  animation-delay: 0.6s;
}
.delay-700 {
  animation-delay: 0.7s;
}
.delay-800 {
  animation-delay: 0.8s;
}
.delay-900 {
  animation-delay: 0.9s;
}
.delay-1000 {
  animation-delay: 1s;
}
.delay-1100 {
  animation-delay: 1.1s;
}
.delay-1200 {
  animation-delay: 1.2s;
}
.delay-1300 {
  animation-delay: 1.3s;
}
.delay-1400 {
  animation-delay: 1.4s;
}
.delay-1500 {
  animation-delay: 1.5s;
}
</style>
