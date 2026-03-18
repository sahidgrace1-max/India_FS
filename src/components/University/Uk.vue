<template>
  <div class="py-8 animate-sectionFadeIn">
    <!-- Section Title -->
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-2">
      OUR EDUCATION PARTNERS
    </h2>
    <div class="flex justify-center mb-6">
      <div class="w-24 h-1 bg-green-600 rounded-full"></div>
    </div>

    <!-- UK Banner -->
    <div class="flex justify-center mb-8">
      <div class="w-80 h-28 rounded-md overflow-hidden relative group">
        <img
          src="@/assets/uk.jpeg"
          alt="UK"
          class="w-full h-full object-cover opacity-80"
        />
        <div
          class="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-3"
        >
          <h1 class="text-black text-3xl font-bold">UK</h1>
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
import uk from "@/assets/uk.jpeg";
import birminghamcity from "@/assets/Birmingham CIty.webp";
import bpp from "@/assets/BPP University.webp";
import bradford from "@/assets/bradford.png";
import bristol from "@/assets/bristol.png";
import buckinghamshire from "@/assets/buckinghamshire.png";
import cardiffmet from "@/assets/cardiff-metropolitan-university.png";
import coventry from "@/assets/Coventry University.png";
import creativearts from "@/assets/creative arts.png";
import demontfort from "@/assets/de-montfort-university.png";
import edinburghnapier from "@/assets/EdinburghNapierUniversity.png";
import leedsbeckett from "@/assets/leeds-beckett-university.png";
import londonmet from "@/assets/londonmetropolitanuniversity.webp";
import lsbu from "@/assets/LSBU.png";
import northumbria from "@/assets/Northumbria_University_logo.png";
import ravensbourne from "@/assets/ravensbourneuniversity.png";
import regentcollege from "@/assets/RegentCollege.png";
import roehampton from "@/assets/roehampton.png";
import salford from "@/assets/salford.png";
import stirling from "@/assets/Stirling.png";
import sunderland from "@/assets/Sunderland.png";
import uel from "@/assets/Northumbria_University_logo.png";
import lawuni from "@/assets/university of law.png";
import hertfordshire from "@/assets/University_of_Hertfordshire.png";
import greenwich from "@/assets/university-of-greenwich.png";
import huddersfield from "@/assets/university-of-huddersfield.png";
import westlondon from "@/assets/UWL-Logo.png";
import westscotland from "@/assets/UWS.png";
import wolverhampton from "@/assets/Wolverhampton.png";
import worcester from "@/assets/worcester.png";

const universities = [
  {
    name: "Birmingham City University",
    img: birminghamcity,
    link: "https://www.bcu.ac.uk/",
  },
  { name: "BPP University",
    img: bpp,
    link: "https://www.bpp.com/" },
  {
    name: "University of Bradford",
    img: bradford,
    link: "https://www.bradford.ac.uk/",
  },
  {
    name: "University of Bristol",
    img: bristol,
    link: "https://www.bristol.ac.uk/",
  },
  {
    name: "Buckinghamshire New University",
    img: buckinghamshire,
    link: "https://www.bucks.ac.uk/",
  },
  {
    name: "Cardiff Metropolitan University",
    img: cardiffmet,
    link: "https://www.cardiffmet.ac.uk/",
  },
  {
    name: "Coventry University",
    img: coventry,
    link: "https://www.coventry.ac.uk/",
  },
  {
    name: "University for the Creative Arts",
    img: creativearts,
    link: "https://www.uca.ac.uk/",
  },
  {
    name: "De Montfort University",
    img: demontfort,
    link: "https://www.dmu.ac.uk/",
  },
  {
    name: "Edinburgh Napier University",
    img: edinburghnapier,
    link: "https://www.napier.ac.uk/",
  },
  {
    name: "Leeds Beckett University",
    img: leedsbeckett,
    link: "https://www.leedsbeckett.ac.uk/",
  },
  {
    name: "London Metropolitan University",
    img: londonmet,
    link: "https://www.londonmet.ac.uk/",
  },
  {
    name: "LSBU - London South Bank University",
    img: lsbu,
    link: "https://www.lsbu.ac.uk/",
  },
  {
    name: "Northumbria University",
    img: northumbria,
    link: "https://www.northumbria.ac.uk/",
  },
  {
    name: "Ravensbourne University",
    img: ravensbourne,
    link: "https://www.ravensbourne.ac.uk/",
  },
  {
    name: "Regent College London",
    img: regentcollege,
    link: "https://www.rcl.ac.uk/",
  },
  {
    name: "University of Roehampton London",
    img: roehampton,
    link: "https://www.roehampton.ac.uk/",
  },
  {
    name: "University of Salford London",
    img: salford,
    link: "https://www.salford.ac.uk/",
  },
  {
    name: "University of Stirling",
    img: stirling,
    link: "https://www.stir.ac.uk/",
  },
  {
    name: "University of Sunderland",
    img: sunderland,
    link: "https://www.sunderland.ac.uk/",
  },
  {
    name: "University of East London",
    img: uel,
    link: "https://www.uel.ac.uk/",
  },
  { name: "University of Law", img: lawuni, link: "https://www.law.ac.uk/" },
  {
    name: "University of Hertfordshire",
    img: hertfordshire,
    link: "https://www.herts.ac.uk/",
  },
  {
    name: "University of Greenwich",
    img: greenwich,
    link: "https://www.greenwich.ac.uk/",
  },
  {
    name: "University of Huddersfield",
    img: huddersfield,
    link: "https://www.hud.ac.uk/",
  },
  {
    name: "University of West London",
    img: westlondon,
    link: "https://www.uwl.ac.uk/",
  },
  {
    name: "University of the West of Scotland",
    img: westscotland,
    link: "https://www.uws.ac.uk/",
  },
  {
    name: "University of Wolverhampton",
    img: wolverhampton,
    link: "https://www.wlv.ac.uk/",
  },
  {
    name: "University of Worcester",
    img: worcester,
    link: "https://www.worcester.ac.uk/",
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
