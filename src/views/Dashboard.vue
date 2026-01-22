<template>
  <div class="min-h-screen bg-gray-50 relative overflow-x-hidden">
    <Navbar />
    <Hero />
    <Section1 />
    <OurServices />
    <TopStudyDestinations />
    <TestPreparation />
    <ContactForm />
    <testimonials />
    <!-- <NewsandUpdate /> -->
    <AssociatedUniversities />
    <Accreditations />
    <div
      class="fixed right-0 top-1/3 z-40 bg-blue-700 text-white px-4 py-2 shadow-lg font-semibold text-sm flex items-center"
      style="writing-mode: vertical-rl; text-orientation: mixed"
    >
      Free Counselling
    </div>
    <Fotter />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "@/components/layouts/NavbarGrace.vue";
import Hero from "@/components/layouts/Hero.vue";
import Section1 from "@/components/layouts/Section1.vue";
import TopStudyDestinations from "@/components/layouts/TopStudyDestinations.vue";
import OurServices from "@/components/layouts/OurServices.vue";
import ContactForm from "@/components/layouts/ContactForm.vue";
// import NewsandUpdate from '../components/layouts/NewsandUpdate.vue'
import TestPreparation from "../components/layouts/TestPreparation.vue";
import AssociatedUniversities from "@/components/layouts/AssociatedUniversities.vue";
import Accreditations from "@/components/layouts/Accreditations.vue";
import Fotter from "@/components/layouts/fotter.vue";
import testimonials from "../components/layouts/testimonials.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    Navbar,
    Hero,
    Section1,
    TopStudyDestinations,
    OurServices,
    ContactForm,
    // NewsandUpdate,
    TestPreparation,
    testimonials,
    AssociatedUniversities,
    Accreditations,
    Fotter,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
