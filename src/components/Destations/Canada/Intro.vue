<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Section -->
        <div class="order-1 lg:order-1">
          <img
            :src="bgImage"
            alt="UK University Campus"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <!-- Content Section -->
        <div class="order-2 lg:order-2">
          <div class="prose max-w-none">
            <p class="text-gray-700 text-base leading-relaxed mb-6">
              The United Kingdom (UK) is one of the top study abroad
              destinations for Indian students in 2025. With globally ranked
              universities, 1-year master's programs, and excellent post-study
              work visa opportunities, the UK offers Indian students a
              fast-track route to international education, career growth, and PR
              pathways.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Why Study in the UK?
            </h2>

            <ul class="space-y-4">
              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Top Universities</span
                >
                – Oxford, Cambridge, and 24
                <span class="font-semibold">Russell Group universities</span>
                are globally ranked.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >1-Year Master's Degrees</span
                >
                – Save time and money with shorter postgraduate programs.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Post-Study Work Visa (Graduate Route)</span
                >
                – Stay back for <span class="font-semibold">2 years</span> after
                graduation or <span class="font-semibold">3 years</span> after
                PhD.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Scholarships for Indians</span
                >
                – Chevening, Commonwealth, GREAT Scholarships, and many
                university-specific awards.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Diverse Student Community</span
                >
                – Over
                <span class="font-semibold">600,000 international students</span
                >, including 140,000+ Indians.
              </li>
            </ul>

            <p class="text-gray-700 text-base leading-relaxed mt-6">
              Indian students in the UK also benefit from career opportunities
              in finance, healthcare, IT, engineering, and creative industries –
              sectors with high employability rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/image.png";
</script>

<style scoped></style>
