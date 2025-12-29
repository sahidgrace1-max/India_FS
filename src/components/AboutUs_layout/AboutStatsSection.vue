<template>
  <div
    class="w-full flex justify-center items-center py-12 bg-gradient-to-r from-blue-900 to-blue-700"
  >
    <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Side Stats -->
      <div class="flex flex-col gap-8">
        <div
          class="flex flex-col items-center bg-blue-800 rounded-lg p-6 shadow"
        >
          <div class="mb-2">
            <i class="flaticon-worker text-4xl text-white"></i>
          </div>
          <span class="text-4xl font-bold text-white">19</span>
          <p class="text-white mt-2">YEARS OF SUCCESS</p>
        </div>
        <div
          class="flex flex-col items-center bg-blue-800 rounded-lg p-6 shadow"
        >
          <div class="mb-2">
            <i class="flaticon-building text-4xl text-white"></i>
          </div>
          <div class="flex items-center">
            <span class="text-4xl font-bold text-white">500</span>
            <span class="text-2xl font-bold text-white ml-1">+</span>
          </div>
          <p class="text-white mt-2">EDUCATIONAL PARTNERS</p>
        </div>
      </div>
      <!-- Right Side Stats -->
      <div class="flex flex-col gap-8">
        <div
          class="flex flex-col items-center bg-blue-800 rounded-lg p-6 shadow"
        >
          <div class="mb-2">
            <i class="flaticon-address text-4xl text-white"></i>
          </div>
          <div class="flex items-center">
            <span class="text-4xl font-bold text-white">50</span>
            <span class="text-2xl font-bold text-white ml-1">K</span>
          </div>
          <p class="text-white mt-2">HAPPY STUDENTS</p>
        </div>
        <div
          class="flex flex-col items-center bg-blue-800 rounded-lg p-6 shadow"
        >
          <div class="mb-2">
            <i class="flaticon-crane text-4xl text-white"></i>
          </div>
          <div class="flex items-center">
            <span class="text-4xl font-bold text-white">15</span>
            <span class="text-2xl font-bold text-white ml-1">+</span>
          </div>
          <p class="text-white mt-2">CERTIFIED COUNSELORS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutStatsSection",
};
</script>

<style scoped></style>
