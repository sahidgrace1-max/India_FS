<template>
  <div class="w-full bg-white py-12">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="text-center mx-auto pb-10" style="max-width: 800px">
        <h4 class="text-blue-600 font-semibold mb-2">
          {{ selectedBranch }} Office Advantages
        </h4>
        <h1 class="text-3xl md:text-5xl font-bold mb-2">
          Why Choose Grace International {{ selectedBranch }}
        </h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="advantage in advantages[selectedBranch]"
          :key="advantage.title"
          class="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center shadow hover:shadow-lg transition"
        >
          <div class="mb-4">
            <i :class="`${advantage.icon} text-4xl text-blue-600`"></i>
          </div>
          <h5 class="font-semibold text-lg mb-2">{{ advantage.title }}</h5>
          <p class="text-gray-600">
            {{ advantage.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();

const advantages = {
  Delhi: [
    {
      icon: "fas fa-subway",
      title: "Metro Connectivity",
      description:
        "Prime Connaught Place location with direct metro access from all NCR regions",
    },
    {
      icon: "fas fa-university",
      title: "University Network",
      description:
        "Strong partnerships with Delhi University, JNU, and other premier institutions",
    },
    {
      icon: "fas fa-language",
      title: "Local Language Support",
      description:
        "Counseling available in Hindi, English, and Punjabi languages",
    },
    {
      icon: "fas fa-handshake",
      title: "Government Relations",
      description:
        "Strong connections with Australian Embassy and High Commission",
    },
  ],
 
  Ahmedabad: [
    {
      icon: "fas fa-book",
      title: "Academic Heritage",
      description:
        "Serving the educational legacy of Ahmedabad with deep understanding of local students",
    },
    {
      icon: "fas fa-train",
      title: "Central Location",
      description:
        "Easy accessibility from all parts of Ahmedabad and Eastern India",
    },
    {
      icon: "fas fa-comments",
      title: "Marathi Support",
      description:
        "Counseling available in Bengali, Hindi, and English languages",
    },
    {
      icon: "fas fa-certificate",
      title: "Proven Track Record",
      description:
        "Years of experience guiding students from Presidency, Jadavpur, and other top colleges",
    },
  ],
};
</script>

<style scoped></style>
