<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import albertus from "@/assets/Albertus Magnus College.jpg";
import capilano from "@/assets/Capilano University (Public).png";
import stclair from "@/assets/St Clair College.png";
import uniTasmania from "@/assets/Uni-Tamania.jpeg";
import latrobe from "@/assets/La Trobe University.jpg";
import murdoch from "@/assets/MurdochUniversity.jpg";

const universities = [
  {
    name: "Albertus Magnus College",
    photo: albertus,
    website: "https://www.albertus.edu/",
  },
  {
    name: "Capilano University",
    photo: capilano,
    website: "https://www.capilanou.ca/",
  },
  {
    name: "St Clair College",
    photo: stclair,
    website: "https://www.stclaircollege.ca/",
  },
  {
    name: "La Trobe University",
    photo: latrobe,
    website: "https://www.latrobe.edu.au/",
  },
  {
    name: "Murdoch University",
    photo: murdoch,
    website: "https://www.murdoch.edu.au/",
  },
  {
    name: "University Of Tasmania",
    photo: uniTasmania,
    website: "https://www.utas.edu.au/",
  },
];

const currentIndex = ref(0);
let intervalId = null;

const visibleCount = computed(() => {
  if (typeof window === "undefined") return 6;
  if (window.innerWidth < 640) return 1; // Mobile: 1 item
  if (window.innerWidth < 1024) return 3; // Tablet: 3 items
  return 6; // Desktop: 6 items
});

const visibleUniversities = computed(() => {
  const result = [];
  for (let i = 0; i < visibleCount.value; i++) {
    result.push(universities[(currentIndex.value + i) % universities.length]);
  }
  return result;
});

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % universities.length;
}

function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + universities.length) % universities.length;
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div
    class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-50 py-8 text-center my-10"
  >
    <h2 class="text-xl sm:text-2xl font-bold text-[#176ca6] mb-6 px-4">
      Associated Universities
    </h2>
    <div class="flex flex-col items-center w-full relative px-2 sm:px-4">
      <div
        class="flex items-center justify-center w-full max-w-[1100px]"
      >
        <button class="arrow" @click="prevSlide" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="flex gap-4 sm:gap-6 lg:gap-8 justify-center overflow-hidden flex-1 px-2">
          <div
            v-for="university in visibleUniversities"
            :key="university.name"
            class="flex flex-col items-center"
          >
            <a :href="university.website" target="_blank">
              <div
                class="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 border-4 border-[#176ca6] rounded-full overflow-hidden bg-white shadow flex items-center justify-center"
              >
                <img
                  :src="university.photo"
                  :alt="university.name"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 w-full bg-[#176ca6]/70 text-white text-center py-1 sm:py-2"
                >
                  <span class="font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap px-1">
                    {{ university.name }}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <button class="arrow" @click="nextSlide" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.arrow {
  background: #fff;
  border: 2px solid #176ca6;
  color: #176ca6;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
  margin: 0 4px;
  flex-shrink: 0;
}

.arrow:hover {
  background: #176ca6;
  color: #fff;
}

@media (min-width: 640px) {
  .arrow {
    width: 36px;
    height: 36px;
    margin: 0 8px;
  }
}

@media (min-width: 1024px) {
  .arrow {
    margin: 0 16px;
  }
}
</style>
