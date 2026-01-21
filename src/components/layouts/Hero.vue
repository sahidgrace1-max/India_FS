<template>
  <section
    class="w-full min-h-[500px] md:min-h-[800px] h-[80vh] relative overflow-hidden flex items-center bg-gray-100"
  >
    <!-- Sliding Background Image -->
    <img
      src="@/assets/hero.jpg"
      alt="Hero Photo"
      class="absolute top-0 left-0 w-full h-full object-cover animate-slide-in"
    />

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50 animate-fade-in"></div>

    <!-- Content -->
    <div
      class="relative z-10 px-6 md:px-20 text-left max-w-3xl text-white animate-text-fade"
    >
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
        Study Abroad
      </h1>

      <p class="text-2xl md:text-4xl mb-8 font-semibold">
        In <span class="text-green-400">{{ selectedBranch }}</span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore(); // reactive
</script>

<style scoped>
/* Slide-in animation for background image */
@keyframes slideIn {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slideIn 1.5s ease-out forwards;
}

/* Fade-in animation for overlay */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards 0.2s;
}

/* Fade-in + slight upward motion for text */
@keyframes textFadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-text-fade {
  animation: textFadeUp 1.2s ease-out forwards 0.5s;
}
</style>
