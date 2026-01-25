<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <NavbarGrace />

    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      class="max-w-7xl mx-auto mt-12"
    >
      <OurServicesList :services="services" />
    </div>

    <fotter />
  </div>
</template>

<script setup>
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import fotter from "@/components/layouts/fotter.vue";
import OurServicesList from "@/components/OurServicesLayouts/OurServicesList.vue";
</script>
