<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div
          class="order-2 lg:order-1 flex items-center justify-center opacity-0 animate-zoomIn delay-100"
        >
          <img
            :src="faqImage"
            alt="Students Graduation in the UK"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[500px]"
          />
        </div>

        <!-- Right Content -->
        <div
          class="order-1 lg:order-2 space-y-6 opacity-0 animate-fadeUp delay-200"
        >
          <h2
            class="text-3xl font-bold text-gray-900 mb-8 opacity-0 animate-fadeUp delay-300"
          >
            FAQs – Study in the UK for Indian Students
          </h2>

          <div class="space-y-5">
            <!-- FAQ 1 -->
            <div class="opacity-0 animate-fadeUp delay-400">
              <h3 class=" font-semibold text-gray-900 mb-2 text-lg">
                Q1. What is the cost of living in the UK for Indian students?
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                The UK student visa requires Indian students to show living
                expenses of £1,265 per month in London (up to a maximum of
                £11,385 for 9 months). Costs may be lower outside London.
              </p>
            </div>

            <!-- FAQ 2 -->
            <div class="opacity-0 animate-fadeUp delay-500">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Q2. Can Indian students get PR in the UK?
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Yes. After completing studies, students can work under the
                Graduate Route visa and later apply for Skilled Worker visas,
                which can lead to permanent settlement.
              </p>
            </div>

            <!-- FAQ 3 -->
            <div class="opacity-0 animate-fadeUp delay-600">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Q3. Is IELTS mandatory to study in the UK?
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Most UK universities require IELTS or an equivalent English
                language test, though some institutions may waive it based on
                prior education.
              </p>
            </div>

            <!-- FAQ 4 -->
            <div class="opacity-0 animate-fadeUp delay-700">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Q4. Can Indian students work while studying in the UK?
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Yes, students can work up to
                <span class="font-semibold text-lg">20 hours per week</span> during term
                time and full-time during vacations.
              </p>
            </div>

            <!-- FAQ 5 -->
            <div class="opacity-0 animate-fadeUp delay-800">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Q5. Which intake is best for Indian students to study in the UK?
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                The September intake is the main intake in the UK, followed by
                January. Some universities also offer May intakes for selected
                programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import faqImage from "@/assets/FAQ.png";
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
</style>
