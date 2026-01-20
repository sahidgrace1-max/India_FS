<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-2 lg:order-1">
          <h2 class="text-xl font-bold text-gray-900 mb-5">
            Application & Student Visa Process
          </h2>

          <ul class="space-y-2.5 mb-5">
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Major Intakes:</span>
              January, September (main intake), and May (select universities).
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900">Requirements:</span>
              English proficiency (IELTS, TOEFL, PTE), academic transcripts,
              Statement of Purpose (SOP), Letters of Recommendation (LORs),
              and financial proof.
            </li>
            <li class="text-gray-700 text-sm">
              <span class="font-semibold text-gray-900"
                >UK Student Visa (Student Route):</span
              >
              Requires an unconditional offer letter, Confirmation of
              Acceptance for Studies (CAS), proof of funds, and English
              language evidence.
            </li>
          </ul>

          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            Our experts guide Indian students through the complete UK
            application and student visa process, ensuring accuracy,
            compliance, and faster approvals.
          </p>

          <h2 class="text-xl font-bold text-gray-900 mb-5">
            Why Choose Grace International India for the UK?
          </h2>

          <ul class="space-y-2 mb-4">
            <li class="text-gray-700 text-sm">
              Strong partnerships with top UK universities and colleges.
            </li>
            <li class="text-gray-700 text-sm">
              Complete support: counselling, test preparation, applications,
              visas, and scholarships.
            </li>
            <li class="text-gray-700 text-sm">
              Expert guidance on Graduate Route (post-study work visa).
            </li>
            <li class="text-gray-700 text-sm">
              Pre-departure briefings and ongoing student support in the UK.
            </li>
            <li class="text-gray-700 text-sm">
              Trusted UK education consultants in India with decades of
              experience and high visa success rates.
            </li>
          </ul>
        </div>

        <!-- Right Image -->
        <div class="order-1 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="UK Student Visa Process"
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
