<template>
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Side - Image -->
        <div class="flex justify-center">
          <img
            src="@/assets/gmat.png"
            alt="GMAT Study"
            class="rounded-lg shadow-lg w-full h-full object-cover"
            style="min-height: 400px; max-height: 500px"
          />
        </div>

        <!-- Right Side - Content -->
        <div class="flex flex-col justify-start space-y-4">
          <h2 class="text-4xl font-bold text-gray-900 mb-2">What is GMAT?</h2>

          <p class="text-gray-800 leading-relaxed text-lg">
            The GMAT (Graduate Management Admission Test) is a standardized test
            required by most business schools to measure an applicant’s academic
            ability. It evaluates aptitude in mathematics and English language,
            providing a reliable benchmark for MBA admissions worldwide.
          </p>

          <p class="text-gray-800 leading-relaxed text-lg">
            The GMAT consists of three main sections: Analytical Writing
            Assessment, Verbal Ability, and Quantitative Reasoning. The maximum
            score achievable is 800, and scores are valid for five years.
          </p>

          <p class="text-gray-800 leading-relaxed text-lg">
            The exam is primarily computer-based, although in regions with
            limited computer access, a paper-based version may be offered.
          </p>

          <p class="text-gray-800 leading-relaxed text-lg">
            Business schools widely use GMAT scores to assess readiness for MBA
            programs. It helps institutions evaluate applicants fairly and
            provides a global standard for comparing candidates.
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
