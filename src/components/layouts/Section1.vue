<template>
  <section ref="sectionRef" class="hero-section relative overflow-hidden font-poppins">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 -z-10" />
    <div class="blob-shape absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-blue-100 opacity-50 blur-3xl -z-10" />
    <div class="blob-shape-2 absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-green-100 opacity-40 blur-2xl -z-10" />

    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-800/5 to-transparent -z-10 hidden md:block" />

    <div class="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 lg:py-28">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div
          class="flex flex-col gap-6 transition-all duration-700"
          :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        >
          <div class="inline-flex items-center gap-2 self-start">
            <span class="w-8 h-[2px] bg-green-500 block" />
            <span class="text-green-600 text-sm font-semibold tracking-widest uppercase">
              Trusted Since 2006
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight tracking-tight">
            Your Global<br />
            <span class="relative inline-block">
              <span class="highlight-word text-blue-800">Education</span>
              <span class="absolute -bottom-1 left-0 w-full h-[5px] bg-green-400 rounded-full block" />
            </span>
            <br />Starts Here
          </h1>

          <p
            class="text-gray-600 text-base md:text-lg leading-relaxed max-w-md transition-all duration-700 delay-100"
            :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            Expert counselling for students in India &amp; Nepal dreaming of universities in
            Australia, UK, USA, Canada, and New Zealand — from test prep to visa approval.
          </p>

          <div
            class="flex flex-wrap gap-4 transition-all duration-700 delay-200"
            :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <button
              @click="scrollToContact"
              class="px-7 py-3.5 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-800/30 hover:shadow-blue-700/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
            >
              Book Free Counselling
            </button>
            <router-link
              to="/university/australia"
              class="px-7 py-3.5 border-2 border-blue-800 text-blue-800 font-semibold rounded-xl hover:bg-blue-800 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base text-center"
            >
              Explore Universities
            </router-link>
          </div>

          <div
            class="flex items-center gap-3 mt-2 transition-all duration-700 delay-300"
            :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <div class="flex -space-x-2">
              <div v-for="(color, i) in avatarColors" :key="i"
                class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                :class="color"
              >
                {{ avatarLetters[i] }}
              </div>
            </div>
            <p class="text-sm text-gray-500">
              <span class="font-semibold text-gray-700">25,000+</span> students placed in top universities worldwide
            </p>
          </div>

          <div
            class="flex flex-wrap gap-3 pt-4 border-t border-blue-100 transition-all duration-700 delay-[400ms]"
            :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-2 shadow-sm"
            >
              <span class="text-blue-800 font-bold text-sm">{{ stat.value }}</span>
              <span class="text-gray-500 text-xs">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div
          class="flex justify-center items-center relative transition-all duration-700 delay-200"
          :class="visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <div class="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-dashed border-blue-200 opacity-60 rotate-ring" />
          <div class="absolute top-4 right-8 w-4 h-4 rounded-full bg-green-400 animate-ping-slow" />
          <div class="absolute bottom-8 left-6 w-3 h-3 rounded-full bg-blue-400 animate-ping-slow delay-700" />

          <div class="absolute w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-blue-200 to-indigo-200 blur-2xl opacity-40" />

          <img
            src="@/assets/Section1.png"
            alt="Grace International — Global Education"
            class="relative z-10 w-full max-w-[340px] md:max-w-[420px] lg:max-w-[480px] h-auto drop-shadow-2xl float-image"
          />

          <div
            class="absolute -left-4 md:-left-8 bottom-12 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20 float-badge"
          >
            <span class="text-2xl">🎓</span>
            <div>
              <p class="text-xs text-gray-400 font-medium">Accepted at</p>
              <p class="text-sm text-blue-800 font-bold">Top 100 Universities</p>
            </div>
          </div>

          <div
            class="absolute -right-2 md:-right-6 top-12 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20 float-badge-alt"
          >
            <span class="text-2xl">✈️</span>
            <div>
              <p class="text-xs text-gray-400 font-medium">Visa Success Rate</p>
              <p class="text-sm text-green-600 font-bold">98%</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#ffffff" fill-opacity="0.6" />
      </svg>
    </div>
  </section>

  <section ref="whyRef" class="max-w-[1400px] mx-auto px-6 md:px-12 py-16 font-poppins">
    <div
      class="text-center mb-12 transition-all duration-700"
      :class="whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <span class="text-green-600 text-sm font-semibold tracking-widest uppercase">What Sets Us Apart</span>
      <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
        Why Choose Grace International?
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(card, i) in cards"
        :key="card.front"
        class="flip-card h-48 transition-all duration-500"
        :class="[
          whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          { 'cursor-pointer': isMobile }
        ]"
        :style="{ transitionDelay: whyVisible ? `${i * 100}ms` : '0ms' }"
        @click="isMobile ? flipCard(i) : null"
      >
        <div
          class="flip-card-inner w-full h-full"
          :class="{ flipped: isMobile && flippedCards[i] }"
        >
          <div class="flip-card-face flip-card-front bg-blue-800 text-white rounded-2xl shadow-md px-6 flex flex-col items-center justify-center gap-2 text-center">
            <span class="text-3xl">{{ card.icon }}</span>
            <span class="text-xl font-bold">{{ card.front }}</span>
            <span v-if="card.sub" class="text-blue-200 text-xs">{{ card.sub }}</span>
          </div>
          <div class="flip-card-face flip-card-back bg-gradient-to-br from-green-600 to-green-500 text-white rounded-2xl shadow-md px-6 flex items-center justify-center text-center">
            <span class="text-sm leading-relaxed">{{ card.back }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

function scrollToContact() {
  const el = document.getElementById("contact-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// ── Intersection observers ────────────────────────────────────────────────────
const sectionRef = ref(null);
const whyRef = ref(null);
const visible = ref(false);
const whyVisible = ref(false);

let heroObserver = null;
let whyObserver = null;

onMounted(() => {
  heroObserver = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { visible.value = true; heroObserver.disconnect(); } },
    { threshold: 0.15 }
  );
  if (sectionRef.value) heroObserver.observe(sectionRef.value);

  whyObserver = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { whyVisible.value = true; whyObserver.disconnect(); } },
    { threshold: 0.1 }
  );
  if (whyRef.value) whyObserver.observe(whyRef.value);

  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  heroObserver?.disconnect();
  whyObserver?.disconnect();
  window.removeEventListener("resize", handleResize);
});

// ── Mobile flip cards ─────────────────────────────────────────────────────────
const isMobile = ref(false);
const flippedCards = ref([false, false, false, false]);

function flipCard(idx) {
  flippedCards.value[idx] = !flippedCards.value[idx];
}
function handleResize() {
  isMobile.value = window.innerWidth < 768;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5", label: "Destinations" },
  { value: "500+", label: "Partner Universities" },
];

const avatarColors = ["bg-blue-500", "bg-green-500", "bg-indigo-500", "bg-emerald-500"];
const avatarLetters = ["A", "R", "S", "P"];

const cards = [
  {
    icon: "🌍",
    front: "20+ Years",
    sub: "of Global Expertise",
    back: "A trusted name with a presence across 10+ countries and a proven track record since 2006.",
  },
  {
    icon: "🏛️",
    front: "Strong University Partnerships",
    sub: "",
    back: "Direct tie-ups with 500+ reputed institutions in Australia, UK, USA, Canada, and New Zealand.",
  },
  {
    icon: "🛡️",
    front: "Comprehensive Support",
    sub: "",
    back: "From IELTS/PTE prep to scholarships, visa filing, and post-arrival guidance — we cover it all.",
  },
  {
    icon: "⭐",
    front: "25,000+ Success Stories",
    sub: "",
    back: "Students from India and Nepal placed at top universities worldwide — and counting.",
  },
];
</script>

<style scoped>
/* Floating image */
@keyframes floatImage {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-16px); }
}
.float-image {
  animation: floatImage 5s ease-in-out infinite;
}

/* Floating badge subtle bob */
@keyframes floatBadge {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-8px) rotate(-1deg); }
}
.float-badge {
  animation: floatBadge 4s ease-in-out infinite;
}
@keyframes floatBadgeAlt {
  0%, 100% { transform: translateY(0px) rotate(1deg); }
  50%       { transform: translateY(-10px) rotate(1deg); }
}
.float-badge-alt {
  animation: floatBadgeAlt 4.5s ease-in-out 0.5s infinite;
}

/* Slow ping for decorative dots */
@keyframes pingSlow {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.6); opacity: 0.4; }
}
.animate-ping-slow {
  animation: pingSlow 3s ease-in-out infinite;
}
.delay-700 {
  animation-delay: 700ms;
}

/* Rotating dashed ring */
@keyframes rotateRing {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.rotate-ring {
  animation: rotateRing 30s linear infinite;
}

/* Flip cards */
.flip-card { perspective: 1000px; }
.flip-card-inner {
  position: relative;
  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner,
.flip-card-inner.flipped {
  transform: rotateY(180deg);
}
.flip-card-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>