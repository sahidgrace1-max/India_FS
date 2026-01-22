<template>
  <div class="w-full flex flex-col items-center py-10 px-4">
    <h2
      class="text-2xl md:text-3xl font-bold text-center mb-10 animate-fade-in bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
    >
      Test Preparation
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
      <!-- Card 1 - IELTS -->
      <div @click="goToIELTS" class="card-wrapper group">
        <div
          class="card-inner border-2 border-blue-500 rounded-xl flex items-center justify-center h-32 bg-gradient-to-br from-white via-red-50 to-blue-50 cursor-pointer relative overflow-hidden"
        >
          <!-- Animated background circles -->
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-red-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-16 h-16 bg-blue-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500"
          ></div>

          <!-- Shimmer effect -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:translate-x-full transition-all duration-1000 -translate-x-full"
          ></div>

          <!-- Rotating border -->
          <div
            class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              class="absolute inset-0 rounded-xl animate-spin-slow bg-gradient-to-r from-red-500 via-blue-500 to-red-500 blur-sm"
            ></div>
          </div>

          <div class="flex flex-col items-center relative z-10">
            <span
              class="text-4xl font-bold text-red-600 group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 drop-shadow-lg"
              >IELTS</span
            >
          </div>

          <!-- Bottom glow bar -->
          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg shadow-red-500/50"
          ></div>
        </div>
      </div>

      <!-- Card 2 - PTE -->
      <div @click="goToPTE" class="card-wrapper group">
        <div
          class="card-inner border-2 border-blue-500 rounded-xl flex items-center justify-center h-32 bg-gradient-to-br from-white via-indigo-50 to-purple-50 cursor-pointer relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-indigo-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-16 h-16 bg-purple-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500"
          ></div>

          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:translate-x-full transition-all duration-1000 -translate-x-full"
          ></div>

          <div
            class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              class="absolute inset-0 rounded-xl animate-spin-slow bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 blur-sm"
            ></div>
          </div>

          <div class="flex flex-col items-center relative z-10">
            <span
              class="text-3xl font-bold text-indigo-900 group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 drop-shadow-lg"
              >PTE</span
            >
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-900 via-purple-600 to-indigo-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg shadow-indigo-500/50"
          ></div>
        </div>
      </div>

      <!-- Card 3 - TOEFL -->
      <div @click="goToTOEFL" class="card-wrapper group">
        <div
          class="card-inner border-2 border-blue-500 rounded-xl flex items-center justify-center h-32 bg-gradient-to-br from-white via-gray-50 to-slate-100 cursor-pointer relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-gray-300 rounded-full blur-2xl opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-16 h-16 bg-slate-300 rounded-full blur-xl opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500"
          ></div>

          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:translate-x-full transition-all duration-1000 -translate-x-full"
          ></div>

          <div
            class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              class="absolute inset-0 rounded-xl animate-spin-slow bg-gradient-to-r from-gray-500 via-slate-500 to-gray-500 blur-sm"
            ></div>
          </div>

          <div class="flex flex-col items-center relative z-10">
            <span
              class="text-3xl font-bold text-black group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 drop-shadow-lg"
              >TOEFL</span
            >
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 via-slate-600 to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg shadow-gray-500/50"
          ></div>
        </div>
      </div>

      <!-- Card 4 - GMAT -->
      <div @click="goToGMAT" class="card-wrapper group">
        <div
          class="card-inner border-2 border-blue-500 rounded-xl flex items-center justify-center h-32 bg-gradient-to-br from-white via-purple-50 to-pink-50 cursor-pointer relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-16 h-16 bg-pink-200 rounded-full blur-xl opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500"
          ></div>

          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:translate-x-full transition-all duration-1000 -translate-x-full"
          ></div>

          <div
            class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              class="absolute inset-0 rounded-xl animate-spin-slow bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-sm"
            ></div>
          </div>

          <div class="flex flex-col items-center relative z-10">
            <span
              class="text-3xl font-bold text-purple-700 group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 drop-shadow-lg"
              >GMAT</span
            >
          </div>

          <div
            class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg shadow-purple-500/50"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToIELTS = () => {
  router.push({ name: "IELTSPreparation" });
};
const goToPTE = () => {
  router.push({ name: "PTEPreparation" });
};
const goToTOEFL = () => {
  router.push({ name: "TOEFLPreparation" });
};
const goToGMAT = () => {
  router.push({ name: "GMATPreparation" });
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.animate-spin-slow {
  animation: spinSlow 8s linear infinite;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}

.card-wrapper {
  animation: fadeIn 0.8s ease-out backwards;
  perspective: 1000px;
}

.card-wrapper:nth-child(1) {
  animation-delay: 0.1s;
}

.card-wrapper:nth-child(2) {
  animation-delay: 0.2s;
}

.card-wrapper:nth-child(3) {
  animation-delay: 0.3s;
}

.card-wrapper:nth-child(4) {
  animation-delay: 0.4s;
}

.card-inner {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform-style: preserve-3d;
}

.card-wrapper:hover .card-inner {
  transform: translateY(-12px) scale(1.05) rotateX(5deg);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 12px 24px -8px rgba(0, 0, 0, 0.15);
}

.card-wrapper:active .card-inner {
  transform: translateY(-6px) scale(1.02);
  transition: all 0.1s ease;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

.card-wrapper:hover {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Glow effect on hover */
.card-wrapper:hover .card-inner::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 0.75rem;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  opacity: 0;
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
