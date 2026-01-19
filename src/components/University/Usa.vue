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
          src="@/assets/Usa/usa.avif"
          alt="USA"
          class="w-full h-full object-cover opacity-80"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <h1 class="text-black text-3xl font-bold">USA</h1>
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
    name: "Davis University",
    img: "/src/assets/Usa/davis.jpg",
    link: "https://www.davis.edu/",
  },
  {
    name: "Concordia University ",
    img: "/src/assets/Usa/Concordia.webp",
    link: "https://www.concordia.edu/",
  },
  {
    name: "Webster University",
    img: "/src/assets/Usa/Webster.jpg",
    link: "https://www.webster.edu/",
  },
  {
    name: "Avila University Kansas",
    img: "/src/assets/Usa/avila-university.webp",
    link: "https://www.avila.edu/",
  },
  {
    name: "Bethany College",
    img: "/src/assets/Usa/bethany-college-stacked-logo.avif",
    link: "https://www.bethanykc.edu/",
  },
  {
    name: "Elmhurst University ",
    img: "/src/assets/Usa/elmhurst-university.jpg",
    link: "https://www.elmhurst.edu/",
  },
  {
    name: "Southeast Missouri State University",
    img: "/src/assets/Usa/Southeast.webp",
    link: "https://www.semo.edu/",
  },
  {
    name: "Southwest Minnesota State University",
    img: "/src/assets/Usa/SouthwestMinnesotaState.jpg",
    link: "https://www.smsu.edu/",
  },
  {
    name: "Youngstown State University",
    img: "/src/assets/Usa/Youngstown.jpeg",
    link: "https://www.ysu.edu/",
  },
  {
    name: "Texas State University ",
    img: "/src/assets/Usa/TexasState.jpg",
    link: "https://www.txstate.edu/",
  },
  {
    name: "Arkansas state University ",
    img: "/src/assets/Usa/Arkansas_State_Unversity-.jpg",
    link: "https://www.astate.edu/",
  },
  {
    name: "Wright State University",
    img: "/src/assets/Usa/wright-state-university.png",
    link: "https://www.wright.edu/",
  },
  {
    name: "Felican University ",
    img: "/src/assets/Usa/Felician-University.webp",
    link: "https://www.felician.edu/",
  },
  {
    name: "Westclift University ",
    img: "/src/assets/Usa/westcliff-campus.jpg",
    link: "https://www.westclift.edu/",
  },
  {
    name: "William Patterson University ",
    img: "/src/assets/Usa/WP_Campus.webp",
    link: "https://www.wpunj.edu/",
  },
  {
    name: "Bridgeport University ",
    img: "/src/assets/Usa/BridgeportUniversity.jpg",
    link: "https://www.bridgeport.edu/",
  },
  {
    name: "Middle Tennessee State University ",
    img: "/src/assets/Usa/MiddleTennessee.jpg",
    link: "https://www.mtsu.edu/",
  },
  {
    name: "Huston-Tillotson University",
    img: "/src/assets/Usa/Huston-Tillotson University.avif",
    link: "https://www.huston-tillotson.edu/",
  },
  {
    name: "Colorado Mesa University",
    img: "/src/assets/Usa/colorado-mesa-university.jpg",
    link: "https://www.coloradomesa.edu/",
  },
  {
    name: "Albertus Magnus College",
    img: "/src/assets/Usa/Albertus Magnus College.jpg",
    link: "https://www.albertus.edu/",
  },
];
</script>
