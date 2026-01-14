<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img 
            :src="bgImage" 
            alt="Graduate Student in Australia"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-lg font-bold text-gray-900 mb-4">Top Universities in Australia</h2>
          <ul class="space-y-1.5 mb-5">
            <li class="text-gray-700 text-xs">University of Melbourne</li>
            <li class="text-gray-700 text-xs">Australian National University (ANU)</li>
            <li class="text-gray-700 text-xs">University of Sydney</li>
            <li class="text-gray-700 text-xs">Monash University</li>
            <li class="text-gray-700 text-xs">University of Queensland</li>
          </ul>

          <h2 class="text-lg font-bold text-gray-900 mb-4">Popular Courses for Indian Students</h2>
          <ul class="space-y-1.5 mb-5">
            <li class="text-gray-700 text-xs">Business & Management (including MBA)</li>
            <li class="text-gray-700 text-xs">IT & Computer Science</li>
            <li class="text-gray-700 text-xs">Engineering (Civil, Mechanical, Software)</li>
            <li class="text-gray-700 text-xs">Health Sciences (Nursing, Public Health, Pharmacy)</li>
            <li class="text-gray-700 text-xs">Hospitality & Tourism Management</li>
          </ul>

          <h2 class="text-lg font-bold text-gray-900 mb-4">Scholarships for Indian Students</h2>
          <ul class="space-y-2 mb-4">
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Australia Awards Scholarships</span> – Fully funded, highly competitive.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Destination Australia Scholarships</span> – For regional universities.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">University Merit Scholarships</span> – Offered by institutions like Monash, 
              University of Melbourne, and Sydney.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Partial Tuition Waivers</span> – Available for high-achieving Indian students.
            </li>
          </ul>

          <p class="text-gray-500 text-[10px] italic">
            Tip: Strong IELTS, PTE, or TOEFL scores increase eligibility for top Australia scholarships for Indian students.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from '@/assets/image.png'
</script>

<style scoped>
</style>
