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
          src="@/assets/Canada/canada.webp"
          alt="Canada"
          class="w-full h-full object-cover opacity-80"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <h1 class="text-black text-3xl font-bold">Canada</h1>
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
    name: "Flamming",
    img: "/src/assets/Canada/Fleming College.png",
    link: "https://flemingcollege.ca/",
  },
  {
    name: "George Brown College(public)",
    img: "/src/assets/Canada/George Brown College (Public).jpg",
    link: "https://www.georgebrown.ca/",
  },
  {
    name: "Niagara College(Public)",
    img: "/src/assets/Canada/Niagara College (Public).jpg",
    link: "https://www.niagaracollege.ca/",
  },
  {
    name: "University Canada West(Private)",
    img: "/src/assets/Canada/University Canada West (Private).jpg",
    link: "https://www.ucanwest.ca/",
  },
  {
    name: "Durham College (Public)",
    img: "/src/assets/Canada/Durham College (Public).jpg",
    link: "https://durhamcollege.ca/",
  },
  {
    name: "Lambton College(Public)",
    img: "/src/assets/Canada/Lambton college (Public).jpg",
    link: "https://www.lambtoncollege.ca/",
  },
  {
    name: "Lakeland College(Private)",
    img: "/src/assets/Canada/Lakeland College (Private).jpg",
    link: "https://www.lakelandcollege.ca/",
  },
  {
    name: "Northern College (Private)",
    img: "/src/assets/Canada/Northern College (Private).jpg",
    link: "https://www.northerncollege.ca/",
  },
  {
    name: "Capilano University(Public)",
    img: "/src/assets/Canada/Capilano University (Public).png",
    link: "https://www.capilanou.ca/",
  },
  {
    name: " St Clair College",
    img: "/src/assets/Canada/St Clair College.png",
    link: "https://www.stclaircollege.ca/",
  },
  {
    name: "Cambrian College",
    img: "/src/assets/Canada/Cambrian College.jpg",
    link: "https://cambriancollege.ca/",
  },
  {
    name: "Alexander College",
    img: "/src/assets/Canada/Alexander College.jpg",
    link: "https://alexandercollege.ca/",
  },
  {
    name: "Loyalist College",
    img: "/src/assets/Canada/Loyalist College.jpg",
    link: "https://www.loyalistcollege.com/",
  },
  {
    name: "International Business University",
    img: "/src/assets/Canada/International Business University.png",
    link: "https://www.ibu.ca/",
  },
  {
    name: "University of Niagra Falls Canada",
    img: "/src/assets/Canada/University-of-Niagra-Falls-Canada-featured-image.jpg",
    link: "https://www.niagaraparks.com/",
  },
  {
    name: "North Island College",
    img: "/src/assets/Canada/North-Island_College.jpg",
    link: "https://www.nic.bc.ca/",
  },
  {
    name: "Olds College",
    img: "/src/assets/Canada/Olds-College4.png",
    link: "https://www.oldscollege.ca/",
  },
  {
    name: "Bow Valley College",
    img: "/src/assets/Canada/Bow Valley College.jpg",
    link: "https://bowvalleycollege.ca/",
  },
  {
    name: "St Lawrence College",
    img: "/src/assets/Canada/St Lawrence College.jpg",
    link: "https://www.stlawrencecollege.ca/",
  },
  {
    name: "The King's University",
    img: "/src/assets/Canada/The King's University.jpg",
    link: "https://www.kingsu.ca/",
  },
];
</script>