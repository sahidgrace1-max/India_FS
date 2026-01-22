<!-- Enhanced Contact Form Component with Animations -->
<template>
  <div class="flex flex-col lg:flex-row w-full min-h-screen">
    <!-- Left Side: Image and Text -->
    <div
      class="w-full lg:w-1/2 relative overflow-hidden flex items-center justify-end pr-12 bg-gradient-to-br from-green-50 to-white"
    >
      <div class="image-container">
        <img
          src="@/assets/image1.png"
          alt="Contact Us"
          class="max-h-[1400px] w-auto object-contain my-8 ml-0 mr-0 animate-float"
        />
      </div>
    </div>

    <!-- Right Side: Contact Form -->
    <div
      class="w-full lg:w-1/2 flex items-start justify-start p-6 lg:pl-8 lg:pr-0 lg:py-12 bg-gradient-to-bl from-gray-50 to-white"
    >
      <div class="w-full max-w-lg">
        <div class="space-y-5">
          <h2 class="text-green-600 text-3xl font-bold mb-6 animate-slide-down">
            Contact Form
          </h2>

          <!-- Error Message Display -->
          <transition name="message">
            <div
              v-if="errorMessage"
              class="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded shadow-md"
            >
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ errorMessage }}
              </div>
            </div>
          </transition>

          <!-- Success Message Display -->
          <transition name="message">
            <div
              v-if="successMessage"
              class="bg-green-50 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded shadow-md"
            >
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ successMessage }}
              </div>
            </div>
          </transition>

          <div class="form-field">
            <label class="block text-gray-700 font-semibold mb-2">
              Your Name<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="formData.name"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
            />
          </div>

          <div class="form-field">
            <label class="block text-gray-700 font-semibold mb-2">
              Your Email<span class="text-red-500">*</span>
            </label>
            <input
              type="email"
              v-model="formData.email"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
            />
          </div>

          <div class="form-field">
            <label class="block text-gray-700 font-semibold mb-2">
              Contact Number<span class="text-red-500">*</span>
            </label>
            <input
              type="tel"
              v-model="formData.contact"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
            />
          </div>

          <div class="form-field">
            <label class="block text-gray-700 font-semibold mb-2">
              Interested Course<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="formData.course"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
            />
          </div>

          <div class="form-field">
            <label class="block text-gray-700 font-semibold mb-2">
              Preferred Intake<span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.intake"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-all duration-300 hover:border-green-300 cursor-pointer"
            >
              <option>Jan 2026</option>
              <option>May 2026</option>
              <option>Sep 2026</option>
            </select>
          </div>

          <div class="form-field">
            <label class="block text-gray-700 font-semibold mb-2">
              What is your budget per year?<span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.budget"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-all duration-300 hover:border-green-300 cursor-pointer"
            >
              <option>Less than 20 Lakhs</option>
              <option>20-40 Lakhs</option>
              <option>More than 40 Lakhs</option>
            </select>
          </div>

          <div class="form-field">
            <label class="block text-gray-700 font-semibold mb-2">
              Your City<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="formData.city"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-300"
            />
          </div>

          <button
            @click="handleSubmit"
            :disabled="isSubmitting"
            class="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span v-if="!isSubmitting">Submit</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                  fill="none"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const formData = reactive({
  name: "",
  email: "",
  contact: "",
  course: "",
  intake: "Jan 2026",
  budget: "Less than 20 Lakhs",
  city: "",
});

const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const handleSubmit = async () => {
  // Clear previous messages
  successMessage.value = "";
  errorMessage.value = "";

  // Basic validation
  if (
    !formData.name ||
    !formData.email ||
    !formData.contact ||
    !formData.course ||
    !formData.city
  ) {
    errorMessage.value = "Please fill in all required fields.";
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await fetch(
      "http://192.168.110.37:8000/api/contact/submit/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    if (response.ok) {
      successMessage.value =
        "Form submitted successfully! We'll contact you soon.";

      // Reset form
      formData.name = "";
      formData.email = "";
      formData.contact = "";
      formData.course = "";
      formData.intake = "Jan 2026";
      formData.budget = "Less than 20 Lakhs";
      formData.city = "";
    } else {
      const error = await response.json();
      errorMessage.value =
        error.message || "Failed to submit form. Please try again.";
    }
  } catch (error) {
    console.error("Error:", error);
    errorMessage.value = "An error occurred. Please try again later.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Floating animation for image */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Slide down animation for title */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slideDown 0.6s ease-out;
}

/* Form field animation */
.form-field {
  animation: fadeInUp 0.6s ease-out backwards;
}

.form-field:nth-child(3) {
  animation-delay: 0.1s;
}
.form-field:nth-child(4) {
  animation-delay: 0.15s;
}
.form-field:nth-child(5) {
  animation-delay: 0.2s;
}
.form-field:nth-child(6) {
  animation-delay: 0.25s;
}
.form-field:nth-child(7) {
  animation-delay: 0.3s;
}
.form-field:nth-child(8) {
  animation-delay: 0.35s;
}
.form-field:nth-child(9) {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Message transitions */
.message-enter-active {
  animation: slideInDown 0.4s ease-out;
}

.message-leave-active {
  animation: slideOutUp 0.4s ease-in;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* Spinning loader animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Input focus glow effect */
input:focus,
select:focus {
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

/* Image container with subtle scaling on hover */
.image-container {
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: scale(1.02);
}
</style>
