<template>
  <div class="w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 font-sans">
    <div class="max-w-7xl mx-auto px-4 py-12 font-sans">

      <!-- Header -->
      <div class="text-center mx-auto pb-12 font-sans" style="max-width: 800px">
        <h4 class="text-blue-700 font-bold mb-2 tracking-widest uppercase font-sans">
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

      <!-- Team Cards Grid -->
      <div class="flex flex-wrap justify-center gap-8 font-sans">
        <div
          v-for="member in teamMembers[selectedBranch]"
          :key="member.name"
          class="bg-white rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-t-8 border-blue-400 font-sans w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex flex-col"
        >

          <!-- IMAGE DIV -->
<div class="flex items-center justify-center bg-blue-50 py-8 px-4 rounded-t-3xl">
  <div class="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-blue-300">
    <img
      :src="member.image"
      :alt="member.name"
      class="w-full h-full object-cover hover:grayscale transition duration-300"
    />
  </div>
</div>

          <!-- TEXT DIV -->
          <div class="flex flex-col items-center text-center px-6 py-6 font-sans flex-1">
            <h4 class="font-extrabold text-xl mb-1 text-blue-800 font-sans">
              {{ member.name }}
            </h4>
            <span class="text-blue-600 text-sm font-semibold mb-4 font-sans">
              {{ member.position }}
            </span>

            <!-- DESCRIPTION DIV -->
            <div class="w-full bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3 mt-auto">
              <p class="text-gray-600 text-sm leading-relaxed font-sans">
                {{ member.description }}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamSection',
  props: {
    selectedBranch: {
      type: String,
      required: true
    },
    teamMembers: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTeamDescription(branch) {
      const descriptions = {
        Kathmandu: 'A passionate group of professionals dedicated to delivering excellence across every project in our Kathmandu office.',
        Pokhara: 'Our Pokhara team brings creativity and regional expertise to every challenge they tackle.',
        Chitwan: 'Meet the driven experts powering our Chitwan operations with skill and dedication.',
      }
      return descriptions[branch] || `Meet the talented professionals at our ${branch} office.`
    }
  }
}
</script>
<script setup>
import { computed } from "vue";
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();

// Team data for each branch
const teamMembers = {
  Delhi: [
    /*{
      name: "Deepak Kumar",
      position: "GS Cum Visa Office",
      description:
        "Leading the Delhi operations with expertise in Australian education and migration services for North Indian students.",
      image: new URL("@/assets/Gs.jpg", import.meta.url).href,
    },*/
    {
      name: "Deepa Rani",
      position: "GS & Visa Officer",
      description:
        "GS & Visa (Australia, Canada, NZ, US, UK) Counselor at Grace International. I have been working in the same field from the last 9 years. I assist students with course selection, university applications, and the overall admission process.",
      image: new URL("@/assets/Deepa1.png", import.meta.url).href,
    },
    {
      name: "Vandana Gupta",
      position: "Sr. Counsellor",
      description:
        "Dedicated Senior Counsellor with 4 years of experience, passionate about guiding students from career counselling and university selection through to applications and admissions at top international universities.",
      image: new URL("@/assets/Vandana1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
    /*{
      name: "Nidhi Mathur",
      position: "English Proficiency Exam Expert",
      description:
        "Helping students achieve their English proficiency goals with personalized coaching and test strategies.",
      image: new URL("@/assets/English_Proficiency_Exam_Expert.jpg", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },*/
    {
      name: "Himani Sharma",
      position: "Sr. Counsellor",
      description:
        "Dedicated Senior Counsellor with 6 years of experience, passionate about guiding students from career counselling and university selection through to applications and admissions at top international universities.",
      image: new URL("@/assets/Himani1.png", import.meta.url).href,
      linkedin: "#",
      facebook: "#",
    },
    {
      name: "Karishma Singh",
      position: "Sr. Counsellor",
      description:
        "Certified education counsellor with 7 years of experience specialising in Australia, guiding students from career counselling and university selection through to applications and visa assistance at top Australian universities.",
      image: new URL("@/assets/Karishma.png", import.meta.url).href,
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
