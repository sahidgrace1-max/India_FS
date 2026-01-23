<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="australia1"
            alt="Graduate Student in Australia"
            class="rounded-lg shadow-lg w-full h-auto object-contain"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Australian Universities Overview
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              Australia has <span class="font-semibold">43 universities</span>,
              including 2 private universities (Bond and Notre Dame).
            </li>
            <li class="text-gray-700 text-lg">
              International universities such as
              <span class="font-semibold"
                >Carnegie Mellon University and University College London</span
              >
              operate campuses in Adelaide.
            </li>
            <li class="text-gray-700 text-lg">
              Australian universities maintain over
              <span class="font-semibold">7,000 global agreements</span> with
              institutions worldwide.
            </li>
            <li class="text-gray-700 text-lg">
              Many universities offer overseas branch campuses, exchange
              programs, and twinning arrangements.
            </li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Global Recognition & Rankings
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-base">
              <span class="font-semibold text-lg">8 universities</span> ranked
              among the
              <span class="font-semibold text-lg">Top 100</span> globally.
            </li>
            <li class="text-gray-700 text-base">
              Ranked <span class="font-semibold text-lg">9th</span> in the world
              university ranking system.
            </li>
            <li class="text-gray-700 text-base">
              <span class="font-semibold">5</span> Australian cities listed
              among the
              <span class="font-semibold">top 30 best student cities</span>
              globally.
            </li>
            <li class="text-gray-700 text-xs">
              Over <span class="font-semibold">22,000 courses</span> available
              across <span class="font-semibold">1,100 institutions</span>.
            </li>
          </ul>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Role of Australian Universities
          </h2>
          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-base text-lg">Storing knowledge</li>
            <li class="text-gray-700 text-base text-lg">
              Transferring knowledge to others
            </li>
            <li class="text-gray-700 text-lg">
              Creating knowledge through research
            </li>
          </ul>

          <p class="text-gray-600 text-base italic">
            Australia has produced
            <span class="font-semibold text-lg">15 Nobel Prize Laureates</span>
            across various academic and research disciplines, supported by
            strong government investment in higher education.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/image.png";
import australia1 from "@/assets/australia1.png";
</script>

<style scoped></style>
