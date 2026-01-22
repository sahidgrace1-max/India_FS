<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div
          class="order-2 lg:order-1 space-y-6 opacity-0 animate-fadeUp delay-100"
        >
          <h2
            class="text-3xl font-bold text-gray-900 mb-6 opacity-0 animate-fadeUp delay-200"
          >
            Application & Student Visa Process for the UK
          </h2>

          <ul class="space-y-3 mb-6">
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-300"
            >
              <span class="font-semibold text-lg text-gray-900">Major Intakes:</span>
              <span class="text-lg">January, September (main intake), and May (select universities).</span>
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-400"
            >
              <span class="font-semibold text-lg text-gray-900">Requirements:</span>
              <span class="text-lg">English proficiency (IELTS, TOEFL, PTE), academic transcripts,
              Statement of Purpose (SOP), Letters of Recommendation (LORs), and
              financial proof.</span>
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-500"
            >
              <span class="font-semibold text-gray-900"
                >UK Student Visa (Student Route):</span
              >
              <span class="text-lg">Requires an unconditional offer letter, Confirmation of Acceptance
              for Studies (CAS), proof of funds, and English language evidence.</span>
            </li>
          </ul>

          <p
            class="text-gray-700 text-base leading-relaxed mb-6 opacity-0 animate-fadeUp delay-600"
          >
            <span class="text-lg">Our experts guide Indian students through the complete UK
            application and student visa process, ensuring accuracy, compliance,
            and faster approvals.</span>
          </p>

          <h2
            class="text-3xl font-bold text-gray-900 mb-6 opacity-0 animate-fadeUp delay-700"
          >
            Why Choose Grace International India for the UK?
          </h2>

          <ul class="space-y-3 mb-6">
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-800"
            >
              Strong partnerships with top UK universities and colleges.
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-900"
            >
              Complete support: counselling, test preparation, applications,
              visas, and scholarships.
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1000"
            >
              Expert guidance on Graduate Route (post-study work visa).
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1100"
            >
              Pre-departure briefings and ongoing student support in the UK.
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1200"
            >
              Trusted UK education consultants in India with decades of
              experience and high visa success rates.
            </li>
          </ul>
        </div>

        <!-- Right Image -->
        <div
          class="order-1 lg:order-2 flex items-center justify-center opacity-0 animate-zoomIn delay-1300"
        >
          <img
            :src="bgImage"
            alt="UK Student Visa Process"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[750px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/freevisaprocessing.png";
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
</style>
