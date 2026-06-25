<template>
  <section ref="sectionRef" class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
      <div class="absolute top-1/4 right-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
      <div 
        class="text-center mb-12 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
          <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
          Admission Inquiry
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-blue-900">
          Start Your 
          <span class="relative inline-block">
            Application
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
        </h2>
      </div>

      <div 
        class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
      >
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-slate-700 font-semibold text-sm mb-2 ml-1">
              Your Full Name<span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              v-model="formData.full_name"
              required
              placeholder="Enter your full name"
              class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition-all duration-300 shadow-sm"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-slate-700 font-semibold text-sm mb-2 ml-1">
                Email<span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                v-model="formData.email"
                required
                placeholder="email@example.com"
                class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label class="block text-slate-700 font-semibold text-sm mb-2 ml-1">
                Contact Number<span class="text-red-500">*</span>
              </label>
              <input
                type="tel"
                v-model="formData.contact_number"
                required
                placeholder="+91 XXXXX XXXXX"
                class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          <div>
            <label class="block text-slate-700 font-semibold text-sm mb-3 ml-1">Interested Country</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div v-for="country in ['Australia', 'USA', 'UK', 'Canada']" :key="country" class="relative">
                <input
                  type="radio"
                  :id="country"
                  :value="country"
                  v-model="formData.country"
                  class="peer sr-only"
                />
                <label 
                  :for="country" 
                  class="flex items-center justify-center py-3 px-2 border border-slate-200 rounded-xl cursor-pointer bg-white transition-all peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 font-semibold text-sm hover:border-blue-300"
                >
                  {{ country }}
                </label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-slate-700 font-semibold text-sm mb-2 ml-1">
                Preferred Timing<span class="text-red-500">*</span>
              </label>
              <select
                v-model="formData.timing"
                required
                class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition-all duration-300 shadow-sm"
              >
                <option value="" disabled>Select Timing</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Weekend">Weekend</option>
              </select>
            </div>
            <div>
              <label class="block text-slate-700 font-semibold text-sm mb-2 ml-1">
                Nearest Branch<span class="text-red-500">*</span>
              </label>
              <select
                v-model="formData.branch"
                required
                class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition-all duration-300 shadow-sm"
              >
                <option value="" disabled>Select Branch</option>
                <option value="DELHI OFFICE">DELHI OFFICE</option>
                <option value="AHMEDABAD OFFICE">AHMEDABAD OFFICE</option>
              </select>
            </div>
          </div>

          <div class="bg-blue-50/50 border border-blue-100 p-4 rounded-xl space-y-3">
            <div class="flex items-center">
              <input type="checkbox" id="contact" v-model="formData.allow_contact" class="w-4 h-4 rounded text-blue-800 focus:ring-blue-800" />
              <label for="contact" class="ml-3 text-slate-700 text-xs font-medium cursor-pointer">Help me build my career by contacting me.</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="terms" v-model="formData.agree_terms" required class="w-4 h-4 rounded text-blue-800 focus:ring-blue-800" />
              <label for="terms" class="ml-3 text-slate-700 text-xs font-medium cursor-pointer">I agree to Grace Terms & privacy policy.</label>
            </div>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
          >
            {{ isSubmitting ? "Submitting..." : "SUBMIT APPLICATION" }}
          </button>

          <p v-if="successMessage" class="text-green-600 text-sm font-semibold text-center mt-4">{{ successMessage }}</p>
          <p v-if="errorMessage" class="text-red-600 text-sm font-semibold text-center mt-4">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";
import api from "@/utils/api";

const formData = reactive({
  full_name: "",
  email: "",
  contact_number: "",
  country: "",
  timing: "",
  branch: "",
  allow_contact: false,
  agree_terms: false,
  test: "GMAT",
});

const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const handleSubmit = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  if (
    !formData.full_name.trim() ||
    !formData.email.trim() ||
    !formData.contact_number.trim() ||
    !formData.timing ||
    !formData.branch ||
    !formData.agree_terms
  ) {
    errorMessage.value = "Please fill all required fields and accept terms.";
    return;
  }

  isSubmitting.value = true;

  try {
    const payload = {
      name: formData.full_name,
      email: formData.email,
      phone: formData.contact_number,
      destination: formData.country || "Not specified",
      course: `${formData.test} Preparation`,
      intake: formData.timing,
      notes: `Branch: ${formData.branch} | Allow Contact: ${formData.allow_contact ? "Yes" : "No"}`,
    };

    const response = await api.post("/inquiries", payload);

    if (response.data.success) {
      successMessage.value = "Form submitted successfully! Our team will contact you soon.";
      Object.keys(formData).forEach((k) => {
        if (k === 'test') return;
        formData[k] = k === 'allow_contact' || k === 'agree_terms' ? false : "";
      });
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "Failed to submit form. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (observer) observer.disconnect();
    }
  }, { threshold: 0.1 });

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
@keyframes rotateDashed {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}
</style>