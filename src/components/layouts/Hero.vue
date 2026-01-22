<template>
  <section
    class="w-full h-[100svh] min-h-[420px] sm:min-h-[520px] md:min-h-[700px] lg:min-h-[820px] relative overflow-hidden flex items-center bg-gray-100"
  >
    <!-- Background Image -->
    <img
      src="@/assets/hero.jpg"
      alt="Hero Image"
      class="hero-img absolute inset-0 w-full h-full object-cover"
    />

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent animate-gradient-shift"
    ></div>

    <!-- Floating Particles -->
    <div class="absolute inset-0 pointer-events-none">
      <span v-for="i in 6" :key="i" :class="`particle particle-${i}`"></span>
    </div>

    <!-- Bottom Border -->
    <div
      class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-border-slide"
    ></div>

    <!-- Content -->
    <div class="relative z-10 px-6 sm:px-10 md:px-20 max-w-3xl text-white">
      <h1
        class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight whitespace-nowrap"
      >
        Welcome TO Grace International
      </h1>

      <p
        class="text-xl sm:text-2xl md:text-4xl mb-8 font-semibold animate-subtitle"
      >
        <span
          class="relative text-green-400 font-bold text-7xl inline-block animate-highlight"
        >
          {{ selectedBranch }}
          <span
            class="absolute bottom-0 left-0 h-1 bg-green-400 animate-underline"
          ></span>
        </span>
      </p>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow"
    >
      <div
        class="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center pt-2"
      >
        <span
          class="w-1 h-3 bg-white rounded-full animate-scroll-indicator"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useBranchStore } from "@/stores/branchStore";
const { selectedBranch } = useBranchStore();
</script>

<style scoped>
/* ---------------- KEN BURNS ---------------- */
@keyframes kenBurns {
  from {
    transform: scale(1) translateX(0);
  }
  to {
    transform: scale(1.08) translateX(-20px);
  }
}

.animate-ken-burns {
  animation: kenBurns 20s ease-out infinite alternate;
}

@media (max-width: 640px) {
  .animate-ken-burns {
    animation: kenBurnsMobile 16s ease-out infinite alternate;
  }

  @keyframes kenBurnsMobile {
    from {
      transform: scale(1) translateX(0);
    }
    to {
      transform: scale(1.03) translateX(0);
    }
  }
}

/* ---------------- OVERLAY ---------------- */
@keyframes gradientShift {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.9;
  }
}

.animate-gradient-shift {
  animation: gradientShift 8s ease-in-out infinite;
}

/* ---------------- PARTICLES ---------------- */
.particle {
  position: absolute;
  background: rgba(74, 222, 128, 0.4);
  border-radius: 9999px;
}

.particle-1 {
  width: 8px;
  height: 8px;
  top: 20%;
  left: 10%;
  animation: float 12s infinite;
}
.particle-2 {
  width: 12px;
  height: 12px;
  top: 50%;
  left: 80%;
  animation: float 16s infinite;
}
.particle-3 {
  width: 6px;
  height: 6px;
  top: 40%;
  left: 30%;
  animation: float 10s infinite;
}
.particle-4 {
  width: 10px;
  height: 10px;
  top: 70%;
  left: 60%;
  animation: float 18s infinite;
}
.particle-5 {
  width: 8px;
  height: 8px;
  top: 30%;
  left: 70%;
  animation: float 14s infinite;
}
.particle-6 {
  width: 14px;
  height: 14px;
  top: 80%;
  left: 20%;
  animation: float 20s infinite;
}

@keyframes float {
  50% {
    transform: translate(40px, -60px);
    opacity: 0.8;
  }
}

/* ---------------- STATS ---------------- */
.stat {
  display: flex;
  gap: 12px;
  align-items: center;
}

.icon {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background: rgba(74, 222, 128, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 24px;
  height: 24px;
  color: #4ade80;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
}

.stat-label {
  font-size: 0.875rem;
  color: #d1d5db;
}

/* ---------------- ACCESSIBILITY ---------------- */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}

/* ================= IMAGE RESPONSIVE FIX ================= */
.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Default position center for all screens */
  object-position: center;
}

/* DESKTOP: Ken Burns effect and left-aligned image */
@media (min-width: 1024px) {
  .hero-img {
    animation: kenBurns 20s ease-out infinite alternate;
    object-position: center left;
  }
}

/* TABLET: Smaller zoom effect */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-img {
    animation: kenBurns 15s ease-out infinite alternate;
    object-position: center;
  }
}

/* MOBILE: No animation to save battery/CPU, fixed focus */
@media (max-width: 767px) {
  .hero-img {
    animation: none;
    transform: scale(
      1.1
    ); /* Halka zoom rakhera side haru safe zone ma rakhne */
    object-position: center;
  }

  /* Section height adjust for small mobiles */
  section {
    min-height: 100svh; /* viewport height fix */
  }
}

/* Animation keyframes update for smoother feel */
@keyframes kenBurns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.1) translate(-2%, -2%);
  }
}
</style>
