<template>
  <!-- Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click.self="closeModal"
  >
    <div
      class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
    >
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <!-- Update the form component for PTE -->
      <EnrollmentFormPTE @close="closeModal" />
    </div>
  </div>

  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Side - Content -->
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Who is it for?</h2>

          <p class="text-gray-700 leading-relaxed text-base mb-4">
            PTE Academic is a computer-based academic English language test
            aimed at non-native English speakers wanting to study abroad. It
            tests Reading, Writing, Listening, and Speaking. Questions often
            test two skills together, such as listening and reading or reading
            and speaking.
          </p>

          <p class="text-gray-700 leading-relaxed text-base font-semibold mb-2">
            What countries accept PTE?
          </p>

          <p class="text-gray-700 leading-relaxed text-base mb-4">
            PTE Academic is recognized by thousands of universities worldwide,
            with the most popular being the UK, Australia, the US, and Canada.
          </p>

          <p class="text-gray-700 leading-relaxed text-base font-semibold mb-2">
            When can we take the test?
          </p>

          <p class="text-gray-700 leading-relaxed text-base">
            PTE tests are usually conducted in three shifts from Monday to
            Friday – Morning, Day, and Evening. There are 2 test centres in
            Kathmandu: British Professional College & AlphaBeta Institute.
            Outside the valley, it is conducted at Chitwan Medical College
            (CMC).
          </p>
        </div>

        <!-- Right Side - Image -->
        <div class="flex justify-center">
          <img
            src="@/assets/pte1.png"
            alt="PTE Study Desk"
            class="rounded-lg shadow-lg w-full h-full object-cover"
            style="min-height: 400px; max-height: 500px"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-white mb-4">
        TAKE YOUR FIRST STEP TOWARDS SUCCESS
      </h2>
      <p class="text-xl text-blue-100 mb-8">
        Enroll your Preparation Class with Grace International
      </p>
      <button
        @click="showModal = true"
        class="px-8 py-3 bg-green-500 text-blue-600 font-bold rounded-lg hover:bg-green-600 transition-colors"
      >
        APPLY NOW
      </button>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import EnrollmentFormPTE from "./EnrollmentFormIELTS.vue";

export default {
  name: "IELTSWho",
  components: {
    EnrollmentFormPTE,
  },
  setup() {
    const showModal = ref(false);

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      showModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
section {
  background-color: #f9fafb;
}

h2 {
  color: #1f2937;
}

p {
  color: #4b5563;
}
</style>
