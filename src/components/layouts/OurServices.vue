<template>
  <section class="bg-gray-100 py-10 md:py-16">
    <div class="max-w-screen-2xl mx-auto px-2 md:px-4">
      <h2
        class="text-xl md:text-3xl font-semibold text-center text-blue-700 mb-8 md:mb-12"
      >
        Our Services
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center"
      >
        <!-- Card 1: from left -->
        <div
          ref="card1"
          :class="['service-card', 'from-left', { animate: inView.card1 }]"
        >
          <img
            src="@/assets/freecounselling.png"
            alt="Free Counseling"
            class="card-image"
          />
          <h3 class="card-title">Free Counseling</h3>
          <div class="card-text">Dreaming to Study Abroad? Start Here —</div>
          <div class="card-text">
            Get expert guidance for
            <span class="font-small"
              >Australia | UK | Canada | USA | New Zealand | Europe</span
            >
          </div>
        </div>

        <!-- Card 2: from right -->
        <div
          ref="card2"
          :class="['service-card', 'from-right', { animate: inView.card2 }]"
        >
          <img
            src="@/assets/profileassessment.png"
            alt="Free Profile Assessment"
            class="card-image"
          />
          <h3 class="card-title">Free Profile Assessment</h3>
          <div class="card-text">
            Your career deserves the
            <span class="font-small">right direction.</span>
          </div>
          <div class="card-text">
            Get a
            <span class="font-small">FREE Study Abroad Profile Assessment</span>
            from experts at
            <span class="font-small">Grace International</span> and discover
            your best options based on
            <span class="font-small">your education, budget & goals.</span>
          </div>
        </div>

        <!-- Card 3: from top -->
        <div
          ref="card3"
          :class="['service-card', 'from-top', { animate: inView.card3 }]"
        >
          <img
            src="@/assets/freevisaprocessing.png"
            alt="Free Visa Processing"
            class="card-image"
          />
          <h3 class="card-title">Free Visa Processing</h3>
          <div class="card-text">
            Secure your student visa with expert guidance and zero processing
            charges.
          </div>
          <div class="card-text">
            Trusted by thousands of students globally.
          </div>
        </div>

        <!-- Card 4: from bottom -->
        <div
          ref="card4"
          :class="['service-card', 'from-bottom', { animate: inView.card4 }]"
        >
          <img
            src="@/assets/noservicecharge.png"
            alt="No Services Charge"
            class="card-image"
          />
          <h3 class="card-title">No Services Charge</h3>

          <div class="card-text">
            At Grace International, we proudly operate on a No Service Charge
            policy for our core services. We provide end-to-end support for your
            international education journey.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, onMounted } from "vue";

export default {
  name: "OurServices",
  setup() {
    const card1 = ref(null);
    const card2 = ref(null);
    const card3 = ref(null);
    const card4 = ref(null);

    const inView = reactive({
      card1: false,
      card2: false,
      card3: false,
      card4: false,
    });

    onMounted(() => {
      const options = { threshold: 0.3 };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === card1.value) inView.card1 = true;
            if (entry.target === card2.value) inView.card2 = true;
            if (entry.target === card3.value) inView.card3 = true;
            if (entry.target === card4.value) inView.card4 = true;
          }
        });
      }, options);

      [card1.value, card2.value, card3.value, card4.value].forEach((el) => {
        if (el) observer.observe(el);
      });
    });

    return { card1, card2, card3, card4, inView };
  },
};
</script>

<style scoped>
/* Base card - FIXED: Added padding and background */
.service-card {
  opacity: 0;
  padding: 1.5rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.4s ease,
    background 0.4s ease,
    opacity 0.6s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 100%;
}

/* Image styling */
.card-image {
  width: 100%;
  max-width: 300px;
  height: 170px;
  object-fit: cover;
  margin-bottom: 1.25rem;
  border-radius: 0.375rem;
}

@media (min-width: 768px) {
  .card-image {
    height: 200px;
    margin-bottom: 1.5rem;
  }
}

/* Title styling */
.card-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
}

@media (min-width: 768px) {
  .card-title {
    font-size: 1.25rem;
  }
}

/* Text styling - FIXED: Added text-align and proper width */
.card-text {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  width: 100%;
  text-align: left;
  line-height: 1.6;
}

/* Hover effect - FIXED: Only transform Y axis */
@media (min-width: 768px) {
  .service-card:hover {
    transform: translateY(-8px);
    box-shadow:
      0 12px 32px rgba(34, 97, 184, 0.2),
      0 2px 8px rgba(34, 97, 184, 0.15);
    background: #eff6ff;
  }
}

/* Directions */
.from-left {
  transform: translateX(-50px);
}
.from-right {
  transform: translateX(50px);
}
.from-top {
  transform: translateY(-50px);
}
.from-bottom {
  transform: translateY(50px);
}

/* Active animation - FIXED: Proper reset */
.animate {
  transform: translateX(0) translateY(0) !important;
  opacity: 1;
}

/* FIXED: Ensure hover doesn't affect animated cards' initial position */
@media (min-width: 768px) {
  .animate:hover {
    transform: translateY(-8px) !important;
  }
}
</style>
