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
          src="@/assets/uk/uk.jpeg"
          alt="Uk"
          class="w-full h-full object-cover opacity-80"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <h1 class="text-black text-3xl font-bold">Uk</h1>
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
    name: "Birmingham City University",
    img: "\src\assets\UK\Birmingham CIty.webp",
    link: "https://www.bcu.ac.uk/",
  },
  {
    name: "La Trobe University",
    img: "\src\assets\UK\BPP University.webp",
    link: "https://www.bpp.com/",
  },
  {
    name: "University of Bradford",
    img: "src/assets/UK/bradford.png",
    link: "https://www.bradford.ac.uk/",
  },
  {
    name: "University of Bristol",
    img: "/src/assets/uk/bristol.png",
    link: "https://www.bristol.ac.uk/",
  },
  {
    name: "Buckinghamshire New University",
    img: "src/assets/UK/buckinghamshire.png",
    link: "https://www.bucks.ac.uk/",
  },
  {
    name: "Cardiff Metropolitan University",
    img: "src/assets/UK/cardiff-metropolitan-university.png",
    link: "https://www.cardiffmet.ac.uk/",
  },
  {
    name: "Coventry University",
    img: "src/assets/UK/Coventry University.png",
    link: "https://www.coventry.ac.uk/",
  },
  {
    name: "University for the Creative Arts",
    img: "/src/assets/UK/creative arts.png",
    link: "https://www.uca.ac.uk/",
  },
  {
    name: "De Montfort University",
    img: "/src/assets/UK/de-montfort-university.png",
    link: "https://www.dmu.ac.uk/",
  },
  {
    name: "Edinburgh Napier University",
    img: "/src/assets/uk/EdinburghNapierUniversity.png",
    link: "https://www.napier.ac.uk/",
  },
  {
    name: "Leeds Beckett University",
    img: "/src/assets/uk/leeds-beckett-university.png",
    link: "https://www.leedsbeckett.ac.uk/",
  },
  {
    name: "London Metropolitan University",
    img: "/src/assets/uk/londonmetropolitanuniversity.webp",
    link: "https://www.londonmet.ac.uk/",
  },
  {
    name: "LSBU - London South Bank University",
    img: "/src/assets/uk/LSBU.png",
    link: "https://www.lsbu.ac.uk/",
  },
  {
    name: "Northumbria University",
    img: "/src/assets/uk/northumbria_university_logo.png",
    link: "https://www.northumbria.ac.uk/",
  },
  {
    name: "Ravensbourne University",
    img: "/src/assets/uk/ravensbourneuniversity.png",
    link: "https://www.ravensbourne.ac.uk/",
  },
  {
    name: "Regent College London",
    img: "/src/assets/uk/RegentCollege.png",
    link: "https://www.rcl.ac.uk/",
  },
  {
    name: "University of Roehampton London",
    img: "/src/assets/uk/roehampton.png",
    link: "https://www.roehampton.ac.uk/",
  },
  {
    name: "University of Salford London",
    img: "/src/assets/uk/Salford.png",
    link: "https://www.salford.ac.uk/",
  },
  {
    name: "University of Stirling",
    img: "/src/assets/uk/Stirling.png",
    link: "https://www.stir.ac.uk/",
  },
  {
    name: "University of Sunderland",
    img: "/src/assets/uk/sunderland.png",
    link: "https://www.sunderland.ac.uk/",
  },
  {
    name: "University of East London",
    img: "/src/assets/uk/northumbria_university_logo.png",
    link: "https://www.uel.ac.uk/",
  },
  {
    name: "University of Law",
    img: "/src/assets/uk/university of law.png",
    link: "https://www.law.ac.uk/",
  },
  {
    name: "University of Hertfordshire",
    img: "/src/assets/uk/University_of_Hertfordshire.png",
    link: "https://www.herts.ac.uk/",
  },
  {
    name: "University of Greenwich",
    img: "/src/assets/uk/university-of-greenwich.png",
    link: "https://www.greenwich.ac.uk/",
  },
  {
    name: "University of Huddersfield",
    img: "/src/assets/uk/university-of-huddersfield.png",
    link: "https://www.hud.ac.uk/",
  },
  {
    name: "University of West London",
    img: "/src/assets/uk/UWL-Logo.png",
    link: "https://www.uwl.ac.uk/",
  },
  {
    name: "University of the West of Scotland",
    img: "/src/assets/uk/UWS.png",
    link: "https://www.uws.ac.uk/",
  },
  {
    name: "University of Wolverhampton",
    img: "/src/assets/uk/Wolverhampton.png",
    link: "https://www.wlv.ac.uk/",
  },
  {
    name: "University of Worcester",
    img: "/src/assets/uk/Worcester.png",
    link: "https://www.worcester.ac.uk/",
  },
];
</script>
