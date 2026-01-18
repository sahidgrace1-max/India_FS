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
const universities = [
  {
    name: "University Of Tasmania",
    img: "/src/assets//Aus/Uni-Tamania.jpeg",
    link: "https://www.utas.edu.au/",
  },
  {
    name: "La Trobe University",
    img: "/src/assets/aus/latrobe.jpg",
    link: "https://www.latrobe.edu.au/",
  },
  {
    name: "Murdoch University",
    img: "/src/assets/aus/murdoch.jpg",
    link: "https://www.murdoch.edu.au/",
  },
  {
    name: "University of Wollongong",
    img: "/src/assets/aus/wollongong.jpg",
    link: "https://www.uow.edu.au/",
  },
  {
    name: "University of New Castle Australia",
    img: "/src/assets/aus/newcastle.jpg",
    link: "https://www.newcastle.edu.au/",
  },
  {
    name: "James Cook University",
    img: "/src/assets/aus/jamescook.jpg",
    link: "https://www.jcu.edu.au/",
  },
  {
    name: "Victoria University",
    img: "/src/assets/aus/vu.jpg",
    link: "https://www.vu.edu.au/",
  },
  {
    name: "Edith Cowan University (Main Campus)",
    img: "/src/assets/aus/ecu.jpg",
    link: "https://www.ecu.edu.au/",
  },
  {
    name: "Torrens University",
    img: "/src/assets/aus/torrens.jpg",
    link: "https://www.torrens.edu.au/",
  },
  {
    name: "Southern Cross University (Main Campus)",
    img: "/src/assets/aus/southerncross.jpg",
    link: "https://www.scu.edu.au/",
  },
  {
    name: "Charles Sturt University",
    img: "/src/assets/aus/charlessturt.jpg",
    link: "https://www.csu.edu.au/",
  },
  {
    name: "University of Southern Queensland",
    img: "/src/assets/aus/usq.jpg",
    link: "https://www.unisq.edu.au/",
  },
  {
    name: "University of the Sunshine Coast (Main Campus)",
    img: "/src/assets/aus/usc.jpg",
    link: "https://www.usc.edu.au/",
  },
  {
    name: "Central Queensland University (Main Campus)",
    img: "/src/assets/aus/cqu.jpg",
    link: "https://www.cqu.edu.au/",
  },
  {
    name: "Charles Darwin University",
    img: "/src/assets/Aus/Charles_darwin.webp",
    link: "https://www.cdu.edu.au/",
  },
  {
    name: "Navitas University",
    img: "/src/assets/aus/navitas.jpg",
    link: "https://www.navitas.com/",
  },
  {
    name: "Canterbury Institute of Management",
    img: "/src/assets/aus/canterbury.jpg",
    link: "https://cihe.edu.au/",
  },
  {
    name: "Swinburne University",
    img: "/src/assets/aus/swinburne.jpg",
    link: "https://www.swinburne.edu.au/",
  },
  {
    name: "Excelsia University College",
    img: "/src/assets/aus/excelsia.jpg",
    link: "https://excelsia.edu.au/",
  },
  {
    name: "University of Canberra",
    img: "/src/assets/aus/canberra.jpg",
    link: "https://www.canberra.edu.au/",
  },
  // Add more universities here if needed
];
</script>
