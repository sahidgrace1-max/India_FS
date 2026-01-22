<template>
  <section
    class="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-0 max-w-screen-2xl mx-auto gap-12"
  >
    <!-- Left: Image -->
    <div class="flex-1 flex justify-center items-center">
      <img
        src="@/assets/Section1.png"
        alt="Grace International Process"
        class="max-w-[450px] w-full h-auto animate-slide-left"
      />
    </div>

    <!-- Right: Text Content -->
    <div class="flex-1 max-w-xl text-justify animate-slide-right">
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
/* Slide in from left for image */
@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-left {
  animation: slideLeft 1.5s ease-out forwards;
}

/* Add floating animation to image */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-slide-left img {
  animation:
    slideLeft 1.5s ease-out forwards,
    float 3s ease-in-out infinite 1.5s;
}

/* Slide in from right for text */
@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-right {
  animation: slideRight 1.5s ease-out forwards 0.3s;
}

/* Gradient text animation */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-slide-right h2,
.animate-slide-right h3 {
  background: linear-gradient(90deg, #1e3a8a, #2563eb, #1e3a8a);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}

/* Fade in up animation for paragraphs */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-right p:nth-of-type(1) {
  animation: fadeInUp 1s ease-out 0.8s forwards;
  opacity: 0;
}

.animate-slide-right p:nth-of-type(2) {
  animation: fadeInUp 1s ease-out 1s forwards;
  opacity: 0;
}

.animate-slide-right p:nth-of-type(3) {
  animation: fadeInUp 1s ease-out 1.2s forwards;
  opacity: 0;
}

/* Pulse animation for section title */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

section h2 {
  animation:
    fadeInUp 1s ease-out,
    pulse 2s ease-in-out infinite 1s;
}

/* Flip card styles */
.flip-card {
  perspective: 1000px;
  width: 100%;
  max-width: 320px;
  transition: transform 0.3s ease;
}

.flip-card:hover {
  transform: translateY(-10px);
}

@media (min-width: 768px) {
  .flip-card {
    width: 16rem;
    max-width: 16rem;
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-inner.flipped {
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.flip-card:hover .flip-card-front,
.flip-card:hover .flip-card-back {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* Shimmer effect on cards */
@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.flip-card-front::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s infinite;
  border-radius: 0.75rem;
  pointer-events: none;
}

/* Stagger animation for cards */
.flip-card:nth-child(1) {
  animation: fadeInUp 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

.flip-card:nth-child(2) {
  animation: fadeInUp 0.6s ease-out 0.4s forwards;
  opacity: 0;
}

.flip-card:nth-child(3) {
  animation: fadeInUp 0.6s ease-out 0.6s forwards;
  opacity: 0;
}

.flip-card:nth-child(4) {
  animation: fadeInUp 0.6s ease-out 0.8s forwards;
  opacity: 0;
}

/* Glow effect on hover */
@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
  }
}

.flip-card-front:hover {
  animation: glow 1.5s ease-in-out infinite;
}

/* Rotate text slightly on hover */
.flip-card-front span {
  transition: transform 0.3s ease;
}

.flip-card:hover .flip-card-front span {
  transform: scale(1.1);
}
</style>
