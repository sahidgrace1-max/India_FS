<template>
  <section class="py-16 bg-gray-50 font-poppins overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
      </div>

      <!-- Carousel Container -->
      <div class="relative">
        <!-- Left Arrow -->
        <button
          @click="scrollPrev"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hidden md:block"
          aria-label="Previous testimonial"
        >
          <svg
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Right Arrow -->
        <button
          @click="scrollNext"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hidden md:block"
          aria-label="Next testimonial"
        >
          <svg
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- Scroll Container -->
        <div
          ref="scrollContainer"
          class="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar px-12 md:px-16"
          @mouseenter="pauseAutoScroll"
          @mouseleave="resumeAutoScroll"
        >
          <!-- Duplicate testimonials for infinite loop effect -->
          <div
            v-for="(testimonial, index) in [...testimonials, ...testimonials]"
            :key="index"
            class="min-w-[300px] md:min-w-[360px] bg-white rounded-xl shadow-lg p-6 snap-center flex flex-col justify-between min-h-[280px] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <!-- Quote Icon -->
            <div class="mb-4">
              <svg
                class="w-8 h-8 text-green-500 opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            <!-- Quote -->
            <p class="text-gray-700 italic leading-relaxed flex-grow">
              "{{ testimonial.message }}"
            </p>

            <!-- Name (fixed position) -->
            <div class="mt-6 pt-4 border-t border-gray-200">
              <h4 class="font-semibold text-gray-900 text-base">
                {{ testimonial.name }}
              </h4>
            </div>
          </div>
        </div>

        <!-- Navigation Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="scrollToIndex(index)"
            :class="[
              'w-2 h-2 rounded-full transition-all duration-300',
              currentIndex === index
                ? 'bg-green-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400',
            ]"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollContainer = ref(null);
const currentIndex = ref(0);
let interval = null;
let isPaused = false;

const testimonials = [
  {
    name: "Anu J",
    message:
      "I had a great experience with Grace International, where everyone supported me in achieving my goals. The IELTS coaching, university admission process, and overall services were excellent.",
  },
  {
    name: "Arti",
    message:
      "I'm Arti, and with Grace International's expert IELTS coaching, I achieved a 7.5 band on my first attempt. They also helped secure admission to my desired course and university in Australia—highly recommended.",
  },
  {
    name: "Aditya",
    message:
      "Grace International has highly experienced trainers who helped me achieve my dream and secure admission to my desired course and university in Australia. The team, especially Mayank Sir, made the entire process smooth and stress-free—highly recommended to all aspiring students.",
  },
  {
    name: "Shaan",
    message:
      "Grace International has a friendly, professional team that guided me smoothly through admissions, SOP writing, course selection, and IELTS support. They set clear expectations and made the entire study-abroad process stress-free and efficient.",
  },
];

const scrollToIndex = (index) => {
  const container = scrollContainer.value;
  if (!container) return;

  const cardWidth = 360 + 24; // card width + gap
  container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  currentIndex.value = index;
};

const scrollNext = () => {
  const maxIndex = testimonials.length - 1;
  const nextIndex = currentIndex.value >= maxIndex ? 0 : currentIndex.value + 1;
  scrollToIndex(nextIndex);
};

const scrollPrev = () => {
  const maxIndex = testimonials.length - 1;
  const prevIndex = currentIndex.value <= 0 ? maxIndex : currentIndex.value - 1;
  scrollToIndex(prevIndex);
};

const autoScroll = () => {
  if (isPaused) return;

  const container = scrollContainer.value;
  if (!container) return;

  const cardWidth = 360 + 24;
  const totalCards = testimonials.length;

  // Scroll to next card
  container.scrollBy({ left: cardWidth, behavior: "smooth" });

  // Check if we've scrolled past the first set of testimonials
  setTimeout(() => {
    const scrollLeft = container.scrollLeft;
    const maxScroll = cardWidth * totalCards;

    // If we're past the original set, jump back to the beginning without animation
    if (scrollLeft >= maxScroll) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = 0;
      setTimeout(() => {
        container.style.scrollBehavior = "smooth";
      }, 50);
    }

    // Update current index
    const index = Math.round(container.scrollLeft / cardWidth) % totalCards;
    currentIndex.value = index;
  }, 500);
};

const pauseAutoScroll = () => {
  isPaused = true;
};

const resumeAutoScroll = () => {
  isPaused = false;
};

onMounted(() => {
  // Auto-scroll every 3 seconds
  interval = setInterval(autoScroll, 3000);

  // Update current index on manual scroll
  const container = scrollContainer.value;
  if (container) {
    container.addEventListener("scroll", () => {
      const cardWidth = 360 + 24;
      const scrollLeft = container.scrollLeft;
      const totalCards = testimonials.length;
      const index = Math.round(scrollLeft / cardWidth) % totalCards;
      currentIndex.value = index;
    });
  }
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE & Edge */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>
