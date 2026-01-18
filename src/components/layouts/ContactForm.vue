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

          <div>
            <label class="block text-gray-700 font-semibold mb-2">
              Your Name<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="formData.name"
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
              class="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <!-- Replace fake captcha with real reCAPTCHA -->
          <!-- <div>
            <VueRecaptchaV2
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              @verify="onCaptchaVerified"
              @expire="onCaptchaExpired"
            />
          </div> -->

          <button
            @click="handleSubmit"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
// import VueRecaptchaV2 from 'vue3-recaptcha-v2';

const formData = reactive({
  name: "",
  email: "",
  contact: "",
  course: "",
  intake: "Jan 2026",
  budget: "Less than 20 Lakhs",
  city: "",
});

const recaptchaResponse = ref("");

const onCaptchaVerified = (response) => {
  recaptchaResponse.value = response;
};

const onCaptchaExpired = () => {
  recaptchaResponse.value = "";
};

const handleSubmit = () => {
  if (!recaptchaResponse.value) {
    alert("Please complete the reCAPTCHA.");
    return;
  }
  console.log(
    "Form submitted:",
    formData,
    "reCAPTCHA:",
    recaptchaResponse.value,
  );
  alert("Form submitted successfully!");
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
