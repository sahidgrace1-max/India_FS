<template>
  <div class="w-full flex flex-col items-center py-12">
    <h2 class="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-2">
      Top Study Destinations
    </h2>
    <p class="text-gray-600 text-center mb-10 max-w-2xl">
      Let us help you find the best suited college in your desired location to
      help you build your career!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 w-full max-w-6xl">
      <!-- Australia -->
      <router-link
        to="/destinations/australia"
        class="relative group cursor-pointer block"
      >
        <img
          src="/src/assets/aus.jpeg"
          alt="Australia"
          class="w-full h-64 object-cover rounded-md"
        />
        <div class="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span
            class="text-white text-xl font-semibold border border-white px-8 py-4 rounded-md"
            style="background: rgba(0, 0, 0, 0.1)"
            >Australia</span
          >
        </div>
      </router-link>
      <!-- USA -->
      <router-link
        to="/destinations/usa"
        class="relative group cursor-pointer block"
      >
        <img
          src="/src/assets/usa.jpeg"
          alt="USA"
          class="w-full h-64 object-cover rounded-md"
        />
        <div class="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span
            class="text-white text-xl font-semibold border border-white px-8 py-4 rounded-md"
            style="background: rgba(0, 0, 0, 0.1)"
            >USA</span
          >
        </div>
      </router-link>
      <!-- UK -->
      <router-link
        to="/destinations/uk"
        class="relative group cursor-pointer block"
      >
        <img
          src="/src/assets/uk.jpeg"
          alt="UK"
          class="w-full h-64 object-cover rounded-md"
        />
        <div class="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span
            class="text-white text-xl font-semibold border border-white px-8 py-4 rounded-md"
            style="background: rgba(0, 0, 0, 0.1)"
            >UK</span
          >
        </div>
      </router-link>
      <!-- Canada -->
      <router-link
        to="/destinations/canada"
        class="relative group cursor-pointer block"
      >
        <img
          src="/src/assets/Canada.webp"
          alt="Canada"
          class="w-full h-64 object-cover rounded-md"
        />
        <div class="absolute inset-0 bg-black bg-opacity-30 rounded-md"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span
            class="text-white text-xl font-semibold border border-white px-8 py-4 rounded-md"
            style="background: rgba(0, 0, 0, 0.1)"
            >Canada</span
          >
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No script needed for static layout
</script>

<style scoped>
/* ...existing code... */
</style>
