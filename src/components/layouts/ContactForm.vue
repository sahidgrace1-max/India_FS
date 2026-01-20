<!-- Updated Contact Form Component with Backend Integration -->
<template>
  <div class="flex flex-col lg:flex-row w-full min-h-screen">
    <!-- Left Side: Image and Text -->
    <div
      class="w-full lg:w-1/2 relative overflow-hidden flex items-center justify-end pr-12"
    >
      <img
        src="@/assets/image1.png"
        alt="Contact Us"
        class="max-h-[1400px] w-auto object-contain my-8 ml-0 mr-0"
      />
    </div>

    <!-- Right Side: Contact Form -->
    <div
      class="w-full lg:w-1/2 flex items-start justify-start p-6 lg:pl-8 lg:pr-0 lg:py-12 bg-gray-50"
    >
      <div class="w-full max-w-lg">
        <div class="space-y-5">
          <h2 class="text-green-600 text-3xl font-bold mb-6">Contact Form</h2>

          <!-- Error Message Display -->
          <div v-if="errorMessage" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {{ errorMessage }}
          </div>

          <!-- Success Message Display -->
          <div v-if="successMessage" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            {{ successMessage }}
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Your Name<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="formData.name"
              required
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Your Email<span class="text-red-500">*</span>
            </label>
            <input
              type="email"
              v-model="formData.email"
              required
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Contact Number<span class="text-red-500">*</span>
            </label>
            <input
              type="tel"
              v-model="formData.contact"
              required
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Interested Course<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="formData.course"
              required
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Preferred Intake<span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.intake"
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            >
              <option>Jan 2026</option>
              <option>May 2026</option>
              <option>Sep 2026</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              What is your budget per year?<span class="text-red-500">*</span>
            </label>
            <select
              v-model="formData.budget"
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            >
              <option>Less than 20 Lakhs</option>
              <option>20-40 Lakhs</option>
              <option>More than 40 Lakhs</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Your City<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="formData.city"
              required
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            @click="handleSubmit"
            :disabled="isSubmitting"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-50"
          >
            {{ isSubmitting ? 'Submitting...' : 'Submit' }}
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
  if (!formData.name || !formData.email || !formData.contact || !formData.course || !formData.city) {
    errorMessage.value = "Please fill in all required fields.";
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await fetch("http://localhost:8000/api/contact/submit/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      successMessage.value = "Form submitted successfully! We'll contact you soon.";
      
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
      errorMessage.value = error.message || "Failed to submit form. Please try again.";
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
/* Additional custom styles if needed */
</style>
