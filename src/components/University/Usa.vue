<template>
  <div class="py-8 animate-sectionFadeIn">
    <!-- Section Title -->
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-2">
      OUR EDUCATION PARTNERS
    </h2>
    <div class="flex justify-center mb-6">
      <div class="w-24 h-1 bg-green-600 rounded-full"></div>
    </div>

    <!-- USA Banner -->
    <div class="flex justify-center mb-8">
      <div class="w-80 h-28 rounded-md overflow-hidden relative group">
        <img
          src="@/assets/usa.jpeg"
          alt="USA"
          class="w-full h-full object-cover opacity-80"
        />
        <div
          class="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-3"
        >
          <h1 class="text-black text-3xl font-bold">USA</h1>
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
import usa from "@/assets/usa.jpeg";
import davis from "@/assets/davis.jpg";
import concordia from "@/assets/Concordia.webp";
import webster from "@/assets/Webster.jpg";
import avila from "@/assets/avila-university.webp";
import bethany from "@/assets/bethany-college-stacked-logo.avif";
import elmhurst from "@/assets/elmhurst-university.jpg";
import southeast from "@/assets/Southeast.webp";
import southwest from "@/assets/SouthwestMinnesotaState.jpg";
import youngstown from "@/assets/Youngstown.jpeg";
import texasstate from "@/assets/TexasState.jpg";
import arkansas from "@/assets/Arkansas_State_Unversity-.jpg";
import wright from "@/assets/wright-state-university.png";
import felician from "@/assets/Felician-University.webp";
import westcliff from "@/assets/westcliff-campus.jpg";
import williampatterson from "@/assets/WP_Campus.webp";
import bridgeport from "@/assets/BridgeportUniversity.jpg";
import middletennessee from "@/assets/MiddleTennessee.jpg";
import hustontillotson from "@/assets/Huston-Tillotson University.avif";
import coloradomesa from "@/assets/colorado-mesa-university.jpg";
import albertus from "@/assets/Albertus Magnus College.jpg";

const universities = [
  { name: "Davis University", img: davis, link: "https://www.davis.edu/" },
  {
    name: "Concordia University",
    img: concordia,
    link: "https://www.concordia.edu/",
  },
  {
    name: "Webster University",
    img: webster,
    link: "https://www.webster.edu/",
  },
  {
    name: "Avila University Kansas",
    img: avila,
    link: "https://www.avila.edu/",
  },
  { name: "Bethany College", img: bethany, link: "https://www.bethanykc.edu/" },
  {
    name: "Elmhurst University",
    img: elmhurst,
    link: "https://www.elmhurst.edu/",
  },
  {
    name: "Southeast Missouri State University",
    img: southeast,
    link: "https://www.semo.edu/",
  },
  {
    name: "Southwest Minnesota State University",
    img: southwest,
    link: "https://www.smsu.edu/",
  },
  {
    name: "Youngstown State University",
    img: youngstown,
    link: "https://www.ysu.edu/",
  },
  {
    name: "Texas State University",
    img: texasstate,
    link: "https://www.txstate.edu/",
  },
  {
    name: "Arkansas State University",
    img: arkansas,
    link: "https://www.astate.edu/",
  },
  {
    name: "Wright State University",
    img: wright,
    link: "https://www.wright.edu/",
  },
  {
    name: "Felician University",
    img: felician,
    link: "https://www.felician.edu/",
  },
  {
    name: "Westcliff University",
    img: westcliff,
    link: "https://www.westcliff.edu/",
  },
  {
    name: "William Patterson University",
    img: williampatterson,
    link: "https://www.wpunj.edu/",
  },
  {
    name: "Bridgeport University",
    img: bridgeport,
    link: "https://www.bridgeport.edu/",
  },
  {
    name: "Middle Tennessee State University",
    img: middletennessee,
    link: "https://www.mtsu.edu/",
  },
  {
    name: "Huston-Tillotson University",
    img: hustontillotson,
    link: "https://www.huston-tillotson.edu/",
  },
  {
    name: "Colorado Mesa University",
    img: coloradomesa,
    link: "https://www.coloradomesa.edu/",
  },
  {
    name: "Albertus Magnus College",
    img: albertus,
    link: "https://www.albertus.edu/",
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
