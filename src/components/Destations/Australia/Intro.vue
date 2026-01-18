<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div>
          <p class="text-gray-700 text-xs leading-relaxed mb-4">
            Australia is one of the top study abroad destinations for Indian
            students in 2025. With globally ranked universities, updated
            post-study work visa options, and PR pathways, studying in Australia
            offers Indian students a chance to build successful global careers.
          </p>

          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Why Study in Australia?
          </h2>

          <ul class="space-y-2 mb-4">
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900"
                >Top-Ranked Universities</span
              >
              – 7 Australian universities are ranked in the
              <span class="font-semibold">Top 100 QS World Rankings 2025</span>.
            </li>

            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900"
                >Post-Study Work Visa (Subclass 485)</span
              >
              – Stay back for <span class="font-semibold">2-4 years</span> after
              graduation depending on your degree level.
            </li>

            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900"
                >Safe & Multicultural</span
              >
              – Australia is known for its welcoming, diverse, and
              student-friendly environment.
            </li>

            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Popular Cities</span> –
              Sydney, Melbourne, Brisbane, Perth, Adelaide, and Canberra are
              among the best cities for Indian students.
            </li>
          </ul>

          <p class="text-gray-700 text-xs leading-relaxed">
            Indian students also benefit from Australia's strong job market,
            with career opportunities in IT, healthcare, engineering, business,
            and hospitality.
          </p>
        </div>

        <!-- Right Image -->
        <div class="flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Study in Australia"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/image.png";
</script>

<style scoped></style>
