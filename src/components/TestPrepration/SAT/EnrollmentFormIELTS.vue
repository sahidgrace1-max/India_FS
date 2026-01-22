<template>
  <div class="p-8 bg-white">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Full Name -->
      <div>
        <label class="block text-gray-700 font-semibold mb-2">
          Your Full Name<span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          v-model="formData.full_name"
          required
          placeholder="Your Full Name"
          class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Email and Contact Number -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">
            Email<span class="text-red-500">*</span>
          </label>
          <input
            type="email"
            v-model="formData.email"
            required
            placeholder="Email"
            class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-2">
            Contact Number<span class="text-red-500">*</span>
          </label>
          <input
            type="tel"
            v-model="formData.contact_number"
            required
            placeholder="Contact Number"
            class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <!-- Interested Country -->
      <div>
        <label class="block text-gray-700 font-semibold mb-3">
          Interested Country
        </label>
        <div class="space-y-2">
          <div class="flex items-center">
            <input
              type="radio"
              id="australia"
              value="Australia"
              v-model="formData.country"
              class="w-4 h-4 text-blue-600"
            />
            <label for="australia" class="ml-3 text-gray-700 cursor-pointer"
              >Australia</label
            >
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="usa"
              value="USA"
              v-model="formData.country"
              class="w-4 h-4 text-blue-600"
            />
            <label for="usa" class="ml-3 text-gray-700 cursor-pointer"
              >USA</label
            >
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="uk"
              value="UK"
              v-model="formData.country"
              class="w-4 h-4 text-blue-600"
            />
            <label for="uk" class="ml-3 text-gray-700 cursor-pointer">UK</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="canada"
              value="Canada"
              v-model="formData.country"
              class="w-4 h-4 text-blue-600"
            />
            <label for="canada" class="ml-3 text-gray-700 cursor-pointer"
              >Canada</label
            >
          </div>
        </div>
      </div>

      <!-- Preferred Timing and Branch -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-700 font-semibold mb-2">
            Preferred Timing<span class="text-red-500">*</span>
          </label>
          <select
            v-model="formData.timing"
            required
            class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select Timing</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Weekend">Weekend</option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 font-semibold mb-2">
            Select your Nearest Branch<span class="text-red-500">*</span>
          </label>
          <select
            v-model="formData.branch"
            required
            class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select Branch</option>
            <option value="DELHI OFFICE">DELHI OFFICE</option>
            <option value="AHMEDABAD OFFICE">AHMEDABAD OFFICE</option>
          </select>
        </div>
      </div>

      <!-- Privacy Notice -->
      <div class="bg-yellow-50 border border-yellow-200 p-4 rounded">
        <p class="text-gray-700 text-sm mb-3">
          We will not share any details you provide without your permission:
        </p>
        <div class="space-y-2">
          <div class="flex items-center">
            <input
              type="checkbox"
              id="contact"
              v-model="formData.allow_contact"
              class="w-4 h-4 text-blue-600 rounded"
            />
            <label
              for="contact"
              class="ml-2 text-gray-700 text-sm cursor-pointer"
            >
              Help me build my career by contacting me.
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="checkbox"
              id="terms"
              v-model="formData.agree_terms"
              required
              class="w-4 h-4 text-blue-600 rounded"
            />
            <label
              for="terms"
              class="ml-2 text-gray-700 text-sm cursor-pointer"
            >
              I agree to Grace Terms & privacy policy.
            </label>
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors duration-200 disabled:opacity-50"
      >
        {{ isSubmitting ? "Submitting..." : "SUBMIT" }}
      </button>

      <!-- Success Message -->
      <div
        v-if="successMessage"
        class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded"
      >
        {{ successMessage }}
      </div>

      <!-- Error Message -->
      <div
        v-if="errorMessage"
        class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded"
      >
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "EnrollmentFormIELTS",
  emits: ["close"],
  setup(props, { emit }) {
    const formData = reactive({
      full_name: "",
      email: "",
      contact_number: "",
      country: "Australia",
      timing: "",
      branch: "KATHMANDU OFFICE",
      allow_contact: false,
      agree_terms: false,
    });

    const isSubmitting = ref(false);
    const successMessage = ref("");
    const errorMessage = ref("");

    const handleSubmit = async () => {
      if (!formData.agree_terms) {
        errorMessage.value = "Please agree to the terms & privacy policy";
        return;
      }

      isSubmitting.value = true;
      errorMessage.value = "";
      successMessage.value = "";

      try {
        const response = await fetch(
          '"http://localhost:8000/api/contact/sat/',
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        if (response.ok) {
          const data = await response.json();
          successMessage.value =
            "Thank you! Your IELTS enrollment form has been submitted successfully. We will contact you soon.";

          // Reset form after success
          setTimeout(() => {
            Object.assign(formData, {
              full_name: "",
              email: "",
              contact_number: "",
              country: "Australia",
              timing: "",
              branch: "KATHMANDU OFFICE",
              allow_contact: false,
              agree_terms: false,
            });
            successMessage.value = "";
            emit("close");
          }, 2000);
        } else {
          const errorData = await response.json();
          errorMessage.value =
            errorData.message || "An error occurred. Please try again.";
        }
      } catch (error) {
        errorMessage.value =
          "Network error. Please check your connection and try again.";
        console.error("Form submission error:", error);
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      formData,
      isSubmitting,
      successMessage,
      errorMessage,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
input[type="text"],
input[type="email"],
input[type="tel"],
select {
  font-size: 16px; /* Prevents zoom on iOS */
}

input[type="radio"],
input[type="checkbox"] {
  cursor: pointer;
}

label {
  user-select: none;
}
</style>
