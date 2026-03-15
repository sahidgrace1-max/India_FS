<template>
  <router-view />
  <WhatsAppButton />
</template>

<script setup>
import WhatsAppButton from "@/components/layouts/WhatsAppButton.vue";
</script>

<style>
#app {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
