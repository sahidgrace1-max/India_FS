<template>
  <div class="py-8">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-2">
      OUR EDUCATION PARTNERS
    </h2>
    <div class="flex justify-center mb-6">
      <div class="w-24 h-1 bg-green-600 rounded-full"></div>
    </div>
    <div class="flex justify-center mb-8">
      <div class="w-80 h-28 rounded-md overflow-hidden relative">
        <img
          src="@/assets/aus.jpeg"
          alt="Australia"
          class="w-full h-full object-cover opacity-80"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <h1 class="text-black text-3xl font-bold">Australia</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-x-12 gap-y-10">
      <div
        v-for="(uni, idx) in universities"
        :key="idx"
        class="flex flex-col items-center w-48"
      >
        <a
          :href="uni.link"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full border-4 border-blue-400 p-2 w-40 h-40 flex items-center justify-center overflow-hidden mb-2 shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
import uniTasmania from "@/assets/Uni-Tamania.jpeg";
import latrobe from "@/assets/La Trobe University.jpg";
import murdoch from "@/assets/MurdochUniversity.jpg";
import uow from "@/assets/University of Wollongong.jpg";
import newcastle from "@/assets/University of New Castle Australia.png";
import jamescook from "@/assets/jamesook-university.jpg";
import victoria from "@/assets/Victoria University.webp";
import edith from "@/assets/Edith Cowan University.avif";
import torrens from "@/assets/Torrens.png";
import southernCross from "@/assets/Southern Cross University.jpg";
import charlesTourt from "@/assets/Charles Sturt University.jpg";
import sunshineCoast from "@/assets/University of the Sunshine Coast .jpg";
import centralQld from "@/assets/Central Queensland University.jpg";
import charlesDarwin from "@/assets/Charles_darwin.webp";
import navitas from "@/assets/Navitas University.png";
import canterbury from "@/assets/Canterbury Institute of Management.jpg";
import swinburne from "@/assets/Swinburne University.jpg";
import excelsia from "@/assets/Excelsia University College.jpg";
import canberra from "@/assets/University of Canberra.jpg";
import unisq from "@/assets/University of Southern Queensland.jpg";

const universities = [
  {
    name: "University Of Tasmania",
    img: uniTasmania,
    link: "https://www.utas.edu.au/",
  },
  {
    name: "La Trobe University",
    img: latrobe,
    link: "https://www.latrobe.edu.au/",
  },
  {
    name: "Murdoch University",
    img: murdoch,
    link: "https://www.murdoch.edu.au/",
  },
  {
    name: "University of Wollongong",
    img: uow,
    link: "https://www.uow.edu.au/",
  },
  {
    name: "University of New Castle Australia",
    img: newcastle,
    link: "https://www.newcastle.edu.au/",
  },
  {
    name: "James Cook University",
    img: jamescook,
    link: "https://www.jcu.edu.au/",
  },
  {
    name: "Victoria University",
    img: victoria,
    link: "https://www.vu.edu.au/",
  },
  {
    name: "Edith Cowan University (Main Campus)",
    img: edith,
    link: "https://www.ecu.edu.au/",
  },
  {
    name: "Torrens University",
    img: torrens,
    link: "https://www.torrens.edu.au/",
  },
  {
    name: "Southern Cross University (Main Campus)",
    img: southernCross,
    link: "https://www.scu.edu.au/",
  },
  {
    name: "Charles Sturt University",
    img: charlesTourt,
    link: "https://www.csu.edu.au/",
  },
  {
    name: "University of Southern Queensland",
    img: unisq,
    link: "https://www.unisq.edu.au/",
  },
  {
    name: "University of the Sunshine Coast (Main Campus)",
    img: sunshineCoast,
    link: "https://www.usc.edu.au/",
  },
  {
    name: "Central Queensland University (Main Campus)",
    img: centralQld,
    link: "https://www.cqu.edu.au/",
  },
  {
    name: "Charles Darwin University",
    img: charlesDarwin,
    link: "https://www.cdu.edu.au/",
  },
  {
    name: "Navitas University",
    img: navitas,
    link: "https://www.navitas.com/",
  },
  {
    name: "Canterbury Institute of Management",
    img: canterbury,
    link: "https://cihe.edu.au/",
  },
  {
    name: "Swinburne University",
    img: swinburne,
    link: "https://www.swinburne.edu.au/",
  },
  {
    name: "Excelsia University College",
    img: excelsia,
    link: "https://excelsia.edu.au/",
  },
  {
    name: "University of Canberra",
    img: canberra,
    link: "https://www.canberra.edu.au/",
  },
];
</script>
