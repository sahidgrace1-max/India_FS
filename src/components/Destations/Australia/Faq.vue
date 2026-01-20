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
                Q1. What are the types of schools in Australia?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Australia has <span class="font-semibold">Government Schools</span> 
                (operated by state/territory governments) and 
                <span class="font-semibold">Non-Government Schools</span> 
                (private institutions, often with religious or cultural philosophies). 
                International students pay tuition fees in both types.
              </p>
            </div>

            <!-- FAQ 2 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q2. What is ELICOS and why is it important?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                ELICOS courses are English language programs ranging from 
                <span class="font-semibold">4 to 48 weeks</span>. They are designed 
                for students needing English proficiency before starting formal 
                studies. Courses include at least 20 hours/week and flexible start dates.
              </p>
            </div>

            <!-- FAQ 3 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q3. How much does it cost to study and live in Australia?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Tuition fees range from <span class="font-semibold">AUD 9,000 to 37,000/year</span> 
                depending on the course. Living costs start from 
                <span class="font-semibold">AUD 29,710/year</span>. Accommodation varies 
                from <span class="font-semibold">AUD 50–280/week</span> depending on the type.
              </p>
            </div>

            <!-- FAQ 4 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q4. Can Indian students work while studying in Australia?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes, up to <span class="font-semibold">40 hours per fortnight</span> during 
                semesters and full-time during scheduled breaks. This helps cover living costs.
              </p>
            </div>

            <!-- FAQ 5 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q5. How does admission and visa process work?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Applications can be submitted directly to universities or via education agents. 
                After acceptance, students receive a Letter of Offer, pay a deposit, and get an 
                <span class="font-semibold">eCoE (Electronic Confirmation of Enrolment)</span>. 
                Student visa (Subclass 500) under SSVF allows study and part-time work.
              </p>
            </div>

            <!-- FAQ 6 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q6. What are post-study work and PR opportunities?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Graduates can apply for the <span class="font-semibold">Temporary Graduate Visa (Subclass 485)</span>. 
                Duration depends on qualification: 18 months (Graduate Work Stream) or 
                2–4 years (Post-Study Work Stream). After gaining work experience, skilled 
                migration visas allow applying for PR.
              </p>
            </div>

            <!-- FAQ 7 -->
            <div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                Q7. Is English proficiency mandatory?
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Yes, tests like <span class="font-semibold">IELTS, PTE, or TOEFL</span> are required 
                for most courses and visa eligibility. Strong scores improve chances for 
                admission and scholarships.
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
