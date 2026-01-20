<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div>
          <p class="text-gray-700 text-xs leading-relaxed mb-4">
            Australia has a globally respected education system offering flexible
            study pathways, internationally recognized qualifications, and strong
            post-study career opportunities for international students.
          </p>

          <h2 class="text-lg font-bold text-gray-900 mb-4">
            Australian Education System
          </h2>

          <ul class="space-y-2 mb-4">
            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Government Schools</span>
              – Operated by State or Territory governments. International students
              are required to pay tuition fees and benefit from diverse social and
              cultural learning environments.
            </li>

            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900"
                >Non-Government Schools</span
              >
              – Privately operated institutions that may follow religious or
              cultural philosophies. International students usually pay higher
              tuition fees.
            </li>

            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">ELICOS Programs</span>
              – English language courses ranging from 4 to 48 weeks, with at least
              20 hours of study per week and flexible intake dates throughout the year.
            </li>

            <li class="text-gray-700 text-xs">
              <span class="font-semibold text-gray-900">Universities</span> –
              Australia has 43 universities offering over 22,000 courses across
              1,100 institutions, with strong global rankings and research focus.
            </li>
          </ul>

          <p class="text-gray-700 text-xs leading-relaxed">
            After completing their studies, international students may be eligible
            for the Temporary Graduate Visa (Subclass 485), allowing them to gain
            valuable work experience in Australia for up to 2–4 years.
          </p>
        </div>

        <!-- Right Image -->
        <div class="flex items-center justify-center">
          <img
            :src="bgImage"
            alt="Australian Education System"
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
