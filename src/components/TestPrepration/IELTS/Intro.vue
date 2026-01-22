<template>
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Side - Image -->
        <div class="flex justify-center">
          <img
            src="@/assets/ielts.png"
            alt="IELTS Study"
            class="rounded-lg shadow-lg w-full h-full object-cover"
            style="min-height: 400px; max-height: 500px"
          />
        </div>

        <!-- Right Side - Content -->
        <div class="flex flex-col justify-start space-y-4">
          <h2 class="text-4xl font-bold text-gray-900 mb-2">What is it?</h2>

          <p class="text-gray-800 leading-relaxed text-lg">
            IELTS is the International English Language Testing System, the
            world's proven English language test. IELTS was one of the pioneers
            of four skills English language testing over 25 years ago, and
            continues to set the standard for English language testing today.
            IELTS is accepted as evidence of English language proficiency by
            over 9,000 organisations worldwide. Last year, more than 22 million
            tests were taken globally. IELTS is recognised as a secure, valid
            and reliable indicator of true-to-life ability to communicate in
            English for education, immigration and professional accreditation.
          </p>

          <p class="text-gray-800 leading-relaxed text-lg">
            IELTS is jointly owned by British Council, IDP: IELTS Australia and
            Cambridge English Language Assessment through more than 1,000 test
            centres and locations in over 140 countries.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IELTSIntro",
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
  color: #374151;
}
</style>
