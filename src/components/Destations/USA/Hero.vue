<template>
  <div class="relative w-full h-[180px] flex items-center justify-center overflow-hidden bg-cover bg-center"
       :style="`background-image: url('${bgUrl}')`">
    <div class="absolute inset-0 bg-black/45 z-10"></div>
    <h1 class="relative z-20 text-white text-3xl md:text-4xl font-bold text-center">Study In USA</h1>
    </div>
</template>

<script setup>
import bgImg from '@/assets/image.png'
const bgUrl = bgImg
</script>
