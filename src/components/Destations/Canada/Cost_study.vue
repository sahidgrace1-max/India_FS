<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-poppins">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-1 lg:order-1">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Cost of Studying in Canada
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Tuition Fees:</span>
              CAD <span class="font-semibold">15,000–30,000/year</span>
              depending on the program and institution.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Living Costs:</span>
              CAD <span class="font-semibold">10,000–15,000/year</span>
              depending on city and lifestyle.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900"
                >Average Total (Study + Living):</span
              >
              CAD
              <span class="font-semibold">25,000–45,000/year</span>.
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            <span class="text-orange-600 font-medium"
              >Grace International India</span
            >
            helps students plan budgets, choose affordable institutions, and
            manage living expenses effectively in Canada.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Work & PR Opportunities
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Part-Time Work:</span>
              Up to
              <span class="font-semibold">20 hours per week</span> during study
              sessions and full-time during scheduled breaks.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900"
                >Post-Graduation Work Permit (PGWP):</span
              >
              Allows students to work in Canada for up to
              <span class="font-semibold">3 years</span> after completing an
              eligible program.
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            Canadian work experience gained through PGWP significantly improves
            employability and future immigration prospects.
          </p>

          <p class="text-gray-700 text-base leading-relaxed">
            <span class="font-semibold text-gray-900">PR Pathways:</span>
            International students can apply for permanent residency through
            programs such as
            <span class="font-semibold"
              >Express Entry and Provincial Nominee Programs (PNP)</span
            >
            after gaining skilled work experience.
          </p>
        </div>

        <!-- Right Image -->
        <div class="order-2 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students studying in Canada"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[550px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/canada.png";
</script>

<style scoped></style>
