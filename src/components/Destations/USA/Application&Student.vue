<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-2 lg:order-1">
          <h2 class="text-xl font-bold text-gray-900 mb-5">
            Application & Student Visa Process for the USA
          </h2>

          <ul class="space-y-2.5 mb-5">
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Major Intakes:</span>
              Fall (August/September) and Spring (January), some universities also offer Summer (May/June).
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Requirements:</span>
              English proficiency (TOEFL, IELTS), GRE/GMAT (for some programs), academic transcripts, SOP, LORs, financial proof.
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Student Visa (F-1):</span>
              Requires Form I-20 from the university, proof of funds, SEVIS fee, and a US visa interview.
            </li>
          </ul>

          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            Our team guides students through every step of the US student visa process in Delhi, ensuring smooth application and high success rates.
          </p>

          <h2 class="text-xl font-bold text-gray-900 mb-5">
            Why Choose Grace International India for the USA?
          </h2>

          <ul class="space-y-2 mb-4">
            <li class="text-gray-700 text-sm">
              Direct tie-ups with leading US universities.
            </li>
            <li class="text-gray-700 text-sm">
              End-to-end support: counselling, test prep, applications, visas, scholarships.
            </li>
            <li class="text-gray-700 text-sm">
              Latest guidance on post-study work options, OPT, and H-1B pathways.
            </li>
            <li class="text-gray-700 text-sm">
              Pre-departure sessions + on-ground support from Grace offices in the USA.
            </li>
            <li class="text-gray-700 text-sm">
              Recognized as one of the top US education consultants in Delhi with 20+ years of expertise.
            </li>
          </ul>
        </div>

        <!-- Right Image -->
        <div class="order-1 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="US Application Process"
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
