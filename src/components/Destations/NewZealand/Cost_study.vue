<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-1 lg:order-1">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Cost of Studying & Living in New Zealand
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Tuition Fees:</span>
              NZ$20,000/year for Arts & Social Sciences, NZ$25,000/year for
              Science & Engineering, NZ$75,000/year for Dentistry & Medicine.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Living Costs:</span>
              On average NZ$120–$200 per week depending on accommodation type
              (shared flat, private flat, student residence).
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900"
                >Estimated Total (Study + Living):</span
              >
              Approximately NZ$25,000–NZ$30,000 per year.
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            <span class="text-orange-600 font-medium"
              >Grace International India</span
            >
            assists Indian students with budgeting, financial planning, and
            documentation for studying in New Zealand.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Work & Career Opportunities
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Part-Time Work:</span>
              Up to 20 hours per week during study and full-time during
              holidays.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900"
                >Post-Study Work Rights:</span
              >
              Students can apply for a work visa to gain professional experience
              after graduation, typically 1–3 years depending on qualification.
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Work experience in New Zealand improves employability, especially in
            sectors such as IT, healthcare, engineering, business management,
            hospitality, and tourism.
          </p>

          <p class="text-gray-700 text-base leading-relaxed">
            <span class="font-semibold text-gray-900">Career Pathways:</span>
            International students can gain valuable skills, networking
            opportunities, and professional exposure through part-time work and
            post-study employment, helping build global careers.
          </p>
        </div>

        <!-- Right Image -->
        <div class="order-2 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students studying in New Zealand"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[750px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/newzealand3.png";
</script>

<style scoped></style>
