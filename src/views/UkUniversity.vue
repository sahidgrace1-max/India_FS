<template>
  <NavbarGrace />
  <Uk />
  <Fotter />
</template>

<script>
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import Fotter from "@/components/layouts/fotter.vue";
import Uk from "../components/University/Uk.vue";

export default {
  components: {
    NavbarGrace,
    Uk,
    Fotter,
  },
};
</script>
