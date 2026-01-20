<template>
  <div class="w-full flex flex-col items-center py-10">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-10">
      Test Preparation
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
      <!-- Card 1 -->
      <div
        @click="goToIELTS"
        class="border-2 border-blue-500 rounded-lg flex items-center justify-center h-32 bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <div class="flex flex-col items-center">
          <span class="text-4xl font-bold text-red-600">IELTS</span>
          
        </div>
      </div>
      <!-- Card 2 -->
      <div
      @click="goToPTE"
        class="border-2 border-blue-500 rounded-lg flex items-center justify-center h-32 bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <div class="flex flex-col items-center">
          <span class="text-3xl font-bold text-indigo-900">PTE</span>
        </div>
      </div>
      <!-- Card 3 -->
      <div
      @click="goToTOEFL"
        class="border-2 border-blue-500 rounded-lg flex items-center justify-center h-32 bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <div class="flex flex-col items-center">
          <span class="text-3xl font-bold text-black">TOEFL</span>
        </div>
      </div>
      <!-- Card 8 -->
      <div
      @click="goToGMAT"
        class="border-2 border-blue-500 rounded-lg flex items-center justify-center h-32 bg-white cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <div class="flex flex-col items-center">
          <span class="text-3xl font-bold text-purple-700">GMAT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToIELTS = () => {
  router.push({ name: 'IELTSPreparation' });
};
const goToPTE = () => {
  router.push({ name: 'PTEPreparation' });
};
const goToTOEFL = () => {
  router.push({ name: 'TOEFLPreparation' });
};
const goToGMAT = () => {
  router.push({ name: 'GMATPreparation' });
};
</script>
