<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Graduate Student in New Zealand"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[1000px]"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-2xl font-bold text-gray-900 text-lg mb-6">
            Top Universities in New Zealand
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">The University of Auckland</li>
            <li class="text-gray-700 text-lg">AUT University</li>
            <li class="text-gray-700 text-lg">Lincoln University</li>
            <li class="text-gray-700 text-lg">
              Victoria University of Wellington
            </li>
            <li class="text-gray-700 text-lg">Massey University</li>
            <li class="text-gray-700 text-lg">The University of Waikato</li>
            <li class="text-gray-700 text-lg">The University of Canterbury</li>
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
              Engineering (Civil, Mechanical, Software)
            </li>
            <li class="text-gray-700 text-lg">
              Health Sciences (Nursing, Public Health, Pharmacy)
            </li>
            <li class="text-gray-700 text-lg">
              Hospitality & Tourism Management
            </li>
            <li class="text-gray-700 text-lg">Creative Arts & Design</li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Scholarships for Indian Students
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900"
                >New Zealand Excellence Awards</span
              >
              – Fully funded scholarships for high-achieving international
              students.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900"
                >Commonwealth Scholarships</span
              >
              – For outstanding students from Commonwealth countries.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold  text-lg text-gray-900"
                >University Merit Scholarships</span
              >
              – Offered by universities like Auckland, Waikato, and Canterbury.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Partial Tuition Waivers</span
              >
              – Available for top-performing Indian students.
            </li>
          </ul>

          <p class="text-gray-600 text-base italic text-lg">
            Tip: Strong IELTS or PTE scores improve eligibility for top
            scholarships in New Zealand.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/newzealand1.png";
</script>

<style scoped></style>
