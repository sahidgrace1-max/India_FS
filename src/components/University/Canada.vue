<template>
  <div class="py-8 animate-sectionFadeIn">
    <!-- Section Title -->
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-2">
      OUR EDUCATION PARTNERS
    </h2>
    <div class="flex justify-center mb-6">
      <div class="w-24 h-1 bg-green-600 rounded-full"></div>
    </div>
    <!-- Canada Banner -->
    <div class="flex justify-center mb-8">
      <div class="w-80 h-28 rounded-md overflow-hidden relative group">
        <img
          :src="canada"
          alt="Canada"
          class="w-full h-full object-cover opacity-80"
        />
        <div
          class="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-3"
        >
          <h1 class="text-black text-3xl font-bold">Canada</h1>
        </div>
      </div>
    </div>
    <!-- University Cards -->
    <div class="flex flex-wrap justify-center gap-x-12 gap-y-10">
      <div
        v-for="(uni, idx) in universities"
        :key="idx"
        class="flex flex-col items-center w-48 opacity-0 animate-cardFadeIn"
        :style="{ animationDelay: `${idx * 0.1}s` }"
      >
        <a
          :href="uni.link"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full border-4 border-blue-400 p-2 w-40 h-40 flex items-center justify-center overflow-hidden mb-2 shadow-md transition-transform duration-500 ease-out hover:scale-110 hover:rotate-3 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <img
            :src="uni.img"
            :alt="uni.name"
            class="object-cover w-full h-full rounded-full"
          />
        </a>
        <span class="text-center text-base mt-1">{{ uni.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import canada from "@/assets/canada.webp";
import fleming from "@/assets/Fleming College.png";
import georgebrown from "@/assets/George Brown College (Public).jpg";
import niagara from "@/assets/Niagara College (Public).jpg";
import ucw from "@/assets/University Canada West (Private).jpg";
import durham from "@/assets/Durham College (Public).jpg";
import lambton from "@/assets/Lambton college (Public).jpg";
import lakeland from "@/assets/Lakeland College (Private).jpg";
import northern from "@/assets/Northern College (Private).jpg";
import capilano from "@/assets/Capilano University (Public).png";
import stclair from "@/assets/St Clair College.png";
import cambrian from "@/assets/Cambrian College.jpg";
import alexander from "@/assets/Alexander College.jpg";
import loyalist from "@/assets/Loyalist College.jpg";
import ibu from "@/assets/International Business University.png";
import niagarafalls from "@/assets/University-of-Niagra-Falls-Canada-featured-image.jpg";
import northisland from "@/assets/North-Island_College.jpg";
import olds from "@/assets/Olds-College4.png";
import bowvalley from "@/assets/Bow Valley College.jpg";
import stlawrence from "@/assets/St Lawrence College.jpg";
import kingsu from "@/assets/The King's University.jpg";

const universities = [
  { name: "Flamming", img: fleming, link: "https://flemingcollege.ca/" },
  {
    name: "George Brown College(public)",
    img: georgebrown,
    link: "https://www.georgebrown.ca/",
  },
  {
    name: "Niagara College(Public)",
    img: niagara,
    link: "https://www.niagaracollege.ca/",
  },
  {
    name: "University Canada West(Private)",
    img: ucw,
    link: "https://www.ucanwest.ca/",
  },
  {
    name: "Durham College (Public)",
    img: durham,
    link: "https://durhamcollege.ca/",
  },
  {
    name: "Lambton College(Public)",
    img: lambton,
    link: "https://www.lambtoncollege.ca/",
  },
  {
    name: "Lakeland College(Private)",
    img: lakeland,
    link: "https://www.lakelandcollege.ca/",
  },
  {
    name: "Northern College (Private)",
    img: northern,
    link: "https://www.northerncollege.ca/",
  },
  {
    name: "Capilano University(Public)",
    img: capilano,
    link: "https://www.capilanou.ca/",
  },
  {
    name: "St Clair College",
    img: stclair,
    link: "https://www.stclaircollege.ca/",
  },
  {
    name: "Cambrian College",
    img: cambrian,
    link: "https://cambriancollege.ca/",
  },
  {
    name: "Alexander College",
    img: alexander,
    link: "https://alexandercollege.ca/",
  },
  {
    name: "Loyalist College",
    img: loyalist,
    link: "https://www.loyalistcollege.com/",
  },
  {
    name: "International Business University",
    img: ibu,
    link: "https://www.ibu.ca/",
  },
  {
    name: "University of Niagra Falls Canada",
    img: niagarafalls,
    link: "https://www.niagaraparks.com/",
  },
  {
    name: "North Island College",
    img: northisland,
    link: "https://www.nic.bc.ca/",
  },
  { name: "Olds College", img: olds, link: "https://www.oldscollege.ca/" },
  {
    name: "Bow Valley College",
    img: bowvalley,
    link: "https://bowvalleycollege.ca/",
  },
  {
    name: "St Lawrence College",
    img: stlawrence,
    link: "https://www.stlawrencecollege.ca/",
  },
  {
    name: "The King's University",
    img: kingsu,
    link: "https://www.kingsu.ca/",
  },
];
</script>

<style scoped>
/* Section fade-in */
@keyframes sectionFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-sectionFadeIn {
  animation: sectionFadeIn 1s ease-out forwards;
}

/* Staggered card fade-in */
@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-cardFadeIn {
  animation: cardFadeIn 0.6s ease-out forwards;
}
</style>
