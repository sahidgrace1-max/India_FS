<template>
  <div
    class="relative w-full h-[300px] flex items-center justify-center overflow-hidden bg-cover bg-center"
    :style="`background-image: url('${bgUrl}')`"
  ></div>
</template>

<script setup>
import bgImg from "@/assets/Ielts_test.png";
const bgUrl = bgImg;
</script>
