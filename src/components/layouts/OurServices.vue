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
        <!-- Card 1 -->
        <div
          class="service-card bg-gray-100 flex flex-col items-center rounded-lg text-justify w-full max-w-xs"
        >
          <img
            src="@/assets/image.png"
            alt="Free Counseling"
            class="w-full max-w-[320px] h-[180px] md:h-[220px] object-cover mb-4 md:mb-6 rounded"
          />
          <h3 class="text-lg md:text-xl font-bold mb-2 text-center">
            Free Counseling
          </h3>
          <div class="text-base font-semibold mb-1 w-full">
            Dreaming to Study Abroad? Start Here — FREE Counseling!
          </div>
          <div class="text-base mb-1 w-full">
            Get expert guidance for
            <span class="font-bold"
              >Australia | UK | Canada | USA | New Zealand | Europe</span
            >
          </div>
        </div>
        <!-- Card 2 -->
        <div
          class="service-card bg-gray-100 flex flex-col items-center rounded-lg text-justify w-full max-w-xs"
        >
          <img
            src="@/assets/image.png"
            alt="Free Profile Assessment"
            class="w-full max-w-[320px] h-[180px] md:h-[220px] object-cover mb-4 md:mb-6 rounded"
          />
          <h3 class="text-lg md:text-xl font-bold mb-2 text-center">
            Free Profile Assessment
          </h3>
          <div class="text-base mb-1 w-full">
            Your career deserves the
            <span class="font-bold">right direction.</span>
          </div>
          <div class="text-base mb-1 w-full">
            Get a
            <span class="font-bold">FREE Study Abroad Profile Assessment</span>
            from experts at
            <span class="font-bold">Grace International</span> and discover your
            best options based on
            <span class="font-bold">your education, budget & goals.</span>
          </div>
        </div>
        <!-- Card 3 -->
        <div
          class="service-card bg-gray-100 flex flex-col items-center rounded-lg text-justify w-full max-w-xs"
        >
          <img
            src="@/assets/image.png"
            alt="Free Visa Processing"
            class="w-full max-w-[320px] h-[180px] md:h-[220px] object-cover mb-4 md:mb-6 rounded"
          />
          <h3 class="text-lg md:text-xl font-bold mb-2 text-center">
            Free Visa Processing
          </h3>
          <div class="text-base mb-1 w-full">
            Secure your student visa with expert guidance and zero processing
            charges.
          </div>
          <div class="text-base mb-1 w-full">
            Trusted by thousands of students globally.
          </div>
        </div>
        <!-- Card 4 -->
        <div
          class="service-card bg-gray-100 flex flex-col items-center rounded-lg text-justify w-full max-w-xs"
        >
          <img
            src="@/assets/image.png"
            alt="No Services Charge"
            class="w-full max-w-[320px] h-[180px] md:h-[220px] object-cover mb-4 md:mb-6 rounded"
          />
          <h3 class="text-lg md:text-xl font-bold mb-2 text-center">
            No Services Charge
          </h3>
          <div class="text-base font-bold mb-1 w-full">
            At Grace International,
          </div>
          <div class="text-base mb-1 w-full">
            we proudly operate on a No Service Charge policy for our core
            services. We provide end-to-end support for your international
            education journey.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  transition:
    box-shadow 0.2s,
    background 0.2s;
}
@media (min-width: 768px) {
  .service-card:hover {
    box-shadow:
      0 8px 32px rgba(34, 97, 184, 0.15),
      0 1.5px 8px rgba(34, 97, 184, 0.12);
    background: #eff6ff;
  }
}
</style>
