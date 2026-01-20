<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Section -->
        <div class="order-1 lg:order-1">
          <img
            :src="bgImage"
            alt="UK Education System"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <!-- Content Section -->
        <div class="order-2 lg:order-2">
          <div class="prose max-w-none">
            <p class="text-gray-700 text-base leading-relaxed mb-6">
              The United Kingdom is a highly preferred study and work destination
              for international students. Its education system is globally
              respected and structured into primary, secondary, further, and
              higher education. International students generally enter directly
              into higher education after completing their equivalent
              qualifications in their home country.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Why Study in the UK?
            </h2>

            <ul class="space-y-4">
              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >World-Ranked Institutions</span
                >
                – UK institutions consistently rank among the best in the world,
                and UK qualifications are internationally valued and recognized.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Excellence in Research</span
                >
                – The UK undertakes 5% of the world’s scientific research and
                produces 14% of the most frequently cited research papers
                globally.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Flexible Education System</span
                >
                – Students can choose from academic and vocational pathways,
                allowing flexibility to tailor degrees based on career goals.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Innovative Teaching Methods</span
                >
                – The UK education system encourages creativity, independent
                thinking, skill development, and confidence building.
              </li>

              <li class="text-gray-700">
                <span class="font-semibold text-gray-900"
                  >Learn from Global Experts</span
                >
                – Students are taught by world-leading academics and industry
                professionals with continuous academic support.
              </li>
            </ul>

            <p class="text-gray-700 text-base leading-relaxed mt-6">
              As the home of the English language, the UK offers an ideal
              environment to improve communication skills while enhancing global
              employability through specialized modules and practical learning
              opportunities.
            </p>
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
