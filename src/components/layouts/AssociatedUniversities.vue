<template>
  <div
    class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-50 py-8 text-center my-10"
  >
    <h2 class="text-2xl font-bold text-[#176ca6] mb-6">
      Associated Universities
    </h2>
    <div class="flex flex-col items-center w-full relative">
      <div
        class="flex items-center justify-center w-full"
        style="max-width: 1100px"
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
        <div class="flex gap-8 justify-center overflow-hidden">
          <div
            v-for="university in visibleUniversities"
            :key="university.name"
            class="flex flex-col items-center"
          >
            <a :href="university.website" target="_blank">
              <div
                class="relative w-56 h-56 md:w-48 md:h-48 sm:w-36 sm:h-36 border-4 border-[#176ca6] rounded-full overflow-hidden bg-white shadow flex items-center justify-center"
              >
                <img
                  :src="university.photo"
                  :alt="university.name"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute bottom-0 w-full bg-[#176ca6]/70 text-white text-center py-2"
                >
                  <span class="font-semibold text-base whitespace-nowrap">
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

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const universities = [
  {
    name: "James Cook University",
    photo:
      "https://www.jcu.edu.au/__data/assets/image/0004/114527/jcu-campus-hero.jpg",
    website: "https://www.jcu.edu.au/",
  },
  {
    name: "Kaplan",
    photo:
      "https://www.kaplan.com/-/media/project/kaplan/kaplan-com/images/about/kaplan-international-pathways/kiclondon.jpg",
    website: "https://www.kaplan.com/",
  },
  {
    name: "Kent Institute",
    photo:
      "https://kent.edu.au/wp-content/uploads/2022/03/Kent-Sydney-Campus-1.jpg",
    website: "https://kent.edu.au/",
  },
  {
    name: "La Trobe University",
    photo:
      "https://www.latrobe.edu.au/__data/assets/image/0003/1182387/latrobe-campus.jpg",
    website: "https://www.latrobe.edu.au/",
  },
  {
    name: "Lakeland College",
    photo:
      "https://www.lakelandcollege.ca/media/Images/About/Contact/lloydminster-campus.jpg",
    website: "https://www.lakelandcollege.ca/",
  },
  {
    name: "Lambton College",
    photo:
      "https://www.lambtoncollege.ca/uploadedImages/LambtonCollege/Content/About_Us/Our_Campuses/Sarnia_Campus/2019-Exterior-Front-Entrance.jpg",
    website: "https://www.lambtoncollege.ca/",
  },
];

const visibleCount = 6;
const currentIndex = ref(0);
let intervalId = null;

const visibleUniversities = computed(() => {
  const result = [];
  for (let i = 0; i < visibleCount; i++) {
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

<style scoped>
.arrow {
  background: #fff;
  border: 2px solid #176ca6;
  color: #176ca6;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
  margin: 0 16px;
}

.arrow:hover {
  background: #176ca6;
  color: #fff;
}
</style>
