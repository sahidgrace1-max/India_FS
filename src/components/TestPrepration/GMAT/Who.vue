<template>
  <!-- Modal -->
  <div 
    v-if="showModal" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <EnrollmentFormIELTS @close="closeModal" />
    </div>
  </div>

  <!-- GMAT Info Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Side - Content -->
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Who is it for?</h2>
          
          <p class="text-gray-700 leading-relaxed text-base mb-4">
            The GMAT is intended for students applying to MBA programs and other graduate management degrees. Business schools worldwide use GMAT scores to evaluate applicants' readiness for advanced study in mathematics, analytical writing, and verbal reasoning.
          </p>

          <p class="text-gray-700 leading-relaxed text-base font-semibold mb-2">
            What is the GMAT test like?
          </p>

          <p class="text-gray-700 leading-relaxed text-base mb-4">
            The GMAT consists of three main sections: Analytical Writing Assessment, Verbal Ability, and Quantitative Reasoning. It is primarily computer-based, though paper-based versions may be offered in areas with limited computer access.
          </p>

          <p class="text-gray-700 leading-relaxed text-base font-semibold mb-2">
            Level and Scores:
          </p>

          <p class="text-gray-700 leading-relaxed text-base">
            Scores range from 200 to 800. Exam scores are valid for five years. Business schools typically use these scores to compare candidates and determine admission eligibility.
          </p>
        </div>

        <!-- Right Side - Image -->
        <div class="flex justify-center">
          <img 
            src="@/assets/image.png" 
            alt="GMAT Study Desk" 
            class="rounded-lg shadow-lg w-full h-full object-cover"
            style="min-height: 400px; max-height: 500px;"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-white mb-4">TAKE YOUR FIRST STEP TOWARDS SUCCESS</h2>
      <p class="text-xl text-blue-100 mb-8">Enroll your GMAT Preparation Class with Grace International</p>
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
import { ref } from 'vue';
import EnrollmentFormIELTS from './EnrollmentFormIELTS.vue';

export default {
  name: 'IELTSWho',
  components: {
    EnrollmentFormIELTS
  },
  setup() {
    const showModal = ref(false);

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      showModal,
      closeModal
    };
  }
}
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
