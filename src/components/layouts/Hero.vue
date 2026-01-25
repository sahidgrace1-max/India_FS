<template>
  <section
    class="w-full h-[100svh] min-h-[420px] sm:min-h-[520px] md:min-h-[700px] lg:min-h-[820px] relative overflow-hidden bg-gray-100"
  >
    <!-- Background Image (Static, No animation) -->
    <img
      src="@/assets/Hero.jpeg"
      alt="Hero Image"
      class="hero-img absolute inset-0 w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover"
    />

    <!-- Gradient Overlay (Optional Animation) -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent animate-gradient-shift"
    ></div>

    <!-- Floating Particles (Optional) -->
    <div class="absolute inset-0 pointer-events-none">
      <span v-for="i in 6" :key="i" :class="`particle particle-${i}`"></span>
    </div>

    <!-- Bottom Border -->
    <div
      class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-border-slide"
    ></div>

    <!-- Content: Heading & Branch -->
    <div
      class="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 px-4 sm:px-6 md:px-10 lg:px-20 max-w-full lg:max-w-3xl text-white"
    >
      <!-- Main Heading: Full width with slide animation -->
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-in-right whitespace-nowrap"
        style="
          font-family: &quot;Poppins&quot;, &quot;Inter&quot;, sans-serif;
          letter-spacing: 0.02em;
        "
      >
        Welcome to Grace International
      </h1>

      <!-- Subheading: Branch below heading with slide animation -->
      <p
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 animate-slide-in-right-delayed"
        style="
          font-family: &quot;Poppins&quot;, &quot;Inter&quot;, sans-serif;
          letter-spacing: 0.05em;
        "
      >
        {{ selectedBranch }}
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

/* ---------------- TEXT ANIMATIONS (Right to Left) ---------------- */
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
  object-position: center; /* STATIC */
}

/* MOBILE: No animation, fixed scale */
@media (max-width: 767px) {
  .hero-img {
    animation: none;
    transform: none;
    object-position: center;
  }
  section {
    min-height: 100svh;
  }
}
</style>
