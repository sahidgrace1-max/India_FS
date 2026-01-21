<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src=faqImage
            alt="Students Graduation in the UK"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[500px]"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">
            FAQs – Study in the UK for Indian Students
          </h2>

          <div class="space-y-5">
            <!-- FAQ 1 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q1. What is the cost of living in the UK for Indian students?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                The UK student visa requires Indian students to show living
                expenses of £1,265 per month in London (up to a maximum of
                £11,385 for 9 months). Costs may be lower outside London.
              </p>
            </div>

            <!-- FAQ 2 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q2. Can Indian students get PR in the UK?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes. After completing studies, students can work under the
                Graduate Route visa and later apply for Skilled Worker visas,
                which can lead to permanent settlement.
              </p>
            </div>

            <!-- FAQ 3 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q3. Is IELTS mandatory to study in the UK?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Most UK universities require IELTS or an equivalent English
                language test, though some institutions may waive it based on
                prior education.
              </p>
            </div>

            <!-- FAQ 4 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q4. Can Indian students work while studying in the UK?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes, students can work up to
                <span class="font-semibold">20 hours per week</span> during term
                time and full-time during vacations.
              </p>
            </div>

            <!-- FAQ 5 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q5. Which intake is best for Indian students to study in the UK?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                The September intake is the main intake in the UK, followed by
                January. Some universities also offer May intakes for selected
                programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import faqImage from "@/assets/FAQ.png";
</script>

<style scoped></style>
