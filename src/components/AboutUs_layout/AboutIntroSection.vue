<template>
  <div class="w-full bg-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="flex flex-col lg:flex-row gap-10 items-center">
        <div class="w-full lg:w-2/5 flex justify-center">
          <div
            class="bg-white rounded-t-lg overflow-hidden shadow-md w-full max-w-xs"
          >
            <img
              src="@/assets/logo.png"
              class="w-full object-contain"
              alt="Grace International"
            />
          </div>
        </div>
        <div class="w-full lg:w-3/5">
          <h1 class="text-3xl md:text-5xl font-bold mb-6">
            Grace International {{ selectedBranch }}
          </h1>
          <p class="text-gray-700 pl-4 mb-4 text-base md:text-lg text-justify" v-html="branchContent[selectedBranch]">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();

const branchContent = {
  Delhi: `Established in 2006, Grace International has been a leading and trusted educational service provider, formed for the sole purpose of providing comprehensive solutions to students planning to pursue higher education from reputed universities and colleges in Australia, New Zealand, the USA, UK, Canada and many more countries.
    <br /><br />
    Our Delhi office, strategically located in the heart of India's capital, serves as the gateway for North Indian students aspiring to study abroad. With over 25,000 students recruited worldwide, Grace International Delhi is synonymous with reliability, promptness, and unwavering commitment towards students who aspire to pursue education and gain invaluable experience while studying abroad.
    <br /><br />
    Our qualified and driven team in Delhi emphasizes providing genuine and realistic solutions to our students, understanding the unique cultural and educational background of North Indian students.`,
  
  Mumbai: `Established in 2006, Grace International has been a leading and trusted educational service provider, formed for the sole purpose of providing comprehensive solutions to students planning to pursue higher education from reputed universities and colleges in Australia, New Zealand, the USA, UK, Canada and many more countries.
    <br /><br />
    Our Mumbai office, located in India's financial capital, serves as the premier destination for Western Indian students aspiring to study abroad. With over 25,000 students recruited worldwide, Grace International Mumbai is synonymous with excellence, professionalism, and unwavering commitment towards students who aspire to pursue education and gain invaluable experience while studying abroad.
    <br /><br />
    Our qualified and driven team in Mumbai emphasizes providing genuine and realistic solutions to our students, understanding the cosmopolitan culture and diverse educational background of Maharashtra students.`,
  
  Bangalore: `Established in 2006, Grace International has been a leading and trusted educational service provider, formed for the sole purpose of providing comprehensive solutions to students planning to pursue higher education from reputed universities and colleges in Australia, New Zealand, the USA, UK, Canada and many more countries.
    <br /><br />
    Our Bangalore office, situated in India's Silicon Valley, serves as the hub for tech-savvy South Indian students aspiring to study abroad. With over 25,000 students recruited worldwide, Grace International Bangalore is synonymous with innovation, expertise, and unwavering commitment towards students who aspire to pursue education and gain invaluable experience while studying abroad.
    <br /><br />
    Our qualified and driven team in Bangalore specializes in STEM programs and understands the unique aspirations of students from Karnataka's premier engineering and technology institutions.`,
  
  Kolkata: `Established in 2006, Grace International has been a leading and trusted educational service provider, formed for the sole purpose of providing comprehensive solutions to students planning to pursue higher education from reputed universities and colleges in Australia, New Zealand, the USA, UK, Canada and many more countries.
    <br /><br />
    Our Kolkata office, nestled in the intellectual capital of Eastern India, serves as the trusted partner for Bengali students aspiring to study abroad. With over 25,000 students recruited worldwide, Grace International Kolkata is synonymous with academic excellence, cultural understanding, and unwavering commitment towards students who aspire to pursue education and gain invaluable experience while studying abroad.
    <br /><br />
    Our qualified and driven team in Kolkata emphasizes providing genuine and realistic solutions to our students, respecting the rich academic heritage and cultural values of Eastern Indian students.`,
};
</script>

<style scoped></style>
