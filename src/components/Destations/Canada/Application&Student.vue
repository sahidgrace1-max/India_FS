<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-2 lg:order-1">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Application & Student Visa Process for Canada
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Major Intakes:</span>
              September is the main intake, with January and May start dates for select programs.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Requirements:</span>
              Academic transcripts, proof of English proficiency (IELTS, PTE, TOEFL), statement of purpose (SOP), letters of recommendation (LORs), and financial proof.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Study Permit (Student Visa):</span>
              Required for studies longer than 6 months. Must show proof of acceptance, sufficient funds for tuition + living, and a valid passport.
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Grace International India helps students with every step of the Canada student visa process, from document preparation to online application guidance and visa submission support.
          </p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Grace International India for Canada?
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              Direct tie-ups with top Canadian universities and colleges.
            </li>
            <li class="text-gray-700 text-lg">
              End-to-end support: counselling, test prep, applications, visas, scholarships.
            </li>
            <li class="text-gray-700 text-lg">
              Guidance on post-study work permits and PR pathways in Canada.
            </li>
            <li class="text-gray-700 text-lg">
              Pre-departure guidance + assistance with accommodation and settling in Canada.
            </li>
            <li class="text-gray-700 text-lg">
              Recognized as one of the leading Canada education consultants in India with 20+ years of experience.
            </li>
          </ul>
        </div>

        <!-- Right Image -->
        <div class="order-1 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Canada Application Process"
           class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[600px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import bgImage from "@/assets/canada4.png";
</script>

<style scoped></style>
