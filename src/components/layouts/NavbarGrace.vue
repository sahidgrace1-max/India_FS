<template>
  <!-- Top Info Bar (hidden on small screens) -->
  <div class="bg-blue-700 text-white text-sm w-full hidden md:block">
    <div
      class="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 h-auto md:h-9 py-2 md:py-0 gap-2"
    >
      <div
        class="flex items-center gap-4 whitespace-nowrap text-center md:text-left"
      >
        <!-- /<span>{{ locations[selectedLocation].email }} | {{ locations[selectedLocation].phone }}</span> -->
      </div>
      <div
        class="flex flex-wrap items-center gap-3 md:gap-5 justify-center md:justify-end mt-2 md:mt-0"
      >
        <a href="#" class="hover:underline">Our Team</a>
        <a href="#" class="hover:underline">LOG IN</a>
        <div
          class="relative"
          @mouseenter="handleBranchesDropdownEnter"
          @mouseleave="handleBranchesDropdownLeave"
        >
          <button
            class="hover:underline focus:outline-none flex items-center gap-1"
          >
            <span>{{ selectedBranch }}</span>
            <svg
              class="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-if="showBranchesDropdown"
            class="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white text-gray-800 shadow-xl rounded-lg flex flex-col z-40 py-2"
            style="top: 100%"
          >
            <button
              @click="selectBranch('Delhi')"
              class="hover:bg-gray-100 py-2 px-4 text-left"
              :class="{
                'bg-blue-100 font-semibold': selectedBranch === 'Delhi',
              }"
            >
              Delhi
            </button>
            <button
              @click="selectBranch('Ahmedabad')"
              class="hover:bg-gray-100 py-2 px-4 text-left"
              :class="{
                'bg-blue-100 font-semibold': selectedBranch === 'Ahmedabad',
              }"
            >
              Ahmedabad
            </button>
          </div>
        </div>
        <a href="#" aria-label="Facebook" class="hover:text-gray-200">
          <svg class="inline w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"
            />
          </svg>
        </a>
        <a href="#" aria-label="Instagram" class="hover:text-gray-200">
          <svg class="inline w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.401 3.661 1.375c-.974.974-1.247 2.111-1.305 3.392C2.012 8.332 2 8.741 2 12c0 3.259.012 3.668.07 4.948.058 1.281.331 2.418 1.305 3.392.974.974 2.111 1.247 3.392 1.305C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.418-.331 3.392-1.305.974-.974 1.247-2.111 1.305-3.392.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948-.058-1.281-.331-2.418-1.305-3.392-.974-.974-2.111-1.247-3.392-1.305C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
            />
          </svg>
        </a>
        <button
          class="bg-blue-900 font-bold px-4 py-1.5 rounded-none ml-0 md:ml-2 mt-2 md:mt-0 w-full md:w-auto"
        >
          Schedule an Appointment
        </button>
      </div>
    </div>
  </div>

  <!-- Main Navbar -->
  <header class="bg-white shadow-md border-b border-gray-200 h-24">
    <div
      class="max-w-screen-2xl mx-auto flex items-center px-8 h-full min-h-[96px]"
    >
      <!-- Logo & Brand -->
      <div class="flex items-center gap-6 flex-shrink-0">
        <router-link to="/" class="flex items-center">
          <img
            src="@/assets/gi-logo-gif.gif"
            alt="Grace International Logo"
            class="h-20 w-auto"
          />
        </router-link>
      </div>
      <!-- Navigation Links (Right Side) -->
      <div class="flex items-center justify-end flex-1">
        <nav class="hidden md:flex gap-12 text-lg font-semibold mr-8">
          <router-link
            to="/"
            class="flex items-center gap-2 transition-colors relative group hover:text-green-600"
          >
            <span class="font-sans">Home</span>
            <span
              class="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"
            ></span>
          </router-link>

          <!-- Our Services Link (active state) -->
          <router-link
            to="/our-services"
            class="flex items-center gap-2 transition-colors relative group"
            :class="{ 'text-green-600': $route.path === '/our-services' }"
          >
            <span class="font-sans">Our Services</span>
            <span
              class="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600"
              :class="{
                'scale-x-100': $route.path === '/our-services',
                'scale-x-0 group-hover:scale-x-100':
                  $route.path !== '/our-services',
              }"
              style="transition: transform 0.2s"
            ></span>
          </router-link>

          <!-- Explore Dropdown (remove Our Services link from here) -->
          <div
            class="relative"
            @mouseenter="handleDropdownEnter"
            @mouseleave="handleDropdownLeave"
          >
            <button
              class="flex items-center gap-2 transition-colors relative group focus:outline-none"
              :class="{ 'text-green-600': isExploreActive }"
            >
              <span class="font-sans">Explore</span>
              <span
                class="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600"
                :class="{
                  'scale-x-100': isExploreActive,
                  'scale-x-0 group-hover:scale-x-100': !isExploreActive,
                }"
                style="transition: transform 0.2s"
              ></span>
            </button>
            <div
              v-if="showDropdown"
              class="absolute left-1/2 -translate-x-1/2 mt-4 w-[700px] bg-gray-100 shadow-xl rounded-lg flex z-40 py-8 px-10 gap-12"
              style="top: 100%"
            >
              <!-- Find Universities -->
              <div class="flex-1 min-w-[180px]">
                <h3 class="font-bold text-blue-900 mb-4 text-lg">
                  Find Universities
                </h3>
                <ul class="space-y-2 text-gray-700 text-base">
                  <li>
                    <router-link
                      to="/university/australia"
                      class="hover:underline"
                      :class="{
                        'text-green-600 underline':
                          $route.path === '/university/australia',
                      }"
                      >Australia</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/university/usa"
                      class="hover:underline"
                      :class="{
                        'text-green-600 underline':
                          $route.path === '/university/usa',
                      }"
                      >USA</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/university/uk"
                      class="hover:underline"
                      :class="{
                        'text-green-600 underline':
                          $route.path === '/university/uk',
                      }"
                      >UK</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/university/canada"
                      class="hover:underline"
                      :class="{
                        'text-green-600 underline':
                          $route.path === '/university/canada',
                      }"
                      >Canada</router-link
                    >
                  </li>
                </ul>
              </div>
              <!-- More Information -->
              <div class="flex-1 min-w-[180px]">
                <h3 class="font-bold text-blue-900 mb-4 text-lg">
                  More Information
                </h3>
                <ul class="space-y-2 text-gray-700 text-base">
                  <li>
                    <router-link
                      to="/scholarships"
                      class="hover:underline"
                      :class="{
                        'text-green-600 underline':
                          $route.path === '/scholarships',
                      }"
                      >Scholarships</router-link
                    >
                  </li>
                  <li>Latest News & Updates</li>
                </ul>
              </div>
            </div>
          </div>

          <router-link
            to="/about"
            class="flex items-center gap-2 transition-colors relative group"
            :class="{ 'text-green-600': $route.path === '/about' }"
          >
            <span class="font-sans">About</span>
            <span
              class="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600"
              :class="{
                'scale-x-100': $route.path === '/about',
                'scale-x-0 group-hover:scale-x-100': $route.path !== '/about',
              }"
              style="transition: transform 0.2s"
            ></span>
          </router-link>

          <!-- Destinations Dropdown (desktop) -->
          <div
            class="relative"
            @mouseenter="handleDestinationsDropdownEnter"
            @mouseleave="handleDestinationsDropdownLeave"
          >
            <button
              class="transition-colors relative group flex items-center gap-2 hover:text-green-600 focus:outline-none"
              :class="{ 'text-green-600': isDestinationsActive }"
            >
              Destinations
              <span
                class="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600"
                :class="{
                  'scale-x-100': isDestinationsActive,
                  'scale-x-0 group-hover:scale-x-100': !isDestinationsActive,
                }"
                style="transition: transform 0.2s"
              ></span>
            </button>
            <div
              v-if="showDestinationsDropdown"
              class="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-gray-100 shadow-xl rounded-lg flex flex-col z-40 py-4 px-6 gap-2"
              style="top: 100%"
            >
              <router-link
                to="/destinations/australia"
                class="hover:underline py-2 px-2 rounded transition-colors"
                :class="{
                  'text-green-600 underline':
                    $route.path === '/destinations/australia',
                }"
                >Study in Australia</router-link
              >
              <router-link
                to="/destinations/usa"
                class="hover:underline py-2 px-2 rounded transition-colors"
                :class="{
                  'text-green-600 underline':
                    $route.path === '/destinations/usa',
                }"
                >Study in USA</router-link
              >
              <router-link
                to="/destinations/canada"
                class="hover:underline py-2 px-2 rounded transition-colors"
                :class="{
                  'text-green-600 underline':
                    $route.path === '/destinations/canada',
                }"
                >Study in Canada</router-link
              >
              <router-link
                to="/destinations/UK"
                class="hover:underline py-2 px-2 rounded transition-colors"
                :class="{
                  'text-green-600 underline':
                    $route.path === '/destinations/UK',
                }"
                >Study in UK</router-link
              >
              <router-link
                to="/destinations/newzealand"
                class="hover:underline py-2 px-2 rounded transition-colors"
                :class="{
                  'text-green-600 underline':
                    $route.path === '/destinations/newzealand',
                }"
                >Study in New Zealand</router-link
              >
            </div>
          </div>
        </nav>
        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-3 rounded-lg hover:bg-gray-100 ml-2"
          @click="showMobileMenu = !showMobileMenu"
        >
          <svg
            class="w-8 h-8 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu Dropdown (full right, overlay, slide-in) -->
    <div v-if="showMobileMenu">
      <!-- Overlay -->
      <div
        class="fixed inset-0 bg-black bg-opacity-60 z-50 md:hidden"
        @click="showMobileMenu = false"
      ></div>
      <!-- Slide-in Menu -->
      <div
        class="fixed top-0 right-0 h-screen w-80 bg-gray-900 text-white z-50 md:hidden animate-slide-in flex flex-col"
      >
        <!-- Close Button -->
        <button
          class="self-end p-4 text-2xl focus:outline-none"
          @click="showMobileMenu = false"
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav class="flex flex-col gap-4 px-8 pt-4 text-base font-semibold">
          <router-link
            to="/"
            class="hover:text-blue-400"
            @click="showMobileMenu = false"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="hover:text-blue-400"
            @click="showMobileMenu = false"
            >About</router-link
          >
          <div class="relative">
            <button
              class="hover:text-blue-400 flex items-center w-full justify-between"
              @click="toggleMobileServicesDropdown"
              style="background: none; border: none; outline: none; padding: 0"
            >
              Services
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="showMobileServicesDropdown"
              class="bg-gray-800 rounded-lg mt-2 p-4"
            >
              <h3 class="font-bold text-blue-300 mb-2 text-base">
                Our Services
              </h3>
              <ul class="space-y-2 text-gray-200">
                <li>Free Counselling</li>
                <li>Free Profile Assessment</li>
                <li>No Services Charge</li>
                <li>Free Visa Processing</li>
              </ul>
            </div>
          </div>
          <div class="relative">
            <button
              class="hover:text-blue-400 flex items-center w-full justify-between"
              @click="toggleMobileDestinationsDropdown"
              style="background: none; border: none; outline: none; padding: 0"
            >
              Destinations
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="showMobileDestinationsDropdown"
              class="bg-gray-800 rounded-lg mt-2 p-4"
            >
              <ul class="space-y-2 text-gray-200">
                <li>
                  <router-link
                    to="/destinations/australia"
                    class="hover:underline"
                    @click="showMobileMenu = false"
                    >Study in Australia</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/destinations/usa"
                    class="hover:underline"
                    @click="showMobileMenu = false"
                    >Study in USA</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/destinations/canada"
                    class="hover:underline"
                    @click="showMobileMenu = false"
                    >Study in Canada</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/destinations/uk"
                    class="hover:underline"
                    @click="showMobileMenu = false"
                    >Study in UK</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/destinations/New Zealand"
                    class="hover:underline"
                    @click="showMobileMenu = false"
                    >Study in New Zealand</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <router-link
            to="/contact"
            class="hover:text-blue-400"
            @click="showMobileMenu = false"
            >Contact</router-link
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch, setSelectedBranch } = useBranchStore();

// Branch selection
function selectBranch(branch) {
  setSelectedBranch(branch);
  showBranchesDropdown.value = false;
}

// // Location/contact info
// const locations = {
//   "India": {
//     email: "enquiry.in@graceintlgroup.com",
//     phone: "+91 8750040975, 011-41070020"
//   },
//   "Nepal": {
//     email: "info@grace.edu.np",
//     phone: "+977 1-4444444, 9800000000"
//   },
//   "Australia": {
//     email: "info@graceintlgroup.com.au",
//     phone: "+61 2 8000 0000"
//   }
// };
// const selectedLocation = ref('India');

// Services Dropdown logic (mobile)
const showMobileServicesDropdown = ref(false);
function toggleMobileServicesDropdown() {
  showMobileServicesDropdown.value = !showMobileServicesDropdown.value;
}
const showMobileMenu = ref(false);

// Explore Dropdown logic
const showDropdown = ref(false);
let dropdownTimer = null;
function handleDropdownEnter() {
  clearTimeout(dropdownTimer);
  dropdownTimer = setTimeout(() => {
    showDropdown.value = true;
  }, 180); // Show after 180ms
}
function handleDropdownLeave() {
  clearTimeout(dropdownTimer);
  dropdownTimer = setTimeout(() => {
    showDropdown.value = false;
  }, 180); // Hide after 180ms
}

// Services Dropdown logic (desktop)
const showServicesDropdown = ref(false);
let servicesDropdownTimer = null;
function handleServicesDropdownEnter() {
  clearTimeout(servicesDropdownTimer);
  servicesDropdownTimer = setTimeout(() => {
    showServicesDropdown.value = true;
  }, 180);
}
function handleServicesDropdownLeave() {
  clearTimeout(servicesDropdownTimer);
  servicesDropdownTimer = setTimeout(() => {
    showServicesDropdown.value = false;
  }, 180);
}

// Destinations Dropdown logic (desktop)
const showDestinationsDropdown = ref(false);
let destinationsDropdownTimer = null;
function handleDestinationsDropdownEnter() {
  clearTimeout(destinationsDropdownTimer);
  destinationsDropdownTimer = setTimeout(() => {
    showDestinationsDropdown.value = true;
  }, 180);
}
function handleDestinationsDropdownLeave() {
  clearTimeout(destinationsDropdownTimer);
  destinationsDropdownTimer = setTimeout(() => {
    showDestinationsDropdown.value = false;
  }, 180);
}
const destinationsPaths = [
  "/destinations/australia",
  "/destinations/usa",
  "/destinations/canada",
  "/destinations/uk",
];
const isDestinationsActive = computed(() =>
  destinationsPaths.includes(route.path),
);

// Destinations Dropdown logic (mobile)
const showMobileDestinationsDropdown = ref(false);
function toggleMobileDestinationsDropdown() {
  showMobileDestinationsDropdown.value = !showMobileDestinationsDropdown.value;
}

const route = useRoute();
const explorePaths = [
  "/university/australia",
  "/university/usa",
  "/university/uk",
  "/university/canada",
  "/scholarships",
  "/news",
];
const isExploreActive = computed(() => explorePaths.includes(route.path));

// Branches Dropdown logic
const showBranchesDropdown = ref(false);
let branchesDropdownTimer = null;
function handleBranchesDropdownEnter() {
  clearTimeout(branchesDropdownTimer);
  branchesDropdownTimer = setTimeout(() => {
    showBranchesDropdown.value = true;
  }, 180);
}
function handleBranchesDropdownLeave() {
  clearTimeout(branchesDropdownTimer);
  branchesDropdownTimer = setTimeout(() => {
    showBranchesDropdown.value = false;
  }, 180);
}
</script>
