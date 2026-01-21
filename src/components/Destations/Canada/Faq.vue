<template>
  <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Image -->
        <div class="order-2 lg:order-1 flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Students Graduation in Canada"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[705px]"
          />
        </div>

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">
            FAQs – Study in Canada for Indian Students
          </h2>

          <div class="space-y-5">
            <!-- FAQ 1 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Q1. What is the cost of studying in Canada for Indian students?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed">
                Tuition fees range from CAD 30,000–60,000/year for K-12 private schools and vary for universities/colleges depending on the program. Living costs average CAD 1,000–1,500/month depending on city and accommodation type.
              </p>
            </div>

            <!-- FAQ 2 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Q2. Can Indian students work while studying in Canada?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed">
                Yes, full-time students with a valid Study Permit can work on-campus without a separate work permit. Off-campus work is allowed up to 20 hours/week during terms and full-time during holidays.
              </p>
            </div>

            <!-- FAQ 3 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Q3. Is English proficiency mandatory for Canada?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed">
                Yes, proof of English proficiency (IELTS, PTE, or TOEFL) is required for admission to most Canadian institutions.
              </p>
            </div>

            <!-- FAQ 4 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Q4. Can my spouse/partner work while I study in Canada?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed">
                Yes, your spouse or partner can apply for an open work permit and work full-time while you study.
              </p>
            </div>

            <!-- FAQ 5 -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Q5. Which intake is best for Indian students to study in Canada?
              </h3>
              <p class="text-gray-700 text-base leading-relaxed">
                September is the main intake, followed by January and May for select programs. Deadlines and start dates vary by institution, so check with the university or college.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import bgImage from "@/assets/FAq.png";
</script>

<style scoped></style>
