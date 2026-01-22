<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-poppins">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students Graduation in New Zealand"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[700px]"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            FAQs – Study in New Zealand for Indian Students
          </h2>

          <div class="space-y-5">
            <!-- FAQ 1 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Q1. What is the cost of living in New Zealand for Indian
                students?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed text-lg">
                International students should budget around NZ$120–$200 per week
                for accommodation, depending on the city and type of housing.
                Living costs, including food, transport, and personal expenses,
                average NZ$15,000–$18,000 per year.
              </p>
            </div>

            <!-- FAQ 2 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Q2. Can Indian students work while studying in New Zealand?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed text-lg">
                Yes, students can work up to
                <span class="font-semibold text-lg">20 hours per week</span> during term
                time and full-time during holidays. Part-time work helps cover
                living costs and gain practical experience.
              </p>
            </div>

            <!-- FAQ 3 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2 text-lg">
                Q3. Is English language proficiency required?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed text-lg">
                Yes. Most New Zealand institutions require IELTS, TOEFL, or PTE
                scores. Some institutions may accept prior English-medium
                education in place of a test.
              </p>
            </div>

            <!-- FAQ 4 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Q4. What are the main intakes in New Zealand?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed text-lg">
                The main intakes are
                <span class="font-semibold text-lg">February</span> and
                <span class="font-semibold text-lg">July</span>. Some universities also
                offer an October intake for selected programs.
              </p>
            </div>

            <!-- FAQ 5 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Q5. Can Indian students apply for post-study work visas?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed text-lg">
                Yes. Graduates can apply for post-study work visas valid for 1–3
                years depending on their qualification level, providing
                opportunities to gain work experience in New Zealand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/FAQ.png";
</script>

<style scoped></style>
