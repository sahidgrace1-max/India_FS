<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-1 lg:order-1">
          <h2 class="text-xl font-bold text-gray-900 mb-5">
            Cost of Studying & Living in the UK
          </h2>

          <ul class="space-y-2.5 mb-5">
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Tuition Fees:</span>
              <span class="font-semibold">£9,500–£13,000/year</span> for
              undergraduate courses and
              <span class="font-semibold">£12,000–£15,000/year</span> for
              postgraduate programs.
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900"
                >Living Costs (London – UKVI Requirement):</span
              >
              <span class="font-semibold">£1,265 per month</span> (up to a
              maximum of 9 months).
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900"
                >Average Total (Study + Living):</span
              >
              <span class="font-semibold">£20,000–£30,000 per year</span>
              depending on location and lifestyle.
            </li>
          </ul>

          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            <span class="text-orange-600 font-medium"
              >Grace International India</span
            >
            assists Indian students with accurate financial planning, budgeting,
            and UKVI-compliant documentation for studying in the UK.
          </p>

          <h2 class="text-xl font-bold text-gray-900 mb-5">
            Work & Career Opportunities
          </h2>

          <ul class="space-y-2.5 mb-4">
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Part-Time Work:</span>
              Up to
              <span class="font-semibold">20 hours per week</span> during term
              time and full-time during holidays.
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900"
                >Post-Study Work Visa (Graduate Route):</span
              >
              <ul class="ml-6 mt-2 space-y-1">
                <li class="text-gray-600 text-sm">Bachelor’s – 2 years</li>
                <li class="text-gray-600 text-sm">Master’s – 2 years</li>
                <li class="text-gray-600 text-sm">PhD – 3 years</li>
              </ul>
            </li>
          </ul>

          <p class="text-gray-700 text-sm leading-relaxed mb-5">
            The UK Graduate Route allows international students to gain valuable
            work experience after completing their studies.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed">
            <span class="font-semibold text-gray-900">Career Pathways:</span>
            UK work experience significantly improves global employability,
            especially in sectors like IT, healthcare, finance, engineering, and
            business management.
          </p>
        </div>

        <!-- Right Image -->
        <div class="order-2 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students studying in the UK"
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
