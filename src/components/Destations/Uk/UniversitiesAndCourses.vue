<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Graduate Student in the UK"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[800px]"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Top Universities in the UK
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">University of Oxford</li>
            <li class="text-gray-700 text-lg">University of Cambridge</li>
            <li class="text-gray-700 text-lg">Imperial College London</li>
            <li class="text-gray-700 text-lg">London School of Economics (LSE)</li>
            <li class="text-gray-700 text-lg">University College London (UCL)</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Popular Courses for Indian Students
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              Business & Management (MBA, Finance, Marketing)
            </li>
            <li class="text-gray-700 text-lg">
              IT & Computer Science (AI, Data Science, Cybersecurity)
            </li>
            <li class="text-gray-700 text-lg">
              Engineering (Mechanical, Civil, Electrical, Software)
            </li>
            <li class="text-gray-700 text-lg">
              Healthcare & Life Sciences (Public Health, Nursing, Biomedical)
            </li>
            <li class="text-gray-700 text-lg">
              Law, Media, Design & Creative Arts
            </li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Scholarships for Indian Students
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Chevening Scholarships</span>
              – Fully funded UK government scholarships.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Commonwealth Scholarships</span>
              – For high-achieving students from Commonwealth countries.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">GREAT Scholarships</span>
              – £10,000 tuition fee support for selected UK universities.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">University Merit Scholarships</span>
              – Offered by UK institutions based on academic excellence.
            </li>
          </ul>

          <p class="text-gray-600 text-base italic">
            Tip: Strong IELTS or equivalent English scores significantly improve
            admission and scholarship chances in UK universities.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/uk.png";
</script>

<style scoped></style>
