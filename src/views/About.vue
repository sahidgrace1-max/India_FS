<template>
  <div>
    <NavbarGrace />
    <AboutIntroSection />
    <BranchDirectorMessageSection />
    <AboutStatsSection />
    <BranchAdvantagesSection />
    <BranchTeamSection />
    <fotter />
  </div>
  <!-- <div
    class="fixed right-0 top-1/3 z-40 bg-blue-700 text-white px-4 py-2 shadow-lg font-semibold text-sm flex items-center"
    style="writing-mode: vertical-rl; text-orientation: mixed"
  >
    Free Counselling
  </div> -->
</template>

<script>
import { defineComponent } from "vue";
import NavbarGrace from "@/components/layouts/NavbarGrace.vue";
import fotter from "@/components/layouts/fotter.vue";
import AboutIntroSection from "@/components/AboutUs_layout/AboutIntroSection.vue";
import BranchDirectorMessageSection from "@/components/AboutUs_layout/BranchDirectorMessageSection.vue";
import AboutStatsSection from "@/components/AboutUs_layout/AboutStatsSection.vue";
import BranchAdvantagesSection from "@/components/AboutUs_layout/BranchAdvantagesSection.vue";
import BranchTeamSection from "@/components/AboutUs_layout/BranchTeamSection.vue";

export default defineComponent({
  name: "About",
  components: {
    NavbarGrace,
    fotter,
    AboutIntroSection,
    BranchDirectorMessageSection,
    AboutStatsSection,
    BranchAdvantagesSection,
    BranchTeamSection,
  },
  setup() {
    return {};
  },
});
</script>
