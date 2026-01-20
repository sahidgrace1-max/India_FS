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
          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Australian Universities Overview
          </h2>
          <ul class="space-y-1.5 mb-5">
            <li class="text-gray-700 text-xs">
              Australia has <span class="font-semibold">43 universities</span>,
              including 2 private universities (Bond and Notre Dame).
            </li>
            <li class="text-gray-700 text-xs">
              International universities such as
              <span class="font-semibold"
                >Carnegie Mellon University and University College London</span
              >
              operate campuses in Adelaide.
            </li>
            <li class="text-gray-700 text-xs">
              Australian universities maintain over
              <span class="font-semibold">7,000 global agreements</span> with
              institutions worldwide.
            </li>
            <li class="text-gray-700 text-xs">
              Many universities offer overseas branch campuses, exchange
              programs, and twinning arrangements.
            </li>
          </ul>

          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Global Recognition & Rankings
          </h2>
          <ul class="space-y-1.5 mb-5">
            <li class="text-gray-700 text-xs">
              <span class="font-semibold">8 universities</span> ranked among the
              <span class="font-semibold">Top 100</span> globally.
            </li>
            <li class="text-gray-700 text-xs">
              Ranked <span class="font-semibold">9th</span> in the world
              university ranking system.
            </li>
            <li class="text-gray-700 text-xs">
              <span class="font-semibold">5</span> Australian cities listed among
              the <span class="font-semibold">top 30 best student cities</span>
              globally.
            </li>
            <li class="text-gray-700 text-xs">
              Over <span class="font-semibold">22,000 courses</span> available
              across <span class="font-semibold">1,100 institutions</span>.
            </li>
          </ul>

          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Role of Australian Universities
          </h2>
          <ul class="space-y-1.5 mb-4">
            <li class="text-gray-700 text-xs">Storing knowledge</li>
            <li class="text-gray-700 text-xs">Transferring knowledge to others</li>
            <li class="text-gray-700 text-xs">Creating knowledge through research</li>
          </ul>

          <p class="text-gray-500 text-[10px] italic">
            Australia has produced
            <span class="font-semibold">15 Nobel Prize Laureates</span> across
            various academic and research disciplines, supported by strong
            government investment in higher education.
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
