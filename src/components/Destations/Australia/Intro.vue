<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl transform translate-x-1/4"></div>
      <div class="absolute top-1/4 left-1/2 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block z-0"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div 
        class="w-full mb-16 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <p class="text-slate-700 text-lg md:text-xl leading-relaxed font-medium bg-white/50 backdrop-blur-sm border border-blue-50 p-6 md:p-8 rounded-[2rem] shadow-sm">
          Australia has a globally respected education system offering flexible
          study pathways, internationally recognized qualifications, and strong
          post-study career opportunities for international students.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div 
          class="flex flex-col transition-all duration-1000 ease-out delay-200 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Academic Structure
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 leading-tight">
            Australian 
            <span class="relative inline-block text-green-500">
              Education
              <span class="absolute -bottom-1 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
            System
          </h2>

          <div class="space-y-5">
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-2 flex items-center gap-3">
                <span class="text-green-500 text-xl bg-green-50 w-10 h-10 flex items-center justify-center rounded-xl">🏛️</span>
                Government Schools
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-13 ml-13">
                Operated by State or Territory governments. International students are required to pay tuition fees and benefit from diverse social and cultural learning environments.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-2 flex items-center gap-3">
                <span class="text-green-500 text-xl bg-green-50 w-10 h-10 flex items-center justify-center rounded-xl">🏫</span>
                Non-Government Schools
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-13 ml-13">
                Privately operated institutions that may follow religious or cultural philosophies. International students usually pay higher tuition fees.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-2 flex items-center gap-3">
                <span class="text-green-500 text-xl bg-green-50 w-10 h-10 flex items-center justify-center rounded-xl">🗣️</span>
                ELICOS Programs
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-13 ml-13">
                English language courses ranging from 4 to 48 weeks, with at least 20 hours of study per week and flexible intake dates throughout the year.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-2 flex items-center gap-3">
                <span class="text-green-500 text-xl bg-green-50 w-10 h-10 flex items-center justify-center rounded-xl">🎓</span>
                Universities
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-13 ml-13">
                Australia has 43 universities offering over 22,000 courses across 1,100 institutions, with strong global rankings and research focus.
              </p>
            </div>
          </div>

          <div class="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
            <div class="text-2xl mt-1">💼</div>
            <p class="text-slate-700 text-sm sm:text-base leading-relaxed">
              After completing their studies, international students may be eligible for the <span class="font-bold text-blue-900">Temporary Graduate Visa (Subclass 485)</span>, allowing them to gain valuable work experience in Australia for up to 2–4 years.
            </p>
          </div>
        </div>

        <div 
          class="flex items-center justify-center transition-all duration-1000 ease-out delay-300 transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12']"
        >
          <div class="relative group w-full max-w-lg lg:max-w-none">
            <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="australia"
              alt="Australian Education System"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[400px] lg:min-h-[600px]"
            />
            
            <div class="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-blue-50 hidden sm:flex transform hover:-translate-y-1 transition-transform z-20">
              <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                🌟
              </div>
              <div>
                <p class="text-xs text-green-600 font-bold uppercase tracking-widest">Global Rank</p>
                <p class="text-sm font-black text-blue-900">Top Tier Education</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import bgImage from "@/assets/image.png";
import australia from "@/assets/australia.png";

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