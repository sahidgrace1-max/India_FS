<template>
  <div>
    <!-- Page Title -->
    <h2
      ref="title"
      class="text-4xl font-extrabold text-center text-blue-900 mb-4 fade-section"
    >
      OUR SERVICES
    </h2>
    <div class="h-1 w-64 bg-green-600 mx-auto mb-12"></div>

    <!-- Services List -->
    <div
      v-for="(service, idx) in services"
      :key="service.title"
      ref="sections"
      class="flex flex-col md:flex-row items-stretch gap-8 mb-16 fade-section"
      :class="[
        idx % 2 === 1 ? 'md:flex-row-reverse slide-right' : 'slide-left',
      ]"
    >
      <!-- Image -->
      <div class="flex-1 flex justify-center items-center">
        <img
          :src="service.img"
          :alt="service.title"
          class="rounded-lg shadow-lg w-full h-full object-cover zoom-img"
          style="min-height: 400px; max-height: 500px"
        />
      </div>

      <!-- Content -->
      <div
        class="flex-1 bg-blue-50 px-8 pt-4 pb-8 rounded-lg flex flex-col justify-start h-full"
      >
        <div class="text-3xl font-bold mb-4">{{ service.title }}</div>
        <p
          class="text-gray-700 leading-relaxed text-justify overflow-y-auto"
          style="text-align: justify"
        >
          {{ service.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/image.png";

const serviceData = [
  {
    title: "Abroad Studies",
    img: image,
    desc: `Since our establishment in 2006, we have been serving as a reliable bridge connecting students of Nepal with reputable education providers across the globe. Our mission has always been to deliver quality educational services to aspiring graduates who wish to pursue their studies abroad. Built on strong values of conviction, reliability, and unwavering commitment, we continuously strive to support students at every step of their academic journey.

Over the years, we have successfully guided countless students toward suitable and rewarding educational destinations that align with their academic goals, career aspirations, and personal interests. Our top-notch services, transparent and honest counseling, and warm, student-friendly environment have played a vital role in building long-term relationships with students and their families. As a result, we have earned significant respect, credibility, and trust within the education consultancy industry, and we remain dedicated to upholding these standards in everything we do.
`,
  },
  {
    title: "Test Preparation",
    img: image,
    desc: `When it comes to studying abroad, a language proficiency test is one of the essentials. Hence to make the students capable of the requisite, we offer classroom-based training for IELTS, TOEFL, PTE, SAT, GRE, and GMAT. We provide comprehensive and result-oriented coaching with personalized attention and flexibility of timings. Well-researched materials, quality instructions, updated study materials and books at our academic library, a range of mock tests, and a professional instructor are a few reasons why more than thousands of students enroll with us to prepare and secure a better score for their tests.`,
  },
  {
    title: "Scholarship Assessment Guidance",
    img: image,
    desc: `Education providers allocate various scholarships, bursaries, and stipends for international students with higher academic percentages or grades, English proficiency tests, and other tests – SAT, GRE, and GMAT. For students with excellent academic records and high English proficiency test scores, we guide them on scholarships provided by different education providers and what they are eligible. This wide range of scholarships is helpful for students in choosing their best-fit education provider. 

As an education consultant agency, we always have to take one step ahead and know what different education providers are offering so that our students benefit from these offers. Given our longevity of service in this industry, we have better knowledge about the requirement and comprehensive information about various scholarships offered by different education providers that help us provide excellent scholarship guidance with the best learning options to our students.`,
  },
  {
    title: "University / College Presentations",
    img: image,
    desc: `Getting to know different education providers is vital in choosing the right school for a student. We help organize introductory events with various education providers where students can interact with a representative from a specific school. The session is great as it provides students a platform to have one-on-one interaction, and learn about the educational environment and regulations of the college, their curriculum, assignments, and exam modes before attending their orientations which helps them prepare accordingly.`,
  },
  {
    title: "Monthly Readable Newsletter",
    img: image,
    desc: `For our students who are in touch with us, we send them our monthly readable newsletter via an electronic mailing system. The newsletter contains valuable information regarding abroad immigration policy changes and notifies them about future events, different programs, admission procedure updates, and the benefits of studying abroad.`,
  },
  {
    title: "Pre-departure Sessions",
    img: image,
    desc: `This session is for students who have already secured their visas which we host throughout the year. It covers all the information regarding how students can start their new life in a new country, help them navigate personal and cultural growth opportunities, and provide intel about all the dos and don’ts of someone with a student visa in a particular country.`,
  },
  {
    title: "Monthly Group Advising Sessions",
    img: image,
    desc: `We organize a monthly session where we focus on providing expert advice on different careers. The session discusses the outcomes of studying a specific course, its prerequisites for studying abroad, admission requirements, the application procedure, costs, grant of scholarships, and standardized tests for meeting the further requirement. Attending the sessions helps students explore their future scope and prepare them for the future.`,
  },
  {
    title: "Library Services",
    img: image,
    desc: `We provide a wide range of standardized tests preparation materials. These facilities are available at the modern library. Leaflets, brochures, handbooks & other publications from universities / colleges from different countries are available to help students navigate their study abroad choices. Besides that, we also have different genres of books available to help students improve their reading skills and those who simply enjoy reading.`,
  },
];

export default {
  name: "OurServicesList",
  props: {
    services: {
      type: Array,
      default: () => serviceData,
    },
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    // Observe title
    if (this.$refs.title) {
      observer.observe(this.$refs.title);
    }

    // Observe sections
    this.$refs.sections.forEach((section) => {
      observer.observe(section);

      const img = section.querySelector(".zoom-img");
      if (img) observer.observe(img);
    });
  },
};
</script>

<style scoped>
/* Base hidden state */
.fade-section {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

/* When visible */
.fade-section.show {
  opacity: 1;
  transform: translateY(0);
}

/* Slide directions */
.slide-left {
  transform: translateX(-60px);
}

.slide-right {
  transform: translateX(60px);
}

.slide-left.show,
.slide-right.show {
  transform: translateX(0);
}

/* Image zoom */
.zoom-img {
  transform: scale(1.05);
  transition: transform 1s ease;
}

.zoom-img.show {
  transform: scale(1);
}
</style>
