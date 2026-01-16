<template>
  <div class="w-full bg-white py-20 min-h-[60vh] flex items-center">
    <div class="max-w-6xl mx-auto px-4 w-full">
      <h1
        class="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-12 tracking-widest drop-shadow-2xl uppercase"
      >
        {{ selectedBranch.toUpperCase() }} OFFICE DIRECTOR'S MESSAGE
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
              :src="directorData[selectedBranch].image"
              :alt="directorData[selectedBranch].name"
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
                v-html="directorData[selectedBranch].message"
              ></p>
              <h4
                class="text-blue-800 text-2xl font-bold mt-8 mb-1 drop-shadow-lg text-center md:text-left"
              >
                {{ directorData[selectedBranch].name }}
              </h4>
              <p
                class="text-blue-500 italic text-lg mb-2 text-center md:text-left"
              >
                Director, Grace International {{ selectedBranch }}
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

<script setup>
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch } = useBranchStore();

const directorData = {
  Delhi: {
    name: "Rajesh Kumar Sharma",
    image: new URL("@/assets/image1.png", import.meta.url).href,
    message: `Welcome to Grace International Delhi! As the Director of our Delhi operations, I am proud to serve the vibrant student community of North India. Delhi, being the educational hub of India with prestigious institutions like Delhi University, JNU, and numerous other colleges, produces some of the brightest minds in the country.<br /><br />
Our Delhi office understands the aspirations of students from Delhi, NCR, Punjab, Haryana, and surrounding regions. We recognize the unique challenges and opportunities that North Indian students face when planning their international education journey.<br /><br />
With our prime location in Connaught Place and excellent metro connectivity, we ensure that students from all parts of NCR can easily access our services. Our team speaks Hindi, English, and Punjabi, making communication comfortable for all our clients.<br /><br />
Let us help you transform your dreams into reality. Your success is our mission.`,
  },
  Mumbai: {
    name: "Vikram Patel",
    image: new URL("@/assets/image1.png", import.meta.url).href,
    message: `Welcome to Grace International Mumbai! As the Director of our Mumbai office, I am honored to guide students from the financial capital of India towards their international education dreams. Mumbai, with its cosmopolitan culture and world-class educational institutions, produces ambitious and globally-minded students.<br /><br />
Our Mumbai office specializes in understanding the unique aspirations of students from Maharashtra and Western India. We pride ourselves on our strong network with universities worldwide and our ability to match students with programs that align with their career goals.<br /><br />
Located in the heart of Mumbai's business district, our office is easily accessible and staffed with multilingual counselors who understand the local culture and education system. We provide personalized guidance every step of the way.<br /><br />
Your journey to global excellence starts here. Let's make it happen together.`,
  },
  Bangalore: {
    name: "Suresh Reddy",
    image: new URL("@/assets/image1.png", import.meta.url).href,
    message: `Welcome to Grace International Bangalore! As the Director of our Bangalore operations, I am excited to serve students from India's technology capital. Bangalore, with its cutting-edge IT industry and premier educational institutions like IISc and IIMs, creates an environment of innovation and academic excellence.<br /><br />
Our Bangalore office specializes in guiding tech-savvy students who aspire to pursue STEM programs abroad. We understand the unique requirements of engineering, computer science, and technology students and have strong partnerships with universities that excel in these fields.<br /><br />
With deep connections to Bangalore's startup ecosystem and IT industry, we provide not just educational guidance but also career pathway insights. Our team of experienced counselors is dedicated to helping you achieve your international education goals.<br /><br />
Innovation meets opportunity at our Bangalore office. Let's build your future together.`,
  },
  Kolkata: {
    name: "Subrata Banerjee",
    image: new URL("@/assets/image1.png", import.meta.url).href,
    message: `Welcome to Grace International Kolkata! As the Director of our Kolkata office, I am privileged to serve the intellectual capital of Eastern India. Kolkata's rich academic heritage, with institutions like Presidency University and Jadavpur University, has always produced scholars and thinkers of the highest caliber.<br /><br />
Our Kolkata office is deeply connected to the educational landscape of Bengal and Eastern India. We understand the academic traditions, aspirations, and cultural nuances of students from this region. Our counselors provide guidance in Bengali, Hindi, and English, ensuring comfortable communication.<br /><br />
With years of experience in international education consulting, we have helped thousands of students from Kolkata realize their dreams of studying abroad. Our personalized approach ensures that each student receives attention tailored to their unique circumstances.<br /><br />
Your academic journey to excellence begins here. Let us guide you every step of the way.`,
  },
};
</script>

<style scoped></style>
