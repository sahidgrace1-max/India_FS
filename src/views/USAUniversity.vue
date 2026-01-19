<template>
  <NavbarGrace />
  <Usa />
  <Fotter />
</template>

<script>
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import Fotter from "@/components/layouts/fotter.vue";
import Usa from "../components/University/Usa.vue";

export default {
  components: {
    NavbarGrace,
    Usa,
    Fotter,
  },
};
</script>
