<template>
  <div
    class="relative w-full h-[220px] md:h-[300px] flex items-center justify-center overflow-hidden"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center z-0 animate-bgZoom"
      :style="`background-image: url('${bgUrl}');`"
    ></div>

    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50 z-10"
    ></div>

    <!-- Heading -->
    <h1
      class="relative z-20 text-white text-3xl md:text-5xl font-extrabold text-center opacity-0 translate-y-6 animate-fadeUp"
    >
      Study In NEW ZELAND
    </h1>
  </div>
</template>

<script setup>
import bgImg from "@/assets/image.png";
const bgUrl = bgImg;
</script>

<style>
/* Background zoom animation */
@keyframes bgZoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.animate-bgZoom {
  animation: bgZoom 15s ease-in-out infinite;
  background-size: cover;
  background-position: center;
}

/* Heading fade-in + slide-up animation */
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

.animate-fadeUp {
  animation: fadeUp 1.2s ease-out forwards;
  animation-delay: 0.3s;
}
</style>
