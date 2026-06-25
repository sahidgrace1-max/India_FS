<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-20 right-20 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="text-center mb-16 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Success Stories
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          What Our 
          <span class="relative inline-block">
            Clients Say
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div 
        class="relative transition-all duration-1000 ease-out delay-200 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
      >
        <button
          @click="scrollPrev"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm border border-blue-100 hover:border-blue-300 shadow-md hover:shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center group"
          aria-label="Previous testimonial"
        >
          <svg
            class="w-6 h-6 text-blue-900 group-hover:text-green-600 transition-colors"
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

        <button
          @click="scrollNext"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm border border-blue-100 hover:border-blue-300 shadow-md hover:shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hidden md:flex items-center justify-center group"
          aria-label="Next testimonial"
        >
          <svg
            class="w-6 h-6 text-blue-900 group-hover:text-green-600 transition-colors"
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

        <div
          ref="scrollContainer"
          class="flex gap-6 overflow-x-auto scroll-smooth pb-8 pt-4 snap-x snap-mandatory hide-scrollbar px-4 md:px-16"
          @mouseenter="pauseAutoScroll"
          @mouseleave="resumeAutoScroll"
          @touchstart="pauseAutoScroll"
          @touchend="resumeAutoScroll"
        >
          <div
            v-for="(testimonial, index) in [...testimonials, ...testimonials]"
            :key="index"
            class="min-w-[300px] md:min-w-[360px] bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-sm p-8 snap-center flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 group relative"
          >
            <div class="absolute -top-4 -right-4 text-[120px] leading-none font-serif text-blue-50 opacity-50 select-none pointer-events-none group-hover:text-blue-100 transition-colors">
              "
            </div>

            <div class="relative z-10 flex flex-col h-full">
              <div class="mb-6 flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-800 transition-colors duration-300">
                  <svg
                    class="w-6 h-6 text-blue-800 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <div class="flex gap-1">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
              </div>

              <p class="text-slate-700 italic leading-relaxed flex-grow text-sm md:text-base relative">
                "{{ testimonial.message }}"
              </p>

              <div class="mt-8 pt-5 border-t border-slate-100 flex items-center">
                <div class="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                <h4 class="font-bold text-blue-900 text-lg">
                  {{ testimonial.name }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-3 mt-6">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="scrollToIndex(index)"
            :class="[
              'h-2 rounded-full transition-all duration-300',
              currentIndex === index
                ? 'bg-blue-800 w-8'
                : 'bg-slate-300 hover:bg-slate-400 w-2',
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

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

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
      "Grace International has highly experienced trainers who helped me achieve my dream and secure admission to my desired course and university in Australia. The team made the entire process smooth.",
  },
  {
    name: "Shaan",
    message:
      "Grace International has a friendly, professional team that guided me smoothly through admissions, SOP writing, course selection, and IELTS support. They set clear expectations and made the process stress-free.",
  },
];

const scrollToIndex = (index) => {
  const container = scrollContainer.value;
  if (!container) return;

  // 360px card width (md minimum) + 24px gap = 384px.
  // We use scrollWidth / total items to get a more accurate dynamic width
  const scrollItemWidth = container.scrollWidth / (testimonials.length * 2);
  container.scrollTo({ left: scrollItemWidth * index, behavior: "smooth" });
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

  const totalCards = testimonials.length;
  const scrollItemWidth = container.scrollWidth / (totalCards * 2);

  // Scroll to next card
  container.scrollBy({ left: scrollItemWidth, behavior: "smooth" });

  // Check if we've scrolled past the first set of testimonials
  setTimeout(() => {
    const scrollLeft = container.scrollLeft;
    const maxScroll = scrollItemWidth * totalCards;

    // If we're past the original set, jump back to the beginning without animation
    if (scrollLeft >= maxScroll) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = 0;
      setTimeout(() => {
        container.style.scrollBehavior = "smooth";
      }, 50);
    }

    // Update current index
    const index = Math.round(container.scrollLeft / scrollItemWidth) % totalCards;
    currentIndex.value = index || 0; // fallback to 0 if NaN
  }, 500);
};

const pauseAutoScroll = () => {
  isPaused = true;
};

const resumeAutoScroll = () => {
  isPaused = false;
};

onMounted(() => {
  // Intersection Observer for initial animation
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (observer) observer.disconnect();
    }
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  // Auto-scroll every 4 seconds (slightly slower for readability)
  interval = setInterval(autoScroll, 4000);

  // Update current index on manual scroll
  const container = scrollContainer.value;
  if (container) {
    container.addEventListener("scroll", () => {
      const scrollItemWidth = container.scrollWidth / (testimonials.length * 2);
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / scrollItemWidth) % testimonials.length;
      if(!isNaN(index)) currentIndex.value = index;
    });
  }
});

onUnmounted(() => {
  clearInterval(interval);
  if (observer) {
    observer.disconnect();
  }
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

@keyframes rotateDashed {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}
</style>