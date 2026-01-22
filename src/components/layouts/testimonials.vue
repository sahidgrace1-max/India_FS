<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
      </div>

      <!-- Scroll Container -->
      <div
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="min-w-[300px] md:min-w-[360px] bg-white rounded-xl shadow-lg p-6 snap-center flex flex-col justify-between min-h-[280px]"
        >
          <!-- Quote -->
          <p class="text-gray-700 italic leading-relaxed">
            “{{ testimonial.message }}”
          </p>

          <!-- Name (fixed position) -->
          <div class="mt-6 pt-4 border-t">
            <h4 class="font-semibold text-gray-900 text-sm">
              {{ testimonial.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollContainer = ref(null);
let interval = null;

const testimonials = [
  {
    name: "Anu J",
    message:
      "I had a great experience with Grace International, where everyone supported me in achieving my goals. The IELTS coaching, university admission process, and overall services were excellent.",
  },
  {
    name: "Arti",
    message:
      "I’m Arti, and with Grace International’s expert IELTS coaching, I achieved a 7.5 band on my first attempt. They also helped secure admission to my desired course and university in Australia—highly recommended.",
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

onMounted(() => {
  interval = setInterval(() => {
    const container = scrollContainer.value;
    if (!container) return;

    const scrollAmount = 360;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, 3000);
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
