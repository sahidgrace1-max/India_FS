<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-2 lg:order-1">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Application & Student Visa Process for the USA
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Major Intakes:</span>
              Fall (August/September) and Spring (January), some universities also offer Summer (May/June).
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Requirements:</span>
              English proficiency (TOEFL, IELTS), GRE/GMAT (for some programs), academic transcripts, SOP, LORs, financial proof.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Student Visa (F-1):</span>
              Requires Form I-20 from the university, proof of funds, SEVIS fee, and a US visa interview.
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Our team guides students through every step of the US student visa process in Delhi, ensuring smooth application and high success rates.
          </p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Grace International India for the USA?
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              Direct tie-ups with leading US universities.
            </li>
            <li class="text-gray-700 text-lg">
              End-to-end support: counselling, test prep, applications, visas, scholarships.
            </li>
            <li class="text-gray-700 text-lg">
              Latest guidance on post-study work options, OPT, and H-1B pathways.
            </li>
            <li class="text-gray-700 text-lg">
              Pre-departure sessions + on-ground support from Grace offices in the USA.
            </li>
            <li class="text-gray-700 text-lg">
              Recognized as one of the top US education consultants in Delhi with 20+ years of expertise.
            </li>
          </ul>
        </div>

        <!-- Right Image -->
        <div class="order-1 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="US Application Process"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[650px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/usa4.png";
</script>

<style scoped></style>
