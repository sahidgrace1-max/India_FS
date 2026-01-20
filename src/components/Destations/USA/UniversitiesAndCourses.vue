<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Graduate Student in the USA"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[800px]"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Top Universities in the USA
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">Harvard University</li>
            <li class="text-gray-700 text-lg">Massachusetts Institute of Technology (MIT)</li>
            <li class="text-gray-700 text-lg">Stanford University</li>
            <li class="text-gray-700 text-lg">University of California, Los Angeles (UCLA)</li>
            <li class="text-gray-700 text-lg">University of Michigan</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Popular Courses for Indian Students
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              Engineering (Mechanical, Electrical, Software)
            </li>
            <li class="text-gray-700 text-lg">Business & Management (including MBA)</li>
            <li class="text-gray-700 text-lg">Computer Science & IT</li>
            <li class="text-gray-700 text-lg">Health Sciences (Nursing, Public Health, Pharmacy)</li>
            <li class="text-gray-700 text-lg">Liberal Arts & Social Sciences</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Scholarships for Indian Students
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Fulbright Foreign Student Program</span> – Fully funded for graduate studies.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">AAUW International Fellowships</span> – For women pursuing graduate degrees.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">University Merit Scholarships</span> – Offered by institutions like MIT, UCLA, and Michigan.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Partial Tuition Waivers</span> – For high-achieving Indian students.
            </li>
          </ul>

          <p class="text-gray-600 text-base italic">
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
