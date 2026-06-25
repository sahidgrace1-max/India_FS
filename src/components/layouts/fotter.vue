<template>
  <footer class="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-300 pt-16 pb-6 font-poppins relative overflow-hidden border-t border-blue-900/50">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-600/10 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 animate-float-delayed"></div>
    </div>

    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
      
      <div 
        ref="col1"
        data-index="0"
        class="flex flex-col space-y-6 transition-all duration-1000 ease-out transform"
        :class="[isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <img
          src="@/assets/logo.png"
          alt="Grace International Logo"
          class="w-32 sm:w-36 md:w-40 hover:-translate-y-1 transition-transform duration-300 filter drop-shadow-lg bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/5"
        />
        <p class="text-sm text-slate-400 leading-relaxed max-w-xs font-medium">
          Your trusted gateway to global education excellence. We provide comprehensive support for your international study journey.
        </p>
      </div>

      <div 
        ref="col2"
        data-index="1"
        class="transition-all duration-1000 ease-out transform"
        :class="[isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center text-green-500 font-bold uppercase tracking-widest text-xs mb-6">
          <span class="w-6 h-1 bg-green-500 rounded-full mr-2"></span>
          Quick Links
        </div>
        <ul class="space-y-3">
          <li>
            <router-link to="/" class="group flex items-center text-sm font-medium hover:text-green-400 transition-colors">
              <svg class="w-4 h-4 mr-2 text-green-600/70 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              Events
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="group flex items-center text-sm font-medium hover:text-green-400 transition-colors">
              <svg class="w-4 h-4 mr-2 text-green-600/70 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              Latest News
            </router-link>
          </li>
          <li>
            <router-link to="/destinations/australia" class="group flex items-center text-sm font-medium hover:text-green-400 transition-colors">
              <svg class="w-4 h-4 mr-2 text-green-600/70 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              Explore Countries
            </router-link>
          </li>
          <li>
            <router-link to="/university/australia" class="group flex items-center text-sm font-medium hover:text-green-400 transition-colors">
              <svg class="w-4 h-4 mr-2 text-green-600/70 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              Australian Universities
            </router-link>
          </li>
          <li>
            <router-link to="/scholarships" class="group flex items-center text-sm font-medium hover:text-green-400 transition-colors">
              <svg class="w-4 h-4 mr-2 text-green-600/70 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              Scholarships
            </router-link>
          </li>
          <li>
            <router-link to="/our-services" class="group flex items-center text-sm font-medium hover:text-green-400 transition-colors">
              <svg class="w-4 h-4 mr-2 text-green-600/70 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              Our Services
            </router-link>
          </li>
        </ul>
      </div>

      <div 
        ref="col3"
        data-index="2"
        class="space-y-4 transition-all duration-1000 ease-out transform"
        :class="[isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-green-500/50 transition-colors duration-300 group">
          <div class="flex items-center text-green-500 font-bold uppercase tracking-widest text-xs mb-3">
            <span class="w-4 h-1 bg-green-500 rounded-full mr-2 group-hover:w-6 transition-all"></span>
            Head Office
          </div>
          <p class="text-sm text-slate-300 mb-2 flex items-start">
            <svg class="w-4 h-4 text-green-500 mr-2.5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            New Baneshwor, Kathmandu, Nepal
          </p>
          <a href="mailto:enquiry@grace.edu.np" class="text-sm text-slate-300 mb-2 flex items-center hover:text-green-400 transition-colors break-all">
            <svg class="w-4 h-4 text-green-500 mr-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            enquiry@grace.edu.np
          </a>
          <a href="tel:014796880" class="text-sm text-slate-300 flex items-center hover:text-green-400 transition-colors">
            <svg class="w-4 h-4 text-green-500 mr-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            (01) 4796880 / (01) 4796881
          </a>
        </div>
      </div>

      <div 
        ref="col4"
        data-index="3"
        class="space-y-4 transition-all duration-1000 ease-out transform"
        :class="[isVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-blue-500/50 transition-colors duration-300 group">
          <div class="flex items-center text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">
            <span class="w-4 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-6 transition-all"></span>
            India Office
          </div>
          <a href="mailto:enquiry.in@graceintlgroup.com" class="text-xs text-slate-300 mb-1.5 flex items-center hover:text-blue-400 transition-colors break-all">
            <svg class="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            enquiry.in@graceintlgroup.com
          </a>
          <a href="tel:+9101141070020" class="text-xs text-slate-300 flex items-center hover:text-blue-400 transition-colors">
            <svg class="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +91-011-41070020
          </a>
        </div>
        
        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-yellow-500/50 transition-colors duration-300 group">
          <div class="flex items-center text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2">
            <span class="w-4 h-1 bg-yellow-500 rounded-full mr-2 group-hover:w-6 transition-all"></span>
            Kenya Office
          </div>
          <a href="mailto:admission.ke@graceintlgroup.com" class="text-xs text-slate-300 mb-1.5 flex items-center hover:text-yellow-400 transition-colors break-all">
            <svg class="w-3.5 h-3.5 text-yellow-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            admission.ke@graceintlgroup.com
          </a>
          <a href="tel:+254719231999" class="text-xs text-slate-300 flex items-center hover:text-yellow-400 transition-colors">
            <svg class="w-3.5 h-3.5 text-yellow-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +254 719-231 999
          </a>
        </div>

        <div class="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-red-500/50 transition-colors duration-300 group">
          <div class="flex items-center text-red-400 font-bold uppercase tracking-widest text-xs mb-2">
            <span class="w-4 h-1 bg-red-500 rounded-full mr-2 group-hover:w-6 transition-all"></span>
            Bangladesh Office
          </div>
          <a href="mailto:director.bangladesh@graceintlgroup.com" class="text-xs text-slate-300 mb-1.5 flex items-center hover:text-red-400 transition-colors break-all">
            <svg class="w-3.5 h-3.5 text-red-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            director.bangladesh@graceintlgroup.com
          </a>
          <a href="tel:+923355441602" class="text-xs text-slate-300 flex items-center hover:text-red-400 transition-colors">
            <svg class="w-3.5 h-3.5 text-red-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +92 (335) 5441602
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-800 mt-12 pt-6 relative z-10 bg-slate-900/50 backdrop-blur-md">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 font-medium">
        <span class="mb-4 md:mb-0 text-center md:text-left">
          Copyright © {{ new Date().getFullYear() }}. Grace International. All Rights Reserved.
        </span>
        <div class="flex space-x-6">
          <router-link to="/privacy-policy" class="hover:text-green-400 transition-colors">Privacy Policy</router-link>
          <router-link to="/terms-of-service" class="hover:text-green-400 transition-colors">Terms of Service</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const col1 = ref(null);
const col2 = ref(null);
const col3 = ref(null);
const col4 = ref(null);

const isVisible = ref([false, false, false, false]);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;
        if (index !== undefined) {
          isVisible.value[index] = true;
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  const columns = [col1.value, col2.value, col3.value, col4.value];
  columns.forEach((col) => {
    if (col) {
      observer.observe(col);
    }
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
@keyframes floatSlow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.05);
  }
}
.animate-float-slow {
  animation: floatSlow 20s ease-in-out infinite;
}

@keyframes floatDelayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-30px, 30px) scale(1.05);
  }
}
.animate-float-delayed {
  animation: floatDelayed 25s ease-in-out infinite reverse;
}
</style>