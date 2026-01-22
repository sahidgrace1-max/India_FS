<template>
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Side - Image -->
        <div class="flex justify-center">
          <img
            src="@/assets/toefl.png"
            alt="TOEFL Study"
            class="rounded-lg shadow-lg w-full h-full object-cover"
            style="min-height: 400px; max-height: 500px"
          />
        </div>

        <!-- Right Side - Content -->
        <div class="flex flex-col justify-start space-y-4">
          <h2 class="text-4xl font-bold text-gray-900 mb-2">What is it?</h2>

          <p class="text-gray-800 leading-relaxed text-lg">
            The TOEFL iBT® test, administered via the Internet, is an important
            part of your journey to study in an English-speaking country. It
            measures your ability to use and understand English at the
            university level, combining listening, reading, speaking, and
            writing skills to perform academic tasks. More than 30 million
            people worldwide have taken the TOEFL® test, with English skill
            levels ranging from Intermediate to Advanced.
          </p>

          <h2 class="text-2xl font-semibold text-gray-900 mt-4">
            Who is it for?
          </h2>
          <ul
            class="list-disc list-inside text-gray-800 leading-relaxed text-lg space-y-1"
          >
            <li>
              Students planning to study at a higher education institution
            </li>
            <li>English-language learning program admissions and exit</li>
            <li>Scholarship and certification candidates</li>
            <li>English-language learners who want to track their progress</li>
            <li>Students and workers applying for visas</li>
          </ul>

          <h2 class="text-2xl font-semibold text-gray-900 mt-4">Why TOEFL?</h2>
          <ul
            class="list-disc list-inside text-gray-800 leading-relaxed text-lg space-y-1"
          >
            <li>Scores Help You Stand Out</li>
            <li>Rates Speaking More Fairly</li>
            <li>Measures Academic Skills</li>
            <li>More Choices & More Convenient</li>
          </ul>
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
