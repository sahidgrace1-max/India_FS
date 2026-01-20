<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Graduate Student in the UK"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Top Universities in the UK
          </h2>
          <ul class="space-y-1.5 mb-5">
            <li class="text-gray-700 text-xs">University of Oxford</li>
            <li class="text-gray-700 text-xs">University of Cambridge</li>
            <li class="text-gray-700 text-xs">Imperial College London</li>
            <li class="text-gray-700 text-xs">London School of Economics (LSE)</li>
            <li class="text-gray-700 text-xs">University College London (UCL)</li>
          </ul>

          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Popular Courses for Indian Students
          </h2>
          <ul class="space-y-1.5 mb-5">
            <li class="text-gray-700 text-xs">
              Business & Management (MBA, Finance, Marketing)
            </li>
            <li class="text-gray-700 text-xs">
              IT & Computer Science (AI, Data Science, Cybersecurity)
            </li>
            <li class="text-gray-700 text-xs">
              Engineering (Mechanical, Civil, Electrical, Software)
            </li>
            <li class="text-gray-700 text-xs">
              Healthcare & Life Sciences (Public Health, Nursing, Biomedical)
            </li>
            <li class="text-gray-700 text-xs">
              Law, Media, Design & Creative Arts
            </li>
          </ul>

          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Scholarships for Indian Students
          </h2>
          <ul class="space-y-2 mb-4">
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Chevening Scholarships</span>
              – Fully funded UK government scholarships.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Commonwealth Scholarships</span>
              – For high-achieving students from Commonwealth countries.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">GREAT Scholarships</span>
              – £10,000 tuition fee support for selected UK universities.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">University Merit Scholarships</span>
              – Offered by UK institutions based on academic excellence.
            </li>
          </ul>

          <p class="text-gray-500 text-[10px] italic">
            Tip: Strong IELTS or equivalent English scores significantly improve
            admission and scholarship chances in UK universities.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/image.png";
</script>

<style scoped></style>
