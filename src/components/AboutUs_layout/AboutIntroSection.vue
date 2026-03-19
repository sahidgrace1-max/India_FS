<template>
  <div class="w-full bg-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="flex flex-col lg:flex-row gap-10 items-center">
        <div class="w-full lg:w-2/5 flex justify-center">
          <div
            class="w-full max-w-xs"
          >
            <img
              src="@/assets/G.png"
              class="w-full object-contain"
              alt="Grace International"
            />
          </div>
        </div>
        <div class="w-full lg:w-3/5">
          <h1 class="text-3xl md:text-5xl font-bold mb-6">
            Grace International {{ selectedBranch }}
          </h1>
          <p
            class="text-gray-700 pl-4 mb-4 text-base md:text-lg text-justify"
            v-html="branchContent[selectedBranch]"
          ></p>
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

  Ahmedabad: `Established in 2006, Grace International has been a leading and trusted educational service provider, formed for the sole purpose of providing comprehensive solutions to students planning to pursue higher education from reputed universities and colleges in Australia, New Zealand, the USA, UK, Canada and many more countries.
    <br /><br />
    Our Ahmedabad office, nestled in the intellectual capital of Eastern India, serves as the trusted partner for Bengali students aspiring to study abroad. With over 25,000 students recruited worldwide, Grace International Ahmedabad is synonymous with academic excellence, cultural understanding, and unwavering commitment towards students who aspire to pursue education and gain invaluable experience while studying abroad.
    <br /><br />
    Our qualified and driven team in Ahmedabad emphasizes providing genuine and realistic solutions to our students, respecting the rich academic heritage and cultural values of Eastern Indian students.`,
};
</script>

<style scoped></style>
