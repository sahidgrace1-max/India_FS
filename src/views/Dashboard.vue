<template>
  <div class="min-h-screen bg-gray-50 relative">
    <Navbar />
    <Hero />
    <Section1 />
    <OurServices />
    <TopStudyDestinations />
    <TestPreparation />
    <ContactForm />
    <!-- <NewsandUpdate /> -->
    <AssociatedUniversities />
    <Accreditations />
    <div
      class="fixed right-0 top-1/3 z-40 bg-blue-700 text-white px-4 py-2 shadow-lg font-semibold text-sm flex items-center"
      style="writing-mode: vertical-rl; text-orientation: mixed"
    >
      Free Counselling
    </div>

    <!-- WhatsApp Popup Button -->
    <a
      href="https://wa.me/919876543210?text=Hello%20Grace%20International!%20I%20have%20a%20question."
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16"
      style="box-shadow: 0 4px 16px rgba(0,0,0,0.2);"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-8 h-8">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.661 1.934 6.661L4 29l7.523-1.934A12.96 12.96 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.91-.521-5.594-1.51l-.401-.232-4.471 1.149 1.195-4.364-.26-.424A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.255-7.255c-.287-.144-1.697-.838-1.96-.934-.263-.096-.454-.144-.646.144-.192.287-.741.934-.909 1.127-.168.192-.335.216-.622.072-.287-.144-1.213-.447-2.312-1.425-.855-.762-1.432-1.701-1.601-1.988-.168-.287-.018-.443.126-.587.13-.13.287-.335.431-.503.144-.168.192-.287.287-.478.096-.192.048-.359-.024-.503-.072-.144-.646-1.56-.885-2.137-.233-.561-.47-.484-.646-.493l-.55-.011c-.192 0-.503.072-.767.359-.263.287-1.003.98-1.003 2.39s1.027 2.773 1.171 2.965c.144.192 2.021 3.088 4.899 4.203.685.295 1.219.471 1.635.603.687.219 1.312.188 1.805.114.551-.082 1.697-.693 1.938-1.363.24-.67.24-1.244.168-1.363-.072-.119-.263-.192-.55-.335z"/>
      </svg>
    </a>
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
