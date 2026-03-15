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
        <router-link to="/about" class="hover:text-green-400 transition">
          Our Team
        </router-link>
        <a href="mailto:enquiry.in@graceintlgroup.com" class="hover:underline">Contact Us</a>
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
            class="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-gray-800 shadow-xl rounded-lg flex flex-col z-40 py-2"
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
        <a href="https://www.facebook.com/graceinternationalindia" target="_blank" aria-label="Facebook" class="hover:text-gray-200 transition-colors">
          <svg class="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/grace_international_india/" target="_blank" aria-label="Instagram" class="hover:text-gray-200 transition-colors">
          <svg class="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/graceinternationalindia/" target="_blank" aria-label="LinkedIn" class="hover:text-gray-200 transition-colors">
          <svg class="inline w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
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
          
          <!-- Branch Selector for Mobile -->
          <div class="relative">
            <button
              class="hover:text-blue-400 flex items-center w-full justify-between"
              @click="toggleMobileBranchDropdown"
              style="background: none; border: none; outline: none; padding: 0"
            >
              Branch: {{ selectedBranch }}
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
              v-if="showMobileBranchDropdown"
              class="bg-gray-800 rounded-lg mt-2 p-4"
            >
              <ul class="space-y-2 text-gray-200">
                <li>
                  <button
                    @click="selectBranch('Delhi'); showMobileBranchDropdown = false"
                    class="hover:underline w-full text-left"
                    :class="{ 'text-blue-400 font-bold': selectedBranch === 'Delhi' }"
                  >
                    Delhi
                  </button>
                </li>
                <li>
                  <button
                    @click="selectBranch('Ahmedabad'); showMobileBranchDropdown = false"
                    class="hover:underline w-full text-left"
                    :class="{ 'text-blue-400 font-bold': selectedBranch === 'Ahmedabad' }"
                  >
                    Ahmedabad
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
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

  window.location.reload();
}

// Services Dropdown logic (mobile)
const showMobileServicesDropdown = ref(false);
function toggleMobileServicesDropdown() {
  showMobileServicesDropdown.value = !showMobileServicesDropdown.value;
}

// Branch Dropdown logic (mobile)
const showMobileBranchDropdown = ref(false);
function toggleMobileBranchDropdown() {
  showMobileBranchDropdown.value = !showMobileBranchDropdown.value;
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
