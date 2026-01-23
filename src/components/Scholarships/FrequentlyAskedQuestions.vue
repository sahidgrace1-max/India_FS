<template>
  <div class="relative min-h-[500px] p-5 w-full">
    <div class="flex flex-row gap-10 w-full justify-end max-w-7xl mx-auto">
      <div
        class="bg-gray-100 flex-1.2 px-8 py-12 rounded-sm border-b-2 border-green-500 flex flex-col justify-center min-w-[400px] max-w-[600px]"
      >
        <h2 class="text-2xl font-bold mb-4">Contact For Scholarship</h2>
        <p class="mb-6 text-gray-700">
          We are open on Monday – Saturday at 9am and 7pm, except on holidays.
        </p>
        <div class="text-base text-gray-900 space-y-2">
          <strong>Grace International (Head Office)</strong>
          <div>
            <span class="font-semibold text-gray-900">Address:</span>
            Office No. 505, 6th Floor, Westend Mall, Near District Centre, Janak
            Puri (West), New Delhi, 110058, India
          </div>
          <div>
            <span class="font-semibold text-gray-900">Phone:</span> 8750040975
          </div>
          <div>
            <span class="font-semibold text-gray-900">Email:</span>
            enquiry.in@graceintlgroup.com
          </div>
        </div>
      </div>
      <div class="flex-2 pt-6">
        <h2 class="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div class="flex flex-col gap-4">
          <div
            class="bg-gray-100 rounded px-6 py-4 cursor-pointer transition-shadow border-b-2 border-gray-200 hover:shadow-md"
            v-for="(faq, idx) in faqs"
            :key="idx"
          >
            <div
              class="flex justify-between items-center text-green-500 font-semibold text-lg"
              @click="toggle(idx)"
            >
              <span>{{ faq.question }}</span>
              <span class="text-2xl font-bold select-none">+</span>
            </div>
            <div
              v-if="faq.open"
              class="mt-3 text-gray-900 font-normal text-base"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed top-12 right-0 bg-blue-700 text-white py-3 px-2 rounded-l-md font-medium text-base z-50 cursor-pointer shadow-md writing-vertical"
    >
      <!-- <span
        class="block"
        style="writing-mode: vertical-rl; text-orientation: mixed"
        >Free Counselling</span
      > -->
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const faqs = reactive([
  {
    question: "What Is A Study Abroad Scholarship?",
    answer:
      "A study abroad scholarship is financial aid awarded to students to help cover the costs of studying in another country.",
    open: false,
  },
  {
    question:
      "How Does Grace International Help Students Get Scholarships For Studying Abroad?",
    answer:
      "Grace International assists students by providing guidance, resources, and support throughout the scholarship application process.",
    open: false,
  },
  {
    question: "What Are The Benefits Of Securing A Study Abroad Scholarship?",
    answer:
      "Benefits include financial support, recognition of academic merit, and enhanced educational opportunities.",
    open: false,
  },
  {
    question:
      "How Can Students Know If They Are Eligible For Study Abroad Scholarships?",
    answer:
      "Eligibility criteria vary by scholarship, but generally include academic achievement, extracurricular involvement, and financial need.",
    open: false,
  },
]);

function toggle(idx) {
  faqs[idx].open = !faqs[idx].open;
}
</script>
