<template>
  <section 
    ref="sectionRef" 
    class="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl transform translate-x-1/4"></div>
      <div class="absolute top-1/3 left-1/4 w-72 h-72 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
      <div class="absolute bottom-1/4 left-10 w-3 h-3 bg-green-500 rounded-full animate-ping-slow hidden sm:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full overflow-hidden line-height-0">
      <svg class="relative block w-full h-[20px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" preserveAspectRatio="none">
        <path d="M1200,0H0V120c150,0,300-20,450-20,300,0,600,40,750,40V0Z" class="fill-blue-50/50"></path>
      </svg>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <div 
          class="order-2 lg:order-1 flex items-center justify-center transition-all duration-1000 ease-out transform"
          :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12']"
        >
          <div class="relative group w-full max-w-md lg:max-w-none">
            <div class="absolute -inset-4 bg-blue-800/10 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              :src="australia4"
              alt="Students Graduation"
              class="relative rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-white min-h-[450px] lg:min-h-[900px] xl:min-h-[1050px]"
            />
            
            <div class="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-blue-50 hidden sm:flex transform hover:-translate-y-1 transition-transform">
              <div class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-xl">
                🎓
              </div>
              <div>
                <p class="text-xs text-green-600 font-bold uppercase tracking-widest">Expert Guide</p>
                <p class="text-sm font-black text-blue-900">20+ Years Expertise</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          class="order-1 lg:order-2 flex flex-col transition-all duration-1000 ease-out delay-200 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
        >
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Your Questions Answered
          </div>

          <h2 class="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 leading-tight">
            FAQs – Study in Australia for 
            <span class="relative inline-block text-green-500">
              Students
              <span class="absolute -bottom-1 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
            </span>
          </h2>

          <div class="space-y-4">
            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-start gap-2">
                <span class="text-green-500 font-extrabold">Q1.</span>
                <span>What are the types of schools in Australia?</span>
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-7">
                Australia has
                <span class="font-semibold text-blue-800">Government Schools</span>
                (operated by state/territory governments) and
                <span class="font-semibold text-blue-800">Non-Government Schools</span>
                (private institutions, often with religious or cultural philosophies). International students pay tuition fees in both types.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-start gap-2">
                <span class="text-green-500 font-extrabold">Q2.</span>
                <span>What is ELICOS and why is it important?</span>
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-7">
                ELICOS courses are English language programs ranging from
                <span class="font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">4 to 48 weeks</span>. They are designed for students needing English proficiency before starting formal studies. Courses include at least 20 hours/week and flexible start dates.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-start gap-2">
                <span class="text-green-500 font-extrabold">Q3.</span>
                <span>How much does it cost to study and live in Australia?</span>
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-7">
                Tuition fees range from
                <span class="font-semibold text-blue-800">AUD 9,000 to 37,000/year</span>
                depending on the course. Living costs start from
                <span class="font-semibold text-blue-800">AUD 29,710/year</span>.
                Accommodation varies from
                <span class="font-semibold text-blue-800">AUD 50–280/week</span>
                depending on the type.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-start gap-2">
                <span class="text-green-500 font-extrabold">Q4.</span>
                <span>Can students work while studying in Australia?</span>
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-7">
                Yes, up to
                <span class="font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">40 hours per fortnight</span>
                during semesters and full-time during scheduled breaks. This helps cover living costs.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-start gap-2">
                <span class="text-green-500 font-extrabold">Q5.</span>
                <span>How does admission and visa process work?</span>
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-7">
                Applications can be submitted directly to universities or via education agents. After acceptance, students receive a Letter of Offer, pay a deposit, and get an
                <span class="font-semibold text-blue-800">eCoE (Electronic Confirmation of Enrolment)</span>. Student visa (Subclass 500) under SSVF allows study and part-time work.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-start gap-2">
                <span class="text-green-500 font-extrabold">Q6.</span>
                <span>What are post-study work and PR opportunities?</span>
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-7">
                Graduates can apply for the
                <span class="font-semibold text-blue-800">Temporary Graduate Visa (Subclass 485)</span>. Duration depends on qualification: 18 months (Graduate Work Stream) or 2–4 years (Post-Study Work Stream). After gaining work experience, skilled migration visas allow applying for PR.
              </p>
            </div>

            <div class="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-start gap-2">
                <span class="text-green-500 font-extrabold">Q7.</span>
                <span>Is English proficiency mandatory?</span>
              </h3>
              <p class="text-slate-700 text-base leading-relaxed pl-7">
                Yes, tests like
                <span class="font-semibold text-blue-800">IELTS, PTE, or TOEFL</span>
                are required for most courses and visa eligibility. Strong scores improve chances for admission and scholarships.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import australia4 from "@/assets/australia4.png";

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
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px"
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
@keyframes rotateDashed {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-rotate-dashed {
  animation: rotateDashed 35s linear infinite;
}
@keyframes pingSlow {
  0% { transform: scale(1); opacity: 1; }
  70%, 100% { transform: scale(2); opacity: 0; }
}
.animate-ping-slow {
  animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>