<template>
  <div class="w-full bg-white py-20 min-h-[60vh] flex items-center">
    <div class="max-w-6xl mx-auto px-4 w-full">
      <h1
        class="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-12 tracking-widest drop-shadow-2xl uppercase"
      >
         DIRECTOR'S MESSAGE
      </h1>
      <div
        class="flex flex-col md:flex-row items-stretch justify-center gap-10 animate-fade-in h-full"
      >
        <!-- Photo Side -->
        <div class="w-full md:w-1/2 flex justify-center items-stretch">
          <div
            class="bg-blue-100 overflow-hidden w-full h-full flex items-center justify-center min-h-[400px]"
          >
            <img
              :src="directorData[selectedBranch].image"
              :alt="directorData[selectedBranch].name"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <!-- Message Side -->
        <div
          class="w-full md:w-1/2 flex flex-col items-center md:items-start h-full"
        >
          <div class="relative w-full h-full flex-1 flex flex-col">
            <div
              class="absolute -inset-1 bg-gradient-to-br from-blue-400/10 via-blue-100/10 to-blue-900/5 blur-lg"
            ></div>
            <div
              class="relative p-6 md:p-8 h-full flex flex-col justify-between"
            >
              <p
                class="text-blue-900 text-base md:text-lg text-justify leading-relaxed font-medium"
                v-html="directorData[selectedBranch].message"
              ></p>
              <h4
                class="text-blue-800 text-2xl font-bold mt-8 mb-1 drop-shadow-lg text-center md:text-left"
              >
                {{ directorData[selectedBranch].name }}
              </h4>
              <p
                class="text-blue-500 italic text-lg mb-2 text-center md:text-left"
              >
                Director, Grace International India
              </p>
              <div
                class="w-24 h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 rounded-full mt-2 mb-2 mx-auto md:mx-0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();

const directorData = {
  Delhi: {
    name: "Mayank Srivastava",
    image: new URL("@/assets/Dir.jpeg", import.meta.url).href,
    message: `As the Director of our India operations, it is both an honor and a privilege to support the ambitious and dynamic student community of India.

At Grace International, we deeply understand the aspirations of students from Delhi, NCR, Punjab, Haryana, and neighboring regions. We are equally aware of the unique challenges they encounter while planning their global education journey. Our mission is to provide personalized guidance, reliable support, and expert advice at every step.

Our approach is built on personalized mentorship, strategic planning, and a deep understanding of global education pathways. Located in the heart of Connaught Place, our office offers both accessibility and a professional environment designed to support every student’s journey.


We are committed to turning your international education dreams into reality. Your success is not just our goal—it is our purpose.`,
  },
  Ahmedabad: {
        name: "Mayank Srivastava",
    image: new URL("@/assets/Dir.jpeg", import.meta.url).href,
    message: `As the Director of our India operations, it is both an honor and a privilege to support the ambitious and dynamic student community of India.

At Grace International, we deeply understand the aspirations of students from Delhi, NCR, Punjab, Haryana, and neighboring regions. We are equally aware of the unique challenges they encounter while planning their global education journey. Our mission is to provide personalized guidance, reliable support, and expert advice at every step.

Our approach is built on personalized mentorship, strategic planning, and a deep understanding of global education pathways. Located in the heart of Connaught Place, our office offers both accessibility and a professional environment designed to support every student’s journey.


We are committed to turning your international education dreams into reality. Your success is not just our goal—it is our purpose.`,
},
};
</script>

<style scoped></style>
