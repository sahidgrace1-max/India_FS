<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Intro Paragraph - Full Width -->
      <div class="w-full mb-12 opacity-0 animate-fadeUp delay-100">
        <p class="text-gray-700 text-lg leading-relaxed">
          The United Kingdom is a highly preferred study and work destination
          for international students. Its education system is globally respected
          and structured into primary, secondary, further, and higher education.
          International students generally enter directly into higher education
          after completing their equivalent qualifications in their home
          country.
        </p>
      </div>

      <!-- Image and Content Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Image Section -->
        <div class="opacity-0 animate-zoomIn delay-200">
          <img
            :src="bgImage"
            alt="UK Education System"
            class="rounded-lg shadow-lg w-full h-auto object-cover min-h-[500px]"
          />
        </div>

        <!-- Content Section -->
        <div class="prose max-w-none opacity-0 animate-fadeUp delay-300">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Why Study in the UK?
          </h2>

          <ul class="space-y-4">
            <li class="text-gray-700 opacity-0 animate-fadeUp delay-400">
              <span class="font-semibold text-gray-900"
                >World-Ranked Institutions</span
              >
              – UK institutions consistently rank among the best in the world,
              and UK qualifications are internationally valued and recognized.
            </li>

            <li class="text-gray-700 opacity-0 animate-fadeUp delay-500">
              <span class="font-semibold text-gray-900"
                >Excellence in Research</span
              >
              – The UK undertakes 5% of the world’s scientific research and
              produces 14% of the most frequently cited research papers
              globally.
            </li>

            <li class="text-gray-700 opacity-0 animate-fadeUp delay-600">
              <span class="font-semibold text-gray-900"
                >Flexible Education System</span
              >
              – Students can choose from academic and vocational pathways,
              allowing flexibility to tailor degrees based on career goals.
            </li>

            <li class="text-gray-700 opacity-0 animate-fadeUp delay-700">
              <span class="font-semibold text-gray-900"
                >Innovative Teaching Methods</span
              >
              – The UK education system encourages creativity, independent
              thinking, skill development, and confidence building.
            </li>

            <li class="text-gray-700 opacity-0 animate-fadeUp delay-800">
              <span class="font-semibold text-gray-900"
                >Learn from Global Experts</span
              >
              – Students are taught by world-leading academics and industry
              professionals with continuous academic support.
            </li>
          </ul>

          <p
            class="text-gray-700 text-base leading-relaxed mt-6 opacity-0 animate-fadeUp delay-900"
          >
            As the home of the English language, the UK offers an ideal
            environment to improve communication skills while enhancing global
            employability through specialized modules and practical learning
            opportunities.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/uk.png";
</script>

<style scoped>
/* Fade-up animation */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Zoom-in animation */
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animation classes */
.animate-fadeUp {
  animation: fadeUp 1s ease-out forwards;
}

.animate-zoomIn {
  animation: zoomIn 1s ease-out forwards;
}

/* Delay utilities */
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-400 {
  animation-delay: 0.4s;
}
.delay-500 {
  animation-delay: 0.5s;
}
.delay-600 {
  animation-delay: 0.6s;
}
.delay-700 {
  animation-delay: 0.7s;
}
.delay-800 {
  animation-delay: 0.8s;
}
.delay-900 {
  animation-delay: 0.9s;
}
</style>
