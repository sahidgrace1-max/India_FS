<template>
  <section
    class="relative w-full min-h-screen overflow-hidden bg-gray-100"
  >
    <!-- Background Image -->
    <picture class="absolute inset-0 w-full h-full">
      <!-- Mobile: Smaller, optimized image -->
      <source 
        media="(max-width: 640px)" 
        srcset="@/assets/HeroM.jpeg"
      />
      <!-- Tablet: Medium size image -->
      <source 
        media="(max-width: 1024px)" 
        srcset="@/assets/Hero-Mobile.jpeg"
      />
      <!-- Desktop: Full size image -->
      <img
        src="@/assets/Hero.jpeg"
        alt="Hero Image"
        class="hero-img w-full h-full object-cover"
      />
    </picture>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent animate-gradient-shift"
    ></div>

    <!-- tsParticles -->
    <vue-particles
      id="tsparticles"
      class="absolute inset-0 pointer-events-none"
      :options="particlesOptions"
    />

    <!-- Bottom Border -->
    <div
      class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-border-slide"
    ></div>

    <!-- Content -->
    <div
      class="absolute z-10 
             top-1/2 -translate-y-1/2
             left-1/2 -translate-x-1/2 lg:left-8 xl:left-16 2xl:left-24 lg:translate-x-0
             w-full
             px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
             text-center lg:text-left
             max-w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
    >
      <!-- Heading -->
      <h1
        class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl
               font-bold 
               mb-3 sm:mb-4 md:mb-5 lg:mb-6
               leading-tight
               animate-slide-in-right
               text-white
               drop-shadow-lg"
        style="font-family: 'Poppins', 'Inter', sans-serif; letter-spacing: 0.02em;"
      >
        Welcome to Grace International
      </h1>

      <!-- Subheading -->
      <p
        class="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl
               font-bold text-green-400
               animate-slide-in-right-delayed
               drop-shadow-lg"
        style="font-family: 'Poppins', 'Inter', sans-serif; letter-spacing: 0.05em;"
      >
        {{ selectedBranch }}
      </p>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-6 sm:bottom-8 md:bottom-10 
             left-1/2 -translate-x-1/2
             hidden sm:block animate-bounce-slow z-20"
    >
      <div
        class="w-6 h-10 sm:w-8 sm:h-12 
               border-2 border-white/60 rounded-full 
               flex justify-center pt-2"
      >
        <span
          class="w-1 h-2 sm:h-3 bg-white rounded-full animate-scroll-indicator"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();

const isDesktop = computed(() => {
  if (typeof window === "undefined") return true;
  return window.innerWidth > 768;
});

const particlesOptions = computed(() => ({
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: {
        enable: isDesktop.value,
        mode: "repulse",
      },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#4ade80" },
    links: {
      color: "#4ade80",
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      outModes: { default: "bounce" },
    },
    number: {
      density: { enable: true },
      value: isDesktop.value ? 50 : 30,
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
}));
</script>

<style scoped>
/* ---------------- SAFE AREA ---------------- */
section {
  padding-bottom: env(safe-area-inset-bottom);
}

/* ---------------- OVERLAY ---------------- */
@keyframes gradientShift {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.9; }
}
.animate-gradient-shift {
  animation: gradientShift 8s ease-in-out infinite;
}

/* ---------------- TEXT ANIMATIONS ---------------- */
@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 1s ease-out forwards;
}

.animate-slide-in-right-delayed {
  animation: slideInRight 1s ease-out 0.3s forwards;
  opacity: 0;
}

/* ---------------- SCROLL INDICATOR ---------------- */
@keyframes bounceScroll {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-bounce-slow {
  animation: bounceScroll 2s ease-in-out infinite;
}

@keyframes scrollIndicator {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(12px);
  }
}

.animate-scroll-indicator {
  animation: scrollIndicator 1.5s ease-in-out infinite;
}

/* ---------------- PARTICLES ---------------- */
#tsparticles {
  z-index: 1;
}

/* ---------------- CUSTOM BREAKPOINT (xs) ---------------- */
@media (min-width: 475px) {
  .xs\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  .xs\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

/* ---------------- BACKGROUND IMAGE RESPONSIVE SETTINGS ---------------- */
.hero-img {
  /* Smooth image loading */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Mobile: Focus on center or portrait crop */
@media (max-width: 640px) {
  .hero-img {
    object-position: center center;
    max-height: 100vh;
    max-height: 100dvh; /* Dynamic viewport height */
    /* Alternative positions if your image has a specific subject:
       object-position: center top;
       object-position: 60% center; 
    */
  }
}

/* Tablet: Adjust for landscape orientation */
@media (min-width: 641px) and (max-width: 1024px) {
  .hero-img {
    object-position: center 40%;
    /* Slightly shift focus up for tablets */
  }
}

/* Desktop: Show full composition */
@media (min-width: 1025px) {
  .hero-img {
    object-position: center center;
  }
}

/* Ultra-wide screens: Prevent overstretching */
@media (min-width: 1920px) {
  .hero-img {
    object-fit: cover;
    max-width: 100%;
  }
}

/* Portrait orientation optimization */
@media (orientation: portrait) {
  .hero-img {
    object-position: center 30%;
    /* Focus higher in portrait mode */
  }
}

/* Landscape orientation optimization */
@media (orientation: landscape) and (max-height: 600px) {
  .hero-img {
    object-position: center center;
  }
}

/* ---------------- MOBILE OPTIMIZATIONS ---------------- */
@media (max-width: 640px) {
  section {
    min-height: 100vh;
    min-height: 100dvh; /* Dynamic viewport height for mobile browsers */
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ---------------- HIGH RESOLUTION DISPLAYS ---------------- */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero-img {
    image-rendering: -webkit-optimize-contrast;
  }
}
</style>