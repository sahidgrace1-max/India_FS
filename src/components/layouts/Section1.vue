<template>
  <section
    class="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-0 max-w-screen-2xl mx-auto gap-12"
  >
    <!-- Left: Image -->
    <div class="flex-1 flex justify-center items-center">
      <img
        src="@/assets/image.png"
        alt="Grace International Process"
        class="max-w-[900px] w-full h-auto"
      />
    </div>
    <!-- Right: Text Content -->
    <div class="flex-1 max-w-xl text-justify">
      <h2 class="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
        Study Abroad with
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
        Grace International
      </h3>
      <p class="text-green-600 text-lg font-medium mb-4">
        Your Pathway to Global Education
      </p>
      <p class="text-gray-700 mb-4">
        Established with the aim of delivering quality educational services,
        Grace International have more than a decade long history of serving
        students for further studies in Australia, New Zealand, UK, USA and
        Canada. We also provide preparation classes of IELTS, PTE, GMAT, TOEFL
        and SAT.
      </p>
      <p class="text-gray-700">
        Helping Indian students achieve global education dreams with expert
        counselling, top university tie-ups, and complete support—from test prep
        to visas since 2006.
      </p>
    </div>
  </section>

  <!-- Why Choose Section -->
  <section class="max-w-screen-2xl mx-auto px-4 md:px-0 py-12">
    <h2 class="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10">
      Why Choose Grace International India?
    </h2>
    <div class="flex flex-col md:flex-row items-center justify-center gap-8">
      <!-- Flip Card 1 -->
      <div
        class="flip-card w-full md:w-64 h-40 flex items-center justify-center mb-6 md:mb-0"
        :class="{ 'cursor-pointer': isMobile }"
        @click="isMobile ? flipCard(0) : null"
      >
        <div
          class="flip-card-inner w-full h-full"
          :class="{ flipped: isMobile && flippedCards[0] }"
        >
          <div
            class="flip-card-front flex flex-col items-center justify-center bg-blue-800 text-white rounded-xl shadow-lg w-full h-full cursor-pointer"
          >
            <span class="text-2xl mb-2">20+</span>
            <span class="text-lg">Years of Global Expertise</span>
          </div>
          <div
            class="flip-card-back flex flex-col items-center justify-center bg-green-600 text-white rounded-xl shadow-lg w-full h-full cursor-pointer px-4"
          >
            <span class="text-base text-center"
              >A trusted name with a presence in 10+ countries.</span
            >
          </div>
        </div>
      </div>
      <!-- Flip Card 2 -->
      <div
        class="flip-card w-full md:w-64 h-40 flex items-center justify-center mb-6 md:mb-0"
        :class="{ 'cursor-pointer': isMobile }"
        @click="isMobile ? flipCard(1) : null"
      >
        <div
          class="flip-card-inner w-full h-full"
          :class="{ flipped: isMobile && flippedCards[1] }"
        >
          <div
            class="flip-card-front flex flex-col items-center justify-center bg-blue-800 text-white rounded-xl shadow-lg w-full h-full cursor-pointer px-4 text-center"
          >
            <span class="text-lg mb-2 w-full">Strong University</span>
            <span class="text-lg mb-2 w-full">Partnerships</span>
          </div>
          <div
            class="flip-card-back flex flex-col items-center justify-center bg-green-600 text-white rounded-xl shadow-lg w-full h-full cursor-pointer px-4 text-justify"
          >
            <span class="text-base text-center w-full"
              >Direct tie-ups with reputed institutions worldwide.</span
            >
          </div>
        </div>
      </div>
      <!-- Flip Card 3 -->
      <div
        class="flip-card w-full md:w-64 h-40 flex items-center justify-center mb-6 md:mb-0"
        :class="{ 'cursor-pointer': isMobile }"
        @click="isMobile ? flipCard(2) : null"
      >
        <div
          class="flip-card-inner w-full h-full"
          :class="{ flipped: isMobile && flippedCards[2] }"
        >
          <div
            class="flip-card-front flex flex-col items-center justify-center bg-blue-800 text-white rounded-xl shadow-lg w-full h-full cursor-pointer px-4"
          >
            <span class="text-lg mb-2">Comprehensive Support</span>
          </div>
          <div
            class="flip-card-back flex flex-col items-center justify-center bg-green-600 text-white rounded-xl shadow-lg w-full h-full cursor-pointer px-4"
          >
            <span class="text-base text-center"
              >From test prep to scholarships, visas, and post-arrival
              guidance.</span
            >
          </div>
        </div>
      </div>
      <!-- Flip Card 4 -->
      <div
        class="flip-card w-full md:w-64 h-40 flex items-center justify-center"
        :class="{ 'cursor-pointer': isMobile }"
        @click="isMobile ? flipCard(3) : null"
      >
        <div
          class="flip-card-inner w-full h-full"
          :class="{ flipped: isMobile && flippedCards[3] }"
        >
          <div
            class="flip-card-front flex flex-col items-center justify-center bg-blue-800 text-white rounded-xl shadow-lg w-full h-full cursor-pointer px-4"
          >
            <span class="text-lg mb-2">Student Success Stories</span>
          </div>
          <div
            class="flip-card-back flex flex-col items-center justify-center bg-green-600 text-white rounded-xl shadow-lg w-full h-full cursor-pointer px-4"
          >
            <span class="text-base text-center"
              >25,000+ Success Stories – Indian students placed in top
              universities worldwide.</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const flippedCards = ref([false, false, false, false]);
const isMobile = ref(false);

function flipCard(idx) {
  flippedCards.value[idx] = !flippedCards.value[idx];
}

function handleResize() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
  width: 100%;
  max-width: 320px;
}
@media (min-width: 768px) {
  .flip-card {
    width: 16rem; /* 64 */
    max-width: 16rem;
  }
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  /* Only flip on hover for desktop */
  transform: rotateY(180deg);
}
.flip-card-inner.flipped {
  /* Flip on click for mobile */
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
