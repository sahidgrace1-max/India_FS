<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="australia2"
            alt="Students studying in Australia"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[800px]"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Cost of Studying in Australia
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Foundation Studies:</span
              >
              AUD <span class="font-semibold">9,000–14,000/year</span> (approx.)
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900"
                >Bachelor's Degree:</span
              >
              AUD
              <span class="font-semibold">15,000–33,000/year</span> (approx.)
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Laboratory-based Degrees:</span
              >
              AUD
              <span class="font-semibold">14,000–35,000/year</span> (approx.)
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Postgraduate & Master’s:</span
              >
              AUD
              <span class="font-semibold">20,000–37,000/year</span> (approx.)
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6 text-lg">
            International students are required to pay a tuition deposit (not
            more than <span class="font-semibold">50%</span> of the total course
            fees) before the visa stage, as per the ESOS Act.
          </p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Accommodation & Living Costs
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg"
                >Homestay / Farmstay:</span
              >
              AUD <span class="font-semibold">110–270/week</span>
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900 text-lg"
                >University Residential Colleges:</span
              >
              AUD <span class="font-semibold text-lg ">190–280/week</span>
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900 text-lg"
                >Private or Church-owned Hostels:</span
              >
              AUD <span class="font-semibold text-lg">80–135/week</span>
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900 text-lg"
                >Shared Accommodation:</span
              >
              AUD <span class="font-semibold text-lg">50–160/week</span>
            </li>
          </ul>

          <h2 class="text-3xl font-bold text-gray-900 mb-6 text-lg">
            Work & Visa Regulations
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900 text-lg">Part-Time Work:</span>
              Up to <span class="font-semibold text-lg">40 hours per fortnight</span>
              during semesters and full-time during scheduled breaks.
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900 text-lg"
                >Post-Study Work Visa (Subclass 485):</span
              >
              <ul class="ml-6 mt-2 space-y-1">
                <li class="text-gray-600 text-lg">
                  Graduate Work Stream – 18 months
                </li>
                <li class="text-gray-600 text-lg">
                  Post-Study Work Stream – 2 to 4 years (based on qualification)
                </li>
              </ul>
            </li>
          </ul>

          <p class="text-gray-700 text-lg leading-relaxed text-lg">
            After gaining Australian work experience, international graduates
            may be eligible to apply for
            <span class="font-semibold text-gray-900 text-lg"
              >skilled migration and PR pathways</span
            >
            under Australia’s migration framework.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import australia2 from "@/assets/australia2.png";
</script>

<style scoped></style>
