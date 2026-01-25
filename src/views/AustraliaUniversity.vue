<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <NavbarGrace />

    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
    >
      <Australia />
    </div>

    <Fotter />
  </div>
</template>

<script setup>
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import Australia from "@/components/University/Australia.vue";
import Fotter from "@/components/layouts/fotter.vue";
</script>
