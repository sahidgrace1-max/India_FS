<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-1 lg:order-1">
          <h2 class="text-xl font-bold text-gray-900 mb-5">
            Cost of Studying & Living in Australia
          </h2>

          <ul class="space-y-2.5 mb-5">
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Tuition Fees:</span> AUD
              <span class="font-semibold">22,000–45,000/year</span> depending on
              the course.
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900"
                >Living Costs (Visa Requirement 2025):</span
              >
              AUD <span class="font-semibold">29,710/year</span> (official
              minimum).
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900"
                >Average Total (Study + Living):</span
              >
              AUD
              <span class="font-semibold">40,000–60,000/year</span> depending on
              location and lifestyle.
            </li>
          </ul>

          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            <span class="text-orange-600 font-medium"
              >Grace International India</span
            >
            provides detailed guidance on budgeting and managing living expenses
            in Australia for Indian students.
          </p>

          <h2 class="text-xl font-bold text-gray-900 mb-5">
            Work & PR Opportunities
          </h2>

          <ul class="space-y-2.5 mb-4">
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Part-Time Work:</span>
              Up to
              <span class="font-semibold">48 hours per fortnight</span> during
              study sessions; full-time during holidays.
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900"
                >Post-Graduation Work Visa (Subclass 485):</span
              >
              <ul class="ml-6 mt-2 space-y-1">
                <li class="text-gray-600 text-sm">Bachelor's – 2 years</li>
                <li class="text-gray-600 text-sm">Master's – 3 years</li>
                <li class="text-gray-600 text-sm">PhD – 4 years</li>
              </ul>
            </li>
          </ul>

          <p class="text-gray-700 text-sm leading-relaxed mb-5">
            Graduate Work Stream and Temporary Graduate Visa options make it
            easier for Indian students to gain Australian work experience.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed">
            <span class="font-semibold text-gray-900">PR Pathways:</span> Indian
            students can apply for
            <span class="font-semibold">skilled migration visas</span> after
            gaining work experience in Australia.
          </p>
        </div>

        <!-- Right Image -->
        <div class="order-2 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students studying in Australia"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/aus.jpeg";
</script>

<style scoped></style>
