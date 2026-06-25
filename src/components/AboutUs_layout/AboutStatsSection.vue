<template>
  <section
    ref="sectionRef"
    class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden"
  >
    <div class="absolute inset-0 z-0 opacity-20">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500 rounded-full blur-[128px]"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[128px]"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        :class="[isVisible ? 'opacity-100' : 'opacity-0']"
      >
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-700 hover:bg-white/20"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="mb-4 text-green-400 text-4xl">
            <component :is="stat.icon" />
          </div>
          <div class="flex items-center">
            <span class="text-5xl font-extrabold text-white">{{ stat.value }}</span>
            <span class="text-3xl font-bold text-green-400 ml-1">{{ stat.suffix }}</span>
          </div>
          <p class="text-blue-100 mt-2 font-bold uppercase tracking-widest text-xs">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const stats = [
  { value: "19", suffix: "", label: "Years of Success", icon: "div" },
  { value: "500", suffix: "+", label: "Educational Partners", icon: "div" },
  { value: "50", suffix: "K", label: "Happy Students", icon: "div" },
  { value: "15", suffix: "+", label: "Certified Counselors", icon: "div" }
];

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (observer) observer.disconnect();
    }
  }, { threshold: 0.2 });

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
section {
  transition: opacity 1s ease-out;
}
</style>