<template>
  <section class="py-16 px-4 md:px-8 lg:px-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Side - Image -->
        <div class="flex justify-center">
          <img
            src="@/assets/pte.png"
            alt="PTE Study"
            class="rounded-lg shadow-lg w-full h-full object-cover"
            style="min-height: 400px; max-height: 500px"
          />
        </div>

        <!-- Right Side - Content -->
        <div class="flex flex-col justify-start space-y-4">
          <h2 class="text-4xl font-bold text-gray-900 mb-2">What is it?</h2>

          <p class="text-gray-800 leading-relaxed text-lg">
            The Pearson Test of English Academic (PTE Academic) is an English
            language test designed to assess the readiness of non-native English
            speakers to participate in a university-level English language
            instruction program. Pearson created PTE Academic in response to
            demand from institutions, government, and other organizations for a
            more accurate way of testing non-native English speakers entering
            the English-speaking academic world.
          </p>

          <h2 class="text-4xl font-bold text-gray-900 mb-2 mt-6">
            Who is it for?
          </h2>

          <p class="text-gray-800 leading-relaxed text-lg">
            PTE Academic is a computer-based academic English language test
            aimed at non-native English speakers wanting to study abroad. It
            tests Reading, Writing, Listening, and Speaking. Questions often
            test two skills together, such as listening and reading or reading
            and speaking.
          </p>

          <h2 class="text-4xl font-bold text-gray-900 mb-2 mt-6">
            What countries accept PTE?
          </h2>

          <p class="text-gray-800 leading-relaxed text-lg">
            PTE Academic is recognized by thousands of universities worldwide,
            with the most popular being the UK, Australia, the US, and Canada.
          </p>

          <h2 class="text-4xl font-bold text-gray-900 mb-2 mt-6">
            When can we take the test?
          </h2>

          <p class="text-gray-800 leading-relaxed text-lg">
            PTE tests are usually conducted in three shifts from Monday to
            Friday – Morning, Day, and Evening. There are 2 test centres in
            Kathmandu: British Professional College & AlphaBeta Institute.
            Outside the valley, it is conducted at Chitwan Medical College
            (CMC).
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
