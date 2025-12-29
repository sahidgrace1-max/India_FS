<template>
  <div class="py-8">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-2">OUR EDUCATION PARTNERS</h2>
    <div class="flex justify-center mb-6">
      <div class="w-24 h-1 bg-green-600 rounded-full"></div>
    </div>
    <div class="flex justify-center mb-8">
      <div class="w-80 h-28 rounded-md overflow-hidden relative">
        <img src="@/assets/aus.jpeg" alt="Australia" class="w-full h-full object-cover opacity-80" />
        <div class="absolute inset-0 flex items-center justify-center">
          <h1 class="text-black text-3xl font-bold">Australia</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-x-12 gap-y-10">
      <div v-for="(uni, idx) in universities" :key="idx" class="flex flex-col items-center w-48">
        <a :href="uni.link" target="_blank" rel="noopener noreferrer" class="rounded-full border-4 border-blue-400 p-2 w-40 h-40 flex items-center justify-center overflow-hidden mb-2 shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <img :src="uni.img" :alt="uni.name" class="object-cover w-full h-full rounded-full" />
        </a>
        <span class="text-center text-base mt-1">{{ uni.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const universities = [
  { name: 'USQ – Sydney Center', img: '/src/assets/aus/usq.jpg', link: 'https://www.usq.edu.au/' },
  { name: 'USC', img: '/src/assets/aus/usc.jpg', link: 'https://www.usc.edu.au/' },
  { name: 'Torrens University', img: '/src/assets/aus/torrens.jpg', link: 'https://www.torrens.edu.au/' },
  { name: 'Southern Cross University', img: '/src/assets/aus/southerncross.jpg', link: 'https://www.scu.edu.au/' },
  { name: 'Melbourne Institute of Technology', img: '/src/assets/aus/mit.jpg', link: 'https://www.mit.edu.au/' },
  { name: 'La Trobe University', img: '/src/assets/aus/latrobe.jpg', link: 'https://www.latrobe.edu.au/' },
  { name: 'Kent', img: '/src/assets/aus/kent.jpg', link: 'https://kent.edu.au/' },
  { name: 'Kaplan Business School', img: '/src/assets/aus/kaplan.jpg', link: 'https://www.kbs.edu.au/' },
  { name: 'JamesCook University', img: '/src/assets/aus/jamescook.jpg', link: 'https://www.jcu.edu.au/' },
  { name: 'ECU', img: '/src/assets/aus/ecu.jpg', link: 'https://www.ecu.edu.au/' },
  { name: 'Charles Sturt University', img: '/src/assets/aus/charlessturt.jpg', link: 'https://www.csu.edu.au/' },
  { name: 'Charles Darwin University', img: '/src/assets/aus/charlesdarwin.jpg', link: 'https://www.cdu.edu.au/' },
  { name: 'Canterbury Institute', img: '/src/assets/aus/canterbury.jpg', link: 'https://cihe.edu.au/' },
  { name: 'CQU University', img: '/src/assets/aus/cqu.jpg', link: 'https://www.cqu.edu.au/' },
];
</script>
