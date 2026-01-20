<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div class="order-1 lg:order-1">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Cost of Studying & Living in the USA
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Tuition Fees (Public Universities):</span> USD 
              <span class="font-semibold">9,000–23,000/year</span> depending on residency and program.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Tuition Fees (Private Universities):</span> USD 
              <span class="font-semibold">31,000–60,000/year</span> depending on the institution.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Community/Two-Year Colleges:</span> USD 
              <span class="font-semibold">3,000–6,000/year</span> for tuition.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Living Costs:</span> USD 
              <span class="font-semibold">10,000–15,000/year</span> depending on city and lifestyle.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Average Total (Study + Living):</span> USD 
              <span class="font-semibold">20,000–75,000/year</span> depending on type of university and location.
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            <span class="text-orange-600 font-medium">Grace International India</span> 
            provides guidance on budgeting, financial aid, and managing expenses for Indian students in the USA.
          </p>

          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Work Opportunities & Post-Study Options
          </h2>

          <ul class="space-y-3 mb-6">
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">On-Campus Work:</span> Indian students on F-1 visas can work part-time 
              <span class="font-semibold">up to 20 hours per week</span> during semesters; full-time during breaks.
            </li>
            <li class="text-gray-700 text-lg">
              <span class="font-semibold text-gray-900">Optional Practical Training (OPT):</span>
              <ul class="ml-6 mt-2 space-y-1">
                <li class="text-gray-600 text-base">Bachelor's or Master's – up to 12 months</li>
                <li class="text-gray-600 text-base">STEM Degrees – can extend for an additional 24 months</li>
              </ul>
            </li>
          </ul>

          <p class="text-gray-700 text-base leading-relaxed mb-6">
            OPT allows Indian students to gain practical work experience in the USA after graduation.
          </p>

          <p class="text-gray-700 text-sm leading-relaxed">
            <span class="font-semibold text-gray-900">Career & Visa Pathways:</span> Indian students can explore H-1B work visas and 
            other employment-based immigration options after completing their studies.
          </p>
        </div>

        <!-- Right Image -->
        <div class="order-2 lg:order-2 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students studying in the USA"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[700px]"
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
