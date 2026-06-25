<template>
  <section ref="sectionRef" class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white font-poppins py-16 lg:py-24">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      <div class="absolute top-1/4 left-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24">
      
      <div
        class="w-full max-w-[380px] lg:max-w-[420px] relative transition-all duration-1000 ease-out transform flex-shrink-0"
        :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
      >
        <div class="relative w-full aspect-[4/5] rounded-xl shadow-2xl border border-white bg-white">
          <div class="absolute top-16 -left-8 lg:-left-12 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20 animate-float-slow">
            <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <p class="text-[10px] font-extrabold text-blue-950 uppercase tracking-wide leading-tight">Global Reach</p>
              <p class="text-[9px] text-slate-500 font-medium leading-tight mt-0.5">10+ Countries</p>
            </div>
          </div>

          <div class="absolute bottom-28 -right-6 lg:-right-10 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20 animate-float-delayed">
            <div class="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p class="text-[10px] font-extrabold text-blue-950 uppercase tracking-wide leading-tight">Expert Support</p>
              <p class="text-[9px] text-slate-500 font-medium leading-tight mt-0.5">Free Counselling</p>
            </div>
          </div>

          <div class="w-full h-full rounded-xl overflow-hidden relative bg-slate-100">
            <img
              src="@/assets/image1.png"
              alt="Students graduating"
              class="w-full h-full object-cover"
            />
            
            <div class="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[150%] h-[55%] bg-[#0f2c4b] rounded-t-[50%] z-10 flex flex-col justify-center items-center px-12 pt-8 pb-4 text-center">
              <h3 class="text-white text-xl sm:text-2xl font-extrabold leading-tight mb-2 max-w-[280px]">
                Interested in studying abroad?
              </h3>
              <p class="text-blue-100 text-xs sm:text-sm font-medium max-w-[260px] leading-snug">
                Enter your details and we'll call you back when it suits you
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full max-w-[480px] relative transition-all duration-1000 ease-out delay-200 transform flex-shrink-0"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
      >
        <div class="w-full bg-white/95 backdrop-blur-sm border border-blue-50 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 sm:p-8 lg:p-10 relative">
          <div class="absolute top-6 right-6 w-2.5 h-2.5 bg-green-500 rounded-full"></div>

          <div class="relative z-10">
            <div class="mb-8">
              <div class="flex items-center text-green-600 font-extrabold uppercase tracking-widest text-[10px] mb-2">
                <span class="w-3.5 h-[3px] bg-green-600 rounded-full mr-2"></span>
                Get In Touch
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f2c4b] leading-tight">
                Start Your 
                <span class="relative inline-block">
                  Journey
                  <span class="absolute -bottom-1 left-0 w-full h-[3px] bg-green-600 rounded-full"></span>
                </span>
              </h2>
            </div>

            <transition name="fade-slide">
              <div
                v-if="errorMessage"
                class="mb-5 bg-red-50 border border-red-100 text-red-600 px-3 py-2.5 rounded-lg text-xs font-semibold flex items-start"
              >
                <svg class="w-4 h-4 mr-1.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>{{ errorMessage }}</span>
              </div>
            </transition>

            <transition name="fade-slide">
              <div
                v-if="successMessage"
                class="mb-5 bg-green-50 border border-green-100 text-green-700 px-3 py-2.5 rounded-lg text-xs font-semibold flex items-start"
              >
                <svg class="w-4 h-4 mr-1.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ successMessage }}</span>
              </div>
            </transition>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
              <div
                v-for="(field, index) in formFields"
                :key="index"
                class="w-full"
                :class="{'sm:col-span-2': field.fullWidth}"
              >
                <label class="block text-slate-700 font-semibold text-[11px] mb-1.5 ml-1">
                  {{ field.label }}
                  <span v-if="field.required" class="text-red-500">*</span>
                </label>

                <div v-if="field.type === 'input'">
                  <input
                    v-model="formData[field.model]"
                    :type="field.attrs.type || 'text'"
                    class="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition-all duration-300 hover:border-blue-300 shadow-sm"
                    :placeholder="`Enter ${field.label.toLowerCase().replace('*', '').trim()}`"
                  />
                </div>

                <div v-else-if="field.type === 'select'" class="relative">
                  <select
                    v-model="formData[field.model]"
                    class="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-800/30 focus:border-blue-800 transition-all duration-300 hover:border-blue-300 shadow-sm"
                  >
                    <option value="" disabled>Select {{ field.label.replace('*', '').trim() }}</option>
                    <option
                      v-for="option in field.options"
                      :key="option"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <button
                @click="handleSubmit"
                :disabled="isSubmitting"
                class="w-full flex items-center justify-center bg-[#2942a6] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-blue-900/20 transition-all duration-200 transform hover:-translate-y-0.5 hover:bg-[#1f3383] hover:shadow-xl active:bg-blue-900 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span v-if="!isSubmitting" class="flex items-center gap-1.5 tracking-wide">
                  Submit Application
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span v-else class="flex items-center gap-2">
                  <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";
import api from "@/utils/api";

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

const formFields = [
  {
    label: "Your Name",
    model: "name",
    type: "input",
    attrs: { type: "text", required: true },
    required: true,
    fullWidth: true,
  },
  {
    label: "Your Email",
    model: "email",
    type: "input",
    attrs: { type: "email", required: true },
    required: true,
    fullWidth: false,
  },
  {
    label: "Contact Number",
    model: "contact",
    type: "input",
    attrs: { type: "tel", required: true },
    required: true,
    fullWidth: false,
  },
  {
    label: "Interested Course",
    model: "course",
    type: "input",
    attrs: { type: "text", required: true },
    required: true,
    fullWidth: true,
  },
  {
    label: "Preferred Intake",
    model: "intake",
    type: "select",
    attrs: { required: true },
    required: true,
    options: ["Jan 2026", "May 2026", "Sep 2026"],
    fullWidth: false,
  },
  {
    label: "Budget per year",
    model: "budget",
    type: "select",
    attrs: { required: true },
    required: true,
    options: ["Less than 20 Lakhs", "20-40 Lakhs", "More than 40 Lakhs"],
    fullWidth: false,
  },
  {
    label: "Your City",
    model: "city",
    type: "input",
    attrs: { type: "text", required: true },
    required: true,
    fullWidth: true,
  },
];

const handleSubmit = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  const requiredFields = ["name", "email", "contact", "course", "city"];
  for (const key of requiredFields) {
    if (!formData[key].trim()) {
      errorMessage.value = "Please fill in all required fields.";
      return;
    }
  }

  isSubmitting.value = true;

  try {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.contact,
      course: formData.course,
      intake: formData.intake,
      destination: "General Inquiry",
      notes: `Budget: ${formData.budget} | City: ${formData.city}`,
    };

    const response = await api.post("/inquiries", payload);

    if (response.data.success) {
      successMessage.value = "Application submitted successfully!";

      Object.keys(formData).forEach((k) => {
        formData[k] =
          k === "intake"
            ? "Jan 2026"
            : k === "budget"
              ? "Less than 20 Lakhs"
              : "";
      });
    }
  } catch (err) {
    console.error("Submission error:", err);
    errorMessage.value =
      err.response?.data?.message ||
      "Failed to send the form. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (observer) observer.disconnect();
    }
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}

@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.animate-float-slow {
  animation: floatSlow 5s ease-in-out infinite;
}

@keyframes floatDelayed {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-float-delayed {
  animation: floatDelayed 4.5s ease-in-out infinite 1s;
}

@keyframes rotateDashed {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>