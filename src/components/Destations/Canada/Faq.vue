<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students Graduation"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-xl font-bold text-gray-900 mb-6">
            FAQs – Study in Australia for Indian Students
          </h2>

          <div class="space-y-5">
            <!-- FAQ 1 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q1. What is the cost of living in Australia for Indian students?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                The cost of living in Australia for Indian students (2025) is
                AUD 29,710 per year, as per visa requirements.
              </p>
            </div>

            <!-- FAQ 2 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q2. Can Indian students get PR in Australia?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes, through skilled migration visas after completing studies
                and work experience.
              </p>
            </div>

            <!-- FAQ 3 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q3. Is IELTS mandatory for Australia?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes, an English proficiency test like IELTS, PTE, or TOEFL is
                required.
              </p>
            </div>

            <!-- FAQ 4 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q4. Can Indian students work while studying in Australia?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes, up to
                <span class="font-semibold">48 hours per fortnight</span> during
                study periods.
              </p>
            </div>

            <!-- FAQ 5 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q5. Which intake is best for Indian students to study in
                Australia?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                The February intake is the major one, followed by July. Some
                universities also offer October intakes for select programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/image.png";
</script>

<style scoped></style>
