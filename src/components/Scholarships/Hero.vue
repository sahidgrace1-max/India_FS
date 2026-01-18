<template>
  <section
    class="relative flex items-center justify-center min-h-[70vh] bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    <div
      class="relative z-10 flex flex-col items-center text-center text-white px-4"
    >
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Scholarships</h1>
      <p class="max-w-2xl mb-6 text-lg md:text-xl">
        We, at Grace International, want to help you get the right scholarship
        for studying abroad with a variety of discounts and scholarship options.
        Don’t let study abroad costs get you down. Just ensure to have the right
        information and do the processing on time.
      </p>
      <button
        class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded transition"
      >
        View Available Scholarships
      </button>
    </div>
  </section>
</template>

<script setup>
import bgImage from "@/assets/image1.png";
</script>
