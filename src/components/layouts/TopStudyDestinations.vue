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
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
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
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
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
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80"
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
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
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
    <button
      class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md text-lg"
    >
      More Destinations
    </button>
  </div>
</template>

<script setup>
// No script needed for static layout
</script>

<style scoped>
/* ...existing code... */
</style>
