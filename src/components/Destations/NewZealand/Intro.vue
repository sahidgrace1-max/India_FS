<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Intro Paragraph - Full Width -->
      <div class="w-full mb-12">
        <p class="text-gray-700 text-lg leading-relaxed">
          New Zealand is known for high-quality education and an unbeatable
          lifestyle. Its education system emphasizes practical, hands-on
          learning to equip students with skills and experiences that are
          globally recognized. New Zealand qualifications are respected
          worldwide, and students benefit from an immersive English-language
          environment and opportunities to work while studying and after
          graduation.
        </p>
      </div>

      <!-- Image and Content Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content Section -->
        <div class="order-1 lg:order-1">
          <div class="prose max-w-none">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Why Study in New Zealand?
            </h2>

            <ul class="space-y-4">
              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >World-Class Universities</span
                >
                – New Zealand’s universities rank in the top 3% globally,
                offering degrees recognized internationally.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Practical Learning</span
                >
                – Hands-on, student-centered education helps develop
                problem-solving, teamwork, and critical-thinking skills.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Safe and Welcoming Environment</span
                >
                – New Zealand is culturally diverse, safe, and known for its
                natural beauty and outdoor lifestyle.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Work Opportunities</span
                >
                – Students can work part-time during study periods and full-time
                during holidays, gaining practical experience and developing
                employability skills.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Global Recognition</span
                >
                – Qualifications from New Zealand are respected worldwide,
                opening doors to higher studies and career opportunities across
                the globe.
              </li>
            </ul>

            <p class="text-gray-700 text-base leading-relaxed mt-6">
              Studying in New Zealand offers a unique combination of academic
              excellence, personal growth, and unforgettable life experiences in
              one of the world’s most beautiful and inspiring countries.
            </p>
          </div>
        </div>
        <!-- Image Section -->
        <div class="order-2 lg:order-2">
          <img
            :src="bgImage"
            alt="UK Education System"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[500px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/newzealand.png";
</script>
