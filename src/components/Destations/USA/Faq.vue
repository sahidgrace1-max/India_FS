<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students Graduation in USA"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-xl font-bold text-gray-900 mb-6">
            FAQs – Study in the USA for Indian Students
          </h2>

          <div class="space-y-5">
            <!-- FAQ 1 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q1. What is the cost of living in the USA for Indian students?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                The cost of studying and living in the USA varies by university, but on average it is around <span class="font-semibold">US$36,000–60,000 per year</span>, including tuition and living expenses.
              </p>
            </div>

            <!-- FAQ 2 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q2. Can Indian students get PR in the USA?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                The USA does not have direct PR for students. Indian students can work on <span class="font-semibold">OPT (Optional Practical Training)</span> after graduation and later apply for H-1B or other work visas, which may lead to permanent residency.
              </p>
            </div>

            <!-- FAQ 3 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q3. Is English proficiency mandatory for the USA?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes, an English proficiency test like <span class="font-semibold">TOEFL or IELTS</span> is required for admission to US universities.
              </p>
            </div>

            <!-- FAQ 4 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q4. Can Indian students work while studying in the USA?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes, students on an F-1 visa can work <span class="font-semibold">on-campus</span> up to 20 hours per week during semesters and full-time during breaks. Off-campus work requires special authorization.
              </p>
            </div>

            <!-- FAQ 5 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q5. Which intake is best for Indian students to study in the USA?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                The Fall intake (August/September) is the main intake, followed by Spring (January). Some universities also offer Summer intakes (May/June) for select programs.
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
