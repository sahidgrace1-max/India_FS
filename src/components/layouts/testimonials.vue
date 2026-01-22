<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <p class="mt-2 text-gray-600"></p>
      </div>

      <!-- Scroll Container -->
      <div
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="min-w-[300px] md:min-w-[360px] bg-white rounded-xl shadow-lg p-6 snap-center"
        >
          <!-- Quote -->
          <p class="text-gray-700 italic">“{{ testimonial.message }}”</p>

          <!-- User -->
          <div class="flex items-center mt-6">
            <img
              :src="testimonial.avatar"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900">
                {{ testimonial.name }}
              </h4>
              <p class="text-sm text-gray-500">
                {{ testimonial.role }}
              </p>
            </div>
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
    name: "Sarah Johnson",
    role: "Product Manager",
    message: "This service completely exceeded my expectations.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    message: "Clean design, smooth performance, and amazing support.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Emily Brown",
    role: "UX Designer",
    message: "The experience was intuitive and enjoyable.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "James Wilson",
    role: "CTO",
    message: "Scales perfectly and looks great on every device.",
    avatar: "https://i.pravatar.cc/150?img=22",
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
