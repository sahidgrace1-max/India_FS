<template>
  <NavbarGrace />
  <Canada />
  <Fotter />
</template>

<script>
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import Fotter from "@/components/layouts/fotter.vue";
import Canada from "../components/University/Canada.vue";

export default {
  components: {
    NavbarGrace,
    Canada,
    Fotter,
  },
};
</script>
