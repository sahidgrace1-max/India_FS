<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div
          class="order-2 lg:order-1 flex items-center justify-center opacity-0 animate-zoomIn delay-100"
        >
          <img
            :src="bgImage"
            alt="Graduate Student in the UK"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[800px]"
          />
        </div>

        <!-- Right Content -->
        <div
          class="order-1 lg:order-2 space-y-6 opacity-0 animate-fadeUp delay-200"
        >
          <!-- Top Universities -->
          <h2
            class="text-2xl font-bold text-gray-900 mb-6 opacity-0 animate-fadeUp delay-300"
          >
            Top Universities in the UK
          </h2>
          <ul class="space-y-3 mb-6">
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-400"
            >
              University of Oxford
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-500"
            >
              University of Cambridge
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-600"
            >
              Imperial College London
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-700"
            >
              London School of Economics (LSE)
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-800"
            >
              University College London (UCL)
            </li>
          </ul>

          <!-- Popular Courses -->
          <h2
            class="text-2xl font-bold text-gray-900 mb-6 opacity-0 animate-fadeUp delay-900"
          >
            Popular Courses for Indian Students
          </h2>
          <ul class="space-y-3 mb-6">
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1000"
            >
              Business & Management (MBA, Finance, Marketing)
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1100"
            >
              IT & Computer Science (AI, Data Science, Cybersecurity)
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1200"
            >
              Engineering (Mechanical, Civil, Electrical, Software)
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1300"
            >
              Healthcare & Life Sciences (Public Health, Nursing, Biomedical)
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1400"
            >
              Law, Media, Design & Creative Arts
            </li>
          </ul>

          <!-- Scholarships -->
          <h2
            class="text-2xl font-bold text-gray-900 mb-6 opacity-0 animate-fadeUp delay-1500"
          >
            Scholarships for Indian Students
          </h2>
          <ul class="space-y-3 mb-6">
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1600"
            >
              <span class="font-semibold text-gray-900"
                >Chevening Scholarships</span
              >
              – Fully funded UK government scholarships.
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1700"
            >
              <span class="font-semibold text-gray-900"
                >Commonwealth Scholarships</span
              >
              – For high-achieving students from Commonwealth countries.
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1800"
            >
              <span class="font-semibold text-gray-900"
                >GREAT Scholarships</span
              >
              – £10,000 tuition fee support for selected UK universities.
            </li>
            <li
              class="text-gray-700 text-lg opacity-0 animate-fadeUp delay-1900"
            >
              <span class="font-semibold text-gray-900"
                >University Merit Scholarships</span
              >
              – Offered by UK institutions based on academic excellence.
            </li>
          </ul>

          <p
            class="text-gray-600 text-base italic opacity-0 animate-fadeUp delay-2000"
          >
            <span class="text-lg">
              Tip: Strong IELTS or equivalent English scores significantly
              improve admission and scholarship chances in UK
              universities.</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/uk.png";
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
.delay-1600 {
  animation-delay: 1.6s;
}
.delay-1700 {
  animation-delay: 1.7s;
}
.delay-1800 {
  animation-delay: 1.8s;
}
.delay-1900 {
  animation-delay: 1.9s;
}
.delay-2000 {
  animation-delay: 2s;
}
</style>
