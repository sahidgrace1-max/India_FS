<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-1/3 left-1/4 w-72 h-72 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="text-center mb-16 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          What We Do
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
          Our Expert 
          <span class="relative inline-block">
            Services
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div class="space-y-16 lg:space-y-24">
        <div
          v-for="(service, idx) in services"
          :key="service.title"
          class="service-wrapper flex flex-col md:flex-row items-stretch gap-8 lg:gap-16 transition-all duration-1000 ease-out"
          :class="[
            idx % 2 === 1 ? 'md:flex-row-reverse' : '',
            isVisibleState[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          ]"
        >
          <div class="flex-1 overflow-hidden rounded-3xl shadow-lg border border-blue-50 relative group">
            <img
              :src="service.img"
              :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style="min-height: 350px;"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-60"></div>
          </div>

          <div class="flex-1 flex flex-col justify-center">
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 p-8 lg:p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 class="text-2xl lg:text-3xl font-bold text-blue-900 mb-6 border-l-4 border-green-500 pl-4">
                {{ service.title }}
              </h3>
              <p class="text-slate-600 leading-relaxed text-justify text-base lg:text-lg">
                {{ service.desc }}
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
import abroad from "@/assets/abroad.png";
import lib from "@/assets/Library.png";
import guide from "@/assets/Guidance.png";
import advise from "@/assets/advising.png";
import uni from "@/assets/usa5.png";
import test from "@/assets/TestPrep.png";
import pre from "@/assets/predep.jpg";
import news from "@/assets/news.jpg";

const props = defineProps({
  services: {
    type: Array,
    default: () => [
      { title: "Abroad Studies", img: abroad, desc: "Since our establishment in 2006, we have been serving as a reliable bridge connecting students of Nepal with reputable education providers across the globe. Our mission has always been to deliver quality educational services to aspiring graduates who wish to pursue their studies abroad. Built on strong values of conviction, reliability, and unwavering commitment, we continuously strive to support students at every step of their academic journey." },
      { title: "Test Preparation", img: test, desc: "When it comes to studying abroad, a language proficiency test is one of the essentials. Hence to make the students capable of the requisite, we offer classroom-based training for IELTS, TOEFL, PTE, SAT, GRE, and GMAT. We provide comprehensive and result-oriented coaching with personalized attention and flexibility of timings." },
      { title: "Scholarship Assessment Guidance", img: guide, desc: "Education providers allocate various scholarships, bursaries, and stipends for international students with higher academic percentages or grades. For students with excellent academic records and high English proficiency test scores, we guide them on scholarships provided by different education providers and what they are eligible for." },
      { title: "University / College Presentations", img: uni, desc: "Getting to know different education providers is vital in choosing the right school for a student. We help organize introductory events with various education providers where students can interact with a representative from a specific school for one-on-one interaction." },
      { title: "Monthly Readable Newsletter", img: news, desc: "For our students who are in touch with us, we send them our monthly readable newsletter via an electronic mailing system. The newsletter contains valuable information regarding abroad immigration policy changes and notifies them about future events." },
      { title: "Pre-departure Sessions", img: pre, desc: "This session is for students who have already secured their visas. It covers all the information regarding how students can start their new life in a new country, help them navigate personal and cultural growth opportunities, and provide intel about all the dos and don’ts." },
      { title: "Monthly Group Advising Sessions", img: advise, desc: "We organize a monthly session where we focus on providing expert advice on different careers. The session discusses the outcomes of studying a specific course, its prerequisites for studying abroad, admission requirements, the application procedure, and costs." },
      { title: "Library Services", img: lib, desc: "We provide a wide range of standardized tests preparation materials. These facilities are available at the modern library. Leaflets, brochures, handbooks & other publications from universities are available to help students navigate their study abroad choices." }
    ],
  },
});

const sectionRef = ref(null);
const isVisibleState = ref(Array(props.services.length).fill(false));
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('service-wrapper')) {
          const index = Array.from(document.querySelectorAll('.service-wrapper')).indexOf(entry.target);
          isVisibleState.value[index] = true;
        } else {
          isVisible.value = true;
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (sectionRef.value) observer.observe(sectionRef.value);
  document.querySelectorAll('.service-wrapper').forEach(el => observer.observe(el));
});

onUnmounted(() => {
  if (observer) observer.disconnect();
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