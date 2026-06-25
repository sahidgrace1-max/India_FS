<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
      <div class="absolute top-1/4 right-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div 
        class="w-full mb-16 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <p class="text-slate-700 text-lg md:text-xl leading-relaxed font-medium bg-white/50 backdrop-blur-sm border border-blue-50 p-6 md:p-8 rounded-[2rem] shadow-sm">
          The United Kingdom is a highly preferred study and work destination for international students. Its education system is globally respected and structured into primary, secondary, further, and higher education, offering a perfect balance of tradition and innovation.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <div 
          class="order-2 lg:order-1 flex items-center justify-center transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-lg lg:max-w-none">
            <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="bgImage"
              alt="UK Education System"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[500px] lg:min-h-[750px]"
            />
          </div>
        </div>

        <div 
          class="order-1 lg:order-2 flex flex-col transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Academic Excellence
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
            Why Study in 
            <span class="relative inline-block text-green-500">
              the UK?
              <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>

          <div class="space-y-4">
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm hover:border-blue-200 transition-colors flex gap-4">
              <span class="text-green-500 text-2xl mt-1">🌍</span>
              <div>
                <h4 class="font-bold text-blue-900 mb-1">World-Ranked Institutions</h4>
                <p class="text-slate-700 text-sm">UK institutions consistently rank among the best in the world, with internationally valued qualifications.</p>
              </div>
            </div>
            
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm hover:border-blue-200 transition-colors flex gap-4">
              <span class="text-green-500 text-2xl mt-1">🔬</span>
              <div>
                <h4 class="font-bold text-blue-900 mb-1">Excellence in Research</h4>
                <p class="text-slate-700 text-sm">Undertakes 5% of global scientific research and produces 14% of the most frequently cited papers.</p>
              </div>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm hover:border-blue-200 transition-colors flex gap-4">
              <span class="text-green-500 text-2xl mt-1">⚡</span>
              <div>
                <h4 class="font-bold text-blue-900 mb-1">Flexible Education</h4>
                <p class="text-slate-700 text-sm">Academic and vocational pathways to tailor degrees to your career goals.</p>
              </div>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-5 rounded-2xl shadow-sm hover:border-blue-200 transition-colors flex gap-4">
              <span class="text-green-500 text-2xl mt-1">💡</span>
              <div>
                <h4 class="font-bold text-blue-900 mb-1">Innovative Teaching</h4>
                <p class="text-slate-700 text-sm">Encourages creativity, independent thinking, and confidence building.</p>
              </div>
            </div>
          </div>

          <p class="mt-8 text-slate-700 leading-relaxed bg-green-50 border border-green-200 p-6 rounded-2xl italic">
            As the home of the English language, the UK offers an ideal environment to improve communication skills while enhancing global employability.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/uk.png";

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
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