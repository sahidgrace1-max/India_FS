<template>
  <footer class="bg-gray-900 text-white pt-10 pb-4 font-sans">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo & App Download -->
      <div class="flex flex-col space-y-6">
        <img
          src="@/assets/logo.png"
          alt="Grace International Logo"
          class="w-44 mb-2"
        />
      </div>
      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4">QUICK LINKS</h3>
        <ul class="space-y-2">
          <li>
            <router-link to="/" class="hover:text-green-400 transition">
              Events
            </router-link>
          </li>

          <li>
            <router-link to="/about" class="hover:text-green-400 transition">
              Latest News
            </router-link>
          </li>

          <li>
            <router-link
              to="/destinations/australia"
              class="hover:text-green-400 transition"
            >
              Explore Countries
            </router-link>
          </li>

          <li>
            <router-link
              to="/university/australia"
              class="hover:text-green-400 transition"
            >
              Australian Universities
            </router-link>
          </li>

          <li>
            <router-link
              to="/scholarships"
              class="hover:text-green-400 transition"
            >
              Scholarships
            </router-link>
          </li>

          <li>
            <router-link
              to="/our-services"
              class="hover:text-green-400 transition"
            >
              Vacancy
            </router-link>
          </li>
        </ul>
      </div>
      <!-- Offices 1 -->
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold">HEAD OFFICE</h3>
          <p class="text-sm">New Baneshwor, Kathmandu, Nepal.</p>
          <p class="text-sm">Email: enquiry@grace.edu.np</p>
          <p class="text-sm">Call Us: (01) 4796880 / (01)4796881</p>
        </div>
        <div>
          <h3 class="font-semibold">CORPORATE OFFICE</h3>
          <p class="text-sm">16 Newport Avenue, Williams Landing, VIC 3027</p>
          <p class="text-sm">Email: business@graceintlgroup.com</p>
          <p class="text-sm">Call Us: +61 (03) 7001 9370</p>
        </div>
        <div>
          <h3 class="font-semibold">Course link</h3>
          <p class="text-sm">Course</p>
        </div>
      </div>
      <!-- Offices 2 -->
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold">INDIA OFFICE</h3>
          <p class="text-sm">Email: enquiry.in@graceintlgroup.com</p>
          <p class="text-sm">Call Us: +91-(0)11-41070020</p>
        </div>
        <div>
          <h3 class="font-semibold">KENYA OFFICE</h3>
          <p class="text-sm">Email: admission.ke@graceintlgroup.com</p>
          <p class="text-sm">Call Us: +254 719-231 999</p>
        </div>
        <div>
          <h3 class="font-semibold">BANGLADESH OFFICE</h3>
          <p class="text-sm">Email: director.bangladesh@graceintlgroup.com</p>
          <p class="text-sm">Call Us: +92 (335) 5441602</p>
        </div>
        <div>
          <h3 class="font-semibold">Google tag Manager</h3>
        </div>
      </div>
    </div>
    <div
      class="border-t border-gray-800 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4"
    >
      <span class="text-sm mb-2 md:mb-0">
        Copyright © 2023. Grace International. All Rights Reserved. Developed
        with <span class="text-red-500">♥</span> by
        <a href="#" class="text-green-400 hover:underline">Technorio</a>
      </span>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-green-400"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a href="#" class="hover:text-green-400"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a href="#" class="hover:text-green-400"
          ><i class="fab fa-pinterest-p"></i
        ></a>
        <a href="#" class="hover:text-green-400"
          ><i class="fab fa-whatsapp"></i
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Fotter",
};
</script>
