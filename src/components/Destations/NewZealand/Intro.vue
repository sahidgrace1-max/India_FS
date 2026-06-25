<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute top-1/4 left-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div 
        ref="introRef"
        class="w-full mb-16 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out transform"
        :class="[introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <p class="text-slate-700 text-lg md:text-xl leading-relaxed font-medium bg-white/50 backdrop-blur-sm border border-blue-50 p-6 md:p-8 rounded-[2rem] shadow-sm">
          New Zealand is known for high-quality education and an unbeatable lifestyle. Its education system emphasizes practical, hands-on learning to equip students with skills and experiences that are globally recognized.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <div 
          ref="imageRef"
          class="order-2 lg:order-1 flex items-center justify-center transition-all duration-1000 ease-out transform"
          :class="[imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-lg lg:max-w-none">
            <div class="absolute -inset-4 bg-green-500/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="bgImage"
              alt="Students Graduation in New Zealand"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[500px] lg:min-h-[850px]"
            />
          </div>
        </div>

        <div 
          ref="contentRef"
          class="order-1 lg:order-2 flex flex-col transition-all duration-1000 ease-out delay-300 transform"
          :class="[contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Academic Excellence
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
            Why Study in 
            <span class="relative inline-block text-green-500">
              New Zealand?
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>

          <div class="space-y-4">
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm hover:border-blue-200 transition-colors flex gap-4">
              <span class="text-green-500 text-2xl mt-1">🌍</span>
              <div>
                <h4 class="font-bold text-blue-900 mb-1">World-Class Universities</h4>
                <p class="text-slate-700 text-sm">Top 3% globally, offering internationally recognized degrees.</p>
              </div>
            </div>
            
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm hover:border-blue-200 transition-colors flex gap-4">
              <span class="text-green-500 text-2xl mt-1">🛠️</span>
              <div>
                <h4 class="font-bold text-blue-900 mb-1">Practical Learning</h4>
                <p class="text-slate-700 text-sm">Hands-on, student-centered education for real-world problem solving.</p>
              </div>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm hover:border-blue-200 transition-colors flex gap-4">
              <span class="text-green-500 text-2xl mt-1">🛡️</span>
              <div>
                <h4 class="font-bold text-blue-900 mb-1">Safe Environment</h4>
                <p class="text-slate-700 text-sm">Culturally diverse, safe, and famous for its natural beauty.</p>
              </div>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm hover:border-blue-200 transition-colors flex gap-4">
              <span class="text-green-500 text-2xl mt-1">💼</span>
              <div>
                <h4 class="font-bold text-blue-900 mb-1">Work Opportunities</h4>
                <p class="text-slate-700 text-sm">Part-time work during study and post-study work visas available.</p>
              </div>
            </div>
          </div>

          <p class="mt-8 text-slate-700 leading-relaxed bg-green-50 border border-green-200 p-6 rounded-2xl italic">
            Studying in New Zealand offers a unique combination of academic excellence, personal growth, and unforgettable life experiences in one of the world’s most beautiful countries.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/newzealand.png";

const introRef = ref(null);
const imageRef = ref(null);
const contentRef = ref(null);

const introVisible = ref(false);
const imageVisible = ref(false);
const contentVisible = ref(false);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === introRef.value) introVisible.value = true;
        if (entry.target === imageRef.value) imageVisible.value = true;
        if (entry.target === contentRef.value) contentVisible.value = true;
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  if (introRef.value) observer.observe(introRef.value);
  if (imageRef.value) observer.observe(imageRef.value);
  if (contentRef.value) observer.observe(contentRef.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
@keyframes rotateDashed {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}
</style>