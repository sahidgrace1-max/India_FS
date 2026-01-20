<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Graduate Student in the USA"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Top Universities in the USA
          </h2>
          <ul class="space-y-1.5 mb-5">
            <li class="text-gray-700 text-xs">Harvard University</li>
            <li class="text-gray-700 text-xs">Massachusetts Institute of Technology (MIT)</li>
            <li class="text-gray-700 text-xs">Stanford University</li>
            <li class="text-gray-700 text-xs">University of California, Los Angeles (UCLA)</li>
            <li class="text-gray-700 text-xs">University of Michigan</li>
          </ul>

          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Popular Courses for Indian Students
          </h2>
          <ul class="space-y-1.5 mb-5">
            <li class="text-gray-700 text-xs">
              Engineering (Mechanical, Electrical, Software)
            </li>
            <li class="text-gray-700 text-xs">Business & Management (including MBA)</li>
            <li class="text-gray-700 text-xs">Computer Science & IT</li>
            <li class="text-gray-700 text-xs">Health Sciences (Nursing, Public Health, Pharmacy)</li>
            <li class="text-gray-700 text-xs">Liberal Arts & Social Sciences</li>
          </ul>

          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Scholarships for Indian Students
          </h2>
          <ul class="space-y-2 mb-4">
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Fulbright Foreign Student Program</span> – Fully funded for graduate studies.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">AAUW International Fellowships</span> – For women pursuing graduate degrees.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">University Merit Scholarships</span> – Offered by institutions like MIT, UCLA, and Michigan.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Partial Tuition Waivers</span> – For high-achieving Indian students.
            </li>
          </ul>

          <p class="text-gray-500 text-[10px] italic">
            Tip: Strong GRE, TOEFL, or IELTS scores increase eligibility for top USA scholarships for Indian students.
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
