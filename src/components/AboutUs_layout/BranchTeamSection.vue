<template>
  <div
    class="w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 font-sans"
  >
    <div class="max-w-7xl mx-auto px-4 py-12 font-sans">
      <div class="text-center mx-auto pb-12 font-sans" style="max-width: 800px">
        <h4
          class="text-blue-700 font-bold mb-2 tracking-widest uppercase font-sans"
        >
          Our {{ selectedBranch }} Team
        </h4>
        <h1
          class="w-full max-w-2xl mx-auto text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-blue-700 font-sans break-words leading-tight"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1)"
        >
          Meet Our {{ selectedBranch }} Office Experts
        </h1>
        <p class="text-gray-700 text-lg mb-0 font-sans">
          {{ getTeamDescription(selectedBranch) }}
        </p>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 font-sans"
      >
        <!-- Team Members -->
        <div
          v-for="member in teamMembers[selectedBranch]"
          :key="member.name"
          class="bg-white rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-t-8 border-blue-400 font-sans"
        >
          <div class="relative overflow-hidden rounded-t-3xl font-sans">
            <img
              :src="member.image"
              class="w-full h-60 object-cover grayscale-0 hover:grayscale transition duration-300"
              :alt="member.name"
            />
            <div class="absolute bottom-3 right-3 flex gap-2">
              <a
                :href="member.linkedin || '#'"
                target="_blank"
                title="LinkedIn"
                class="bg-white rounded-full p-2 shadow hover:bg-blue-100 hover:scale-110 transition"
                ><i class="fab fa-linkedin-in text-blue-600"></i
              ></a>
              <a
                :href="member.facebook || '#'"
                target="_blank"
                title="Facebook"
                class="bg-white rounded-full p-2 shadow hover:bg-blue-100 hover:scale-110 transition"
                ><i class="fab fa-facebook-f text-blue-600"></i
              ></a>
            </div>
          </div>
          <div
            class="flex-1 flex flex-col items-center text-center p-8 font-sans"
          >
            <h4 class="font-extrabold text-xl mb-1 text-blue-800 font-sans">
              {{ member.name }}
            </h4>
            <span class="text-blue-600 text-sm font-semibold mb-1 font-sans">{{
              member.position
            }}</span>
            <div
              class="bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 rounded-full px-4 py-1 text-xs font-bold mb-3 shadow font-sans"
            >
              {{ member.badge }}
            </div>
            <p class="text-gray-700 text-base font-sans">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();

// Team data for each branch
const teamMembers = {
  Delhi: [
    {
      name: "Rajesh Kumar Sharma",
      position: "Director - Delhi Office",
      badge: "15+ Years Experience",
      description:
        "Leading the Delhi operations with expertise in Australian education and migration services for North Indian students.",
      image: new URL("@/assets/image1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Priya Gupta",
      position: "Senior Education Counselor",
      badge: "QEAC Certified",
      description:
        "Specializing in university selection and course guidance for undergraduate and postgraduate programs.",
      image: new URL("@/assets/image1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Amit Singh",
      position: "Migration Consultant",
      badge: "MARA Registered",
      description:
        "Expert in Australian migration law and visa processing with focus on skilled migration pathways.",
      image: new URL("@/assets/image1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Neha Sharma",
      position: "IELTS/PTE Coordinator",
      badge: "Certified Trainer",
      description:
        "Helping students achieve their English proficiency goals with personalized coaching and test strategies.",
      image: new URL("@/assets/image1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
  ],
  Ahmedabad: [
    {
      name: "Subrata Banerjee",
      position: "Director - Ahmedabad Office",
      badge: "13+ Years Experience",
      description:
        "Leading the Ahmedabad office with deep understanding of Eastern Indian students' needs.",
      image: new URL("@/assets/image1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Rina Chatterjee",
      position: "Senior Counselor",
      badge: "QEAC Certified",
      description:
        "Experienced in guiding students through complex admission processes and scholarship applications.",
      image: new URL("@/assets/image1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Debashis Das",
      position: "Visa Consultant",
      badge: "Visa Specialist",
      description:
        "Ensuring smooth visa processing with attention to detail and thorough documentation support.",
      image: new URL("@/assets/image1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Moumita Ghosh",
      position: "Student Support Officer",
      badge: "Student Care Expert",
      description:
        "Providing comprehensive pre-departure guidance and ongoing support for overseas students.",
      image: new URL("@/assets/image1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
  ],
};

function getTeamDescription(branch) {
  const descriptions = {
    Delhi:
      "Our experienced team in Delhi understands the unique needs of North Indian students",
    Mumbai:
      "Our Mumbai team brings extensive experience serving students from Western India",
    Bangalore:
      "Our Bangalore experts specialize in guiding tech-savvy students from South India",
    Ahmedabad:
      "Our Ahmedabad team is dedicated to supporting students from Eastern India",
  };
  return descriptions[branch] || "";
}
</script>

<style scoped></style>
