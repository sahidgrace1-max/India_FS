<template>
  <div class="w-full bg-white py-20 min-h-[60vh] flex items-center">
    <div class="max-w-6xl mx-auto px-4 w-full">
      <h1
        class="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-12 tracking-widest drop-shadow-2xl uppercase"
      >
        DELHI OFFICE DIRECTOR'S MESSAGE
      </h1>
      <div
        class="flex flex-col md:flex-row items-stretch justify-center gap-10 animate-fade-in h-full"
      >
        <!-- Photo Side -->
        <div class="w-full md:w-1/2 flex justify-center items-stretch">
          <div
            class="bg-blue-100 overflow-hidden w-full h-full flex items-center justify-center min-h-[400px]"
          >
            <img
              src="@/assets/image1.png"
              alt="Rajesh Kumar Sharma"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <!-- Message Side -->
        <div
          class="w-full md:w-1/2 flex flex-col items-center md:items-start h-full"
        >
          <div class="relative w-full h-full flex-1 flex flex-col">
            <div
              class="absolute -inset-1 bg-gradient-to-br from-blue-400/10 via-blue-100/10 to-blue-900/5 blur-lg"
            ></div>
            <div
              class="relative p-6 md:p-8 h-full flex flex-col justify-between"
            >
              <p
                class="text-blue-900 text-base md:text-lg text-justify leading-relaxed font-medium"
              >
                Welcome to Grace International Delhi! As the Director of our
                Delhi operations, I am proud to serve the vibrant student
                community of North India. Delhi, being the educational hub of
                India with prestigious institutions like Delhi University, JNU,
                and numerous other colleges, produces some of the brightest
                minds in the country.<br /><br />
                Our Delhi office understands the aspirations of students from
                Delhi, NCR, Punjab, Haryana, and surrounding regions. We
                recognize the unique challenges and opportunities that North
                Indian students face when planning their international education
                journey.<br /><br />
                With our prime location in Connaught Place and excellent metro
                connectivity, we ensure that students from all parts of NCR can
                easily access our services. Our team speaks Hindi, English, and
                Punjabi, making communication comfortable for all our
                clients.<br /><br />
                Let us help you transform your dreams into reality. Your success
                is our mission.
              </p>
              <h4
                class="text-blue-800 text-2xl font-bold mt-8 mb-1 drop-shadow-lg text-center md:text-left"
              >
                Rajesh Kumar Sharma
              </h4>
              <p
                class="text-blue-500 italic text-lg mb-2 text-center md:text-left"
              >
                Director, Grace International Delhi
              </p>
              <div
                class="w-24 h-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 rounded-full mt-2 mb-2 mx-auto md:mx-0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectorMessageSection",
};
</script>

<style scoped></style>
