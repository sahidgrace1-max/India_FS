<template>
  <div>
    <NavbarGrace />
    <div class="max-w-7xl mx-auto mt-12">
      <OurServicesList :services="services" />
    </div>
    <fotter />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import fotter from "@/components/layouts/fotter.vue";
import OurServicesList from "@/components/OurServicesLayouts/OurServicesList.vue";

export default defineComponent({
  components: {
    NavbarGrace,
    fotter,
    OurServicesList
  },
});
</script>