<template>
  <div class="w-full bg-white font-poppins relative z-50">
    <div class="bg-blue-800 text-white text-sm w-full hidden md:block border-b border-blue-900/50">
      <div class="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-8 h-auto md:h-10 py-2 md:py-0 gap-2">
        <div class="flex items-center gap-4 whitespace-nowrap text-center md:text-left font-medium">
          <a href="mailto:enquiry.in@graceintlgroup.com" class="flex items-center gap-1.5 hover:text-green-400 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            enquiry.in@graceintlgroup.com
          </a>
          <span class="text-blue-400 opacity-50">|</span>
          <a href="tel:01141070020" class="flex items-center gap-1.5 hover:text-green-400 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
            011-41070020
          </a>
          <span class="text-blue-400 opacity-50">|</span>
          <a href="tel:+918750040975" class="flex items-center gap-1.5 hover:text-green-400 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
            </svg>
            8750040975
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-4 md:gap-6 justify-center md:justify-end mt-2 md:mt-0 font-medium text-xs">
          <router-link to="/about" class="hover:text-green-400 transition-colors uppercase tracking-wider">
            Our Team
          </router-link>
          
          <span class="text-blue-400 opacity-50 hidden md:inline">|</span>
          
          <div
            class="relative"
            @mouseenter="handleBranchesDropdownEnter"
            @mouseleave="handleBranchesDropdownLeave"
          >
            <button class="hover:text-green-400 focus:outline-none flex items-center gap-1.5 transition-colors uppercase tracking-wider">
              <span>{{ selectedBranch }}</span>
              <svg class="w-3 h-3 transition-transform duration-200" :class="{'rotate-180': showBranchesDropdown}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <transition name="dropdown">
              <div
                v-if="showBranchesDropdown"
                class="absolute right-0 mt-2 w-48 bg-white text-slate-800 shadow-xl border border-blue-50 rounded-xl flex flex-col z-50 py-2 overflow-hidden"
              >
                <div class="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50">Select Region</div>
                <button
                  @click="selectBranch('Delhi')"
                  class="hover:bg-slate-50 py-2.5 px-4 text-left transition-colors flex items-center justify-between group"
                  :class="{ 'bg-blue-50/50 text-blue-800 font-bold': selectedBranch === 'Delhi' }"
                >
                  Delhi
                  <svg v-if="selectedBranch === 'Delhi'" class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </button>
                <button
                  @click="selectBranch('Ahmedabad')"
                  class="hover:bg-slate-50 py-2.5 px-4 text-left transition-colors flex items-center justify-between group"
                  :class="{ 'bg-blue-50/50 text-blue-800 font-bold': selectedBranch === 'Ahmedabad' }"
                >
                  Ahmedabad
                  <svg v-if="selectedBranch === 'Ahmedabad'" class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </button>
              </div>
            </transition>
          </div>

          <div class="flex items-center gap-3 border-l border-blue-400/50 pl-4 ml-2">
            <a href="https://www.facebook.com/graceinternationalindia" target="_blank" aria-label="Facebook" class="hover:text-green-400 transition-colors transform hover:scale-110">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.instagram.com/grace_international_india/" target="_blank" aria-label="Instagram" class="hover:text-green-400 transition-colors transform hover:scale-110">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/graceinternationalindia/" target="_blank" aria-label="LinkedIn" class="hover:text-green-400 transition-colors transform hover:scale-110">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <header class="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 h-24 sticky top-0 z-40 transition-all duration-300">
      <div class="max-w-screen-2xl mx-auto flex items-center px-4 lg:px-8 h-full min-h-[96px]">
        
        <div class="flex items-center gap-6 flex-shrink-0">
          <router-link to="/" class="flex items-center group">
            <img src="@/assets/gi-logo-gif.gif" alt="Grace International" class="h-16 md:h-20 w-auto transform group-hover:scale-105 transition-transform duration-300" />
          </router-link>
        </div>

        <div class="flex items-center justify-end flex-1">
          <nav class="hidden lg:flex items-center gap-10 text-base font-bold text-blue-900 mr-8">
            
            <router-link to="/" class="relative group py-2">
              <span class="hover:text-green-600 transition-colors">Home</span>
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </router-link>

            <div class="relative" @mouseenter="handleServicesDropdownEnter" @mouseleave="handleServicesDropdownLeave">
              <router-link to="/our-services" class="relative group py-2 flex items-center gap-1" :class="{ 'text-green-600': $route.path === '/our-services' || showServicesDropdown }">
                <span>Services</span>
                <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform origin-left duration-300" :class="{ 'scale-x-100': $route.path === '/our-services' || showServicesDropdown, 'scale-x-0 group-hover:scale-x-100': $route.path !== '/our-services' && !showServicesDropdown }"></span>
              </router-link>
            </div>

            <div class="relative py-2" @mouseenter="handleDestinationsDropdownEnter" @mouseleave="handleDestinationsDropdownLeave">
              <button class="relative group flex items-center gap-1.5 focus:outline-none transition-colors" :class="{ 'text-green-600': isDestinationsActive || showDestinationsDropdown }">
                <span>Destinations</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="{'rotate-180': showDestinationsDropdown}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform origin-left duration-300" :class="{ 'scale-x-100': isDestinationsActive || showDestinationsDropdown, 'scale-x-0 group-hover:scale-x-100': !isDestinationsActive && !showDestinationsDropdown }"></span>
              </button>
              
              <transition name="dropdown">
                <div v-if="showDestinationsDropdown" class="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white shadow-xl border border-blue-50 rounded-2xl flex flex-col z-50 p-3 gap-1 overflow-hidden" style="top: 100%">
                  <router-link to="/destinations/australia" class="hover:bg-slate-50 py-2.5 px-4 rounded-xl transition-colors font-semibold text-slate-700 hover:text-blue-800" :class="{ 'bg-blue-50/50 text-blue-800': $route.path === '/destinations/australia' }">Study in Australia</router-link>
                  <router-link to="/destinations/usa" class="hover:bg-slate-50 py-2.5 px-4 rounded-xl transition-colors font-semibold text-slate-700 hover:text-blue-800" :class="{ 'bg-blue-50/50 text-blue-800': $route.path === '/destinations/usa' }">Study in USA</router-link>
                  <router-link to="/destinations/canada" class="hover:bg-slate-50 py-2.5 px-4 rounded-xl transition-colors font-semibold text-slate-700 hover:text-blue-800" :class="{ 'bg-blue-50/50 text-blue-800': $route.path === '/destinations/canada' }">Study in Canada</router-link>
                  <router-link to="/destinations/UK" class="hover:bg-slate-50 py-2.5 px-4 rounded-xl transition-colors font-semibold text-slate-700 hover:text-blue-800" :class="{ 'bg-blue-50/50 text-blue-800': $route.path === '/destinations/UK' }">Study in UK</router-link>
                  <router-link to="/destinations/newzealand" class="hover:bg-slate-50 py-2.5 px-4 rounded-xl transition-colors font-semibold text-slate-700 hover:text-blue-800" :class="{ 'bg-blue-50/50 text-blue-800': $route.path === '/destinations/newzealand' }">Study in New Zealand</router-link>
                </div>
              </transition>
            </div>

            <div class="relative py-2" @mouseenter="handleDropdownEnter" @mouseleave="handleDropdownLeave">
              <button class="relative group flex items-center gap-1.5 focus:outline-none transition-colors" :class="{ 'text-green-600': isExploreActive || showDropdown }">
                <span>Explore</span>
                <svg class="w-4 h-4 transition-transform duration-200" :class="{'rotate-180': showDropdown}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform origin-left duration-300" :class="{ 'scale-x-100': isExploreActive || showDropdown, 'scale-x-0 group-hover:scale-x-100': !isExploreActive && !showDropdown }"></span>
              </button>
              
              <transition name="dropdown">
                <div v-if="showDropdown" class="absolute left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white shadow-2xl border border-blue-50 rounded-2xl flex z-50 p-8 gap-10 overflow-hidden" style="top: 100%">
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-4">
                      <div class="w-1 h-5 bg-green-500 rounded-full"></div>
                      <h3 class="font-extrabold text-blue-900 uppercase tracking-widest text-xs">Universities</h3>
                    </div>
                    <ul class="space-y-2">
                      <li><router-link to="/university/australia" class="block py-1.5 text-slate-600 font-medium hover:text-blue-800 hover:translate-x-1 transition-all" :class="{ 'text-green-600': $route.path === '/university/australia' }">Australia</router-link></li>
                      <li><router-link to="/university/usa" class="block py-1.5 text-slate-600 font-medium hover:text-blue-800 hover:translate-x-1 transition-all" :class="{ 'text-green-600': $route.path === '/university/usa' }">USA</router-link></li>
                      <li><router-link to="/university/uk" class="block py-1.5 text-slate-600 font-medium hover:text-blue-800 hover:translate-x-1 transition-all" :class="{ 'text-green-600': $route.path === '/university/uk' }">UK</router-link></li>
                      <li><router-link to="/university/canada" class="block py-1.5 text-slate-600 font-medium hover:text-blue-800 hover:translate-x-1 transition-all" :class="{ 'text-green-600': $route.path === '/university/canada' }">Canada</router-link></li>
                    </ul>
                  </div>
                  <div class="flex-1 border-l border-slate-100 pl-10">
                    <div class="flex items-center gap-2 mb-4">
                      <div class="w-1 h-5 bg-green-500 rounded-full"></div>
                      <h3 class="font-extrabold text-blue-900 uppercase tracking-widest text-xs">Resources</h3>
                    </div>
                    <ul class="space-y-2">
                      <li><router-link to="/scholarships" class="block py-1.5 text-slate-600 font-medium hover:text-blue-800 hover:translate-x-1 transition-all" :class="{ 'text-green-600': $route.path === '/scholarships' }">Scholarships</router-link></li>
                      <li><router-link to="/test-prep" class="block py-1.5 text-slate-600 font-medium hover:text-blue-800 hover:translate-x-1 transition-all" :class="{ 'text-green-600': $route.path === '/test-prep' }">Test Preparation</router-link></li>
                    </ul>
                  </div>
                </div>
              </transition>
            </div>

            <router-link to="/about" class="relative group py-2">
              <span class="hover:text-green-600 transition-colors" :class="{ 'text-green-600': $route.path === '/about' }">About</span>
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform origin-left duration-300" :class="{ 'scale-x-100': $route.path === '/about', 'scale-x-0 group-hover:scale-x-100': $route.path !== '/about' }"></span>
            </router-link>

            <router-link to="/blog" class="relative group py-2">
              <span class="hover:text-green-600 transition-colors" :class="{ 'text-green-600': $route.path === '/blog' }">Blog</span>
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 transition-transform origin-left duration-300" :class="{ 'scale-x-100': $route.path === '/blog', 'scale-x-0 group-hover:scale-x-100': $route.path !== '/blog' }"></span>
            </router-link>
          </nav>

          <div class="hidden lg:block">
            <router-link to="/contact" class="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 rounded-xl shadow-lg shadow-blue-800/20 transition-all duration-200 transform hover:-translate-y-0.5 hover:bg-blue-700 active:bg-blue-900">
              Apply Now
            </router-link>
          </div>

          <button class="lg:hidden p-2 rounded-xl text-blue-900 hover:bg-blue-50 transition-colors ml-4 focus:outline-none" @click="showMobileMenu = !showMobileMenu">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <transition name="fade">
      <div v-if="showMobileMenu" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden" @click="showMobileMenu = false"></div>
    </transition>

    <transition name="slide-right">
      <div v-if="showMobileMenu" class="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white shadow-2xl z-[70] lg:hidden flex flex-col">
        
        <div class="flex items-center justify-between p-6 border-b border-slate-100 flex-shrink-0">
          <img src="@/assets/gi-logo-gif.gif" alt="Grace International" class="h-10 w-auto" />
          <button class="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors focus:outline-none" @click="showMobileMenu = false">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <nav class="flex-1 overflow-y-auto px-6 py-6 space-y-1 font-bold text-blue-900 text-lg">
          <router-link to="/" class="block py-3 border-b border-slate-50 hover:text-green-600 transition-colors" @click="showMobileMenu = false">Home</router-link>
          
          <div class="border-b border-slate-50">
            <button class="w-full flex items-center justify-between py-3 hover:text-green-600 transition-colors focus:outline-none" @click="toggleMobileServicesDropdown">
              Our Services
              <svg class="w-5 h-5 transition-transform duration-200" :class="{'rotate-180': showMobileServicesDropdown}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div v-show="showMobileServicesDropdown" class="pl-4 pb-3 space-y-2 text-base font-medium text-slate-600">
              <router-link to="/our-services" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">All Services</router-link>
              <span class="block py-1 opacity-70">Free Counselling</span>
              <span class="block py-1 opacity-70">Profile Assessment</span>
              <span class="block py-1 opacity-70">Visa Processing</span>
            </div>
          </div>

          <div class="border-b border-slate-50">
            <button class="w-full flex items-center justify-between py-3 hover:text-green-600 transition-colors focus:outline-none" @click="toggleMobileDestinationsDropdown">
              Destinations
              <svg class="w-5 h-5 transition-transform duration-200" :class="{'rotate-180': showMobileDestinationsDropdown}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div v-show="showMobileDestinationsDropdown" class="pl-4 pb-3 space-y-2 text-base font-medium text-slate-600">
              <router-link to="/destinations/australia" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">Australia</router-link>
              <router-link to="/destinations/usa" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">USA</router-link>
              <router-link to="/destinations/canada" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">Canada</router-link>
              <router-link to="/destinations/uk" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">UK</router-link>
            </div>
          </div>

          <div class="border-b border-slate-50">
            <button class="w-full flex items-center justify-between py-3 hover:text-green-600 transition-colors focus:outline-none" @click="toggleMobileExploreDropdown">
              Explore
              <svg class="w-5 h-5 transition-transform duration-200" :class="{'rotate-180': showMobileExploreDropdown}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div v-show="showMobileExploreDropdown" class="pl-4 pb-3 space-y-2 text-base font-medium text-slate-600">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 mb-1">Universities</div>
              <router-link to="/university/australia" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">Australia</router-link>
              <router-link to="/university/usa" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">USA</router-link>
              <router-link to="/university/uk" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">UK</router-link>
              <router-link to="/university/canada" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">Canada</router-link>
              
              <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 mb-1">Resources</div>
              <router-link to="/scholarships" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">Scholarships</router-link>
              <router-link to="/test-prep" class="block py-2 hover:text-blue-800" @click="showMobileMenu = false">Test Preparation</router-link>
            </div>
          </div>

          <router-link to="/about" class="block py-3 border-b border-slate-50 hover:text-green-600 transition-colors" @click="showMobileMenu = false">About</router-link>
          <router-link to="/blog" class="block py-3 border-b border-slate-50 hover:text-green-600 transition-colors" @click="showMobileMenu = false">Blog</router-link>
          
          <div class="pt-6 pb-2">
            <div class="text-xs uppercase tracking-widest text-slate-400 mb-3">Your Branch</div>
            <div class="flex gap-2">
              <button @click="selectBranch('Delhi'); showMobileMenu = false" class="flex-1 py-2 rounded-xl text-sm transition-colors border" :class="selectedBranch === 'Delhi' ? 'bg-blue-800 text-white border-blue-800' : 'bg-white text-slate-600 border-slate-200'">Delhi</button>
              <button @click="selectBranch('Ahmedabad'); showMobileMenu = false" class="flex-1 py-2 rounded-xl text-sm transition-colors border" :class="selectedBranch === 'Ahmedabad' ? 'bg-blue-800 text-white border-blue-800' : 'bg-white text-slate-600 border-slate-200'">Ahmedabad</button>
            </div>
          </div>
        </nav>

        <div class="p-6 bg-slate-50 border-t border-slate-100 flex-shrink-0 mt-auto">
          <router-link to="/contact" class="flex items-center justify-center w-full py-3.5 text-white bg-blue-800 rounded-xl font-bold shadow-lg" @click="showMobileMenu = false">
            Apply Now
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useBranchStore } from "@/stores/branchStore";

const { selectedBranch, setSelectedBranch } = useBranchStore();

// Branch selection logic
function selectBranch(branch) {
  setSelectedBranch(branch);
  showBranchesDropdown.value = false;
  window.location.reload();
}

// Mobile Menu State
const showMobileMenu = ref(false);
const showMobileServicesDropdown = ref(false);
const showMobileDestinationsDropdown = ref(false);
const showMobileExploreDropdown = ref(false);

function toggleMobileServicesDropdown() {
  showMobileServicesDropdown.value = !showMobileServicesDropdown.value;
}
function toggleMobileDestinationsDropdown() {
  showMobileDestinationsDropdown.value = !showMobileDestinationsDropdown.value;
}
function toggleMobileExploreDropdown() {
  showMobileExploreDropdown.value = !showMobileExploreDropdown.value;
}

// Desktop Dropdown Timing Logic Function generator
const createHoverLogic = (stateRef, delay = 150) => {
  let timer = null;
  return {
    enter: () => {
      clearTimeout(timer);
      timer = setTimeout(() => { stateRef.value = true; }, delay);
    },
    leave: () => {
      clearTimeout(timer);
      timer = setTimeout(() => { stateRef.value = false; }, delay);
    }
  }
};

// Top Bar Branches Dropdown (Desktop)
const showBranchesDropdown = ref(false);
const { enter: handleBranchesDropdownEnter, leave: handleBranchesDropdownLeave } = createHoverLogic(showBranchesDropdown);

// Services Dropdown (Desktop)
const showServicesDropdown = ref(false);
const { enter: handleServicesDropdownEnter, leave: handleServicesDropdownLeave } = createHoverLogic(showServicesDropdown);

// Destinations Dropdown (Desktop)
const showDestinationsDropdown = ref(false);
const { enter: handleDestinationsDropdownEnter, leave: handleDestinationsDropdownLeave } = createHoverLogic(showDestinationsDropdown);

// Explore Dropdown (Desktop)
const showDropdown = ref(false);
const { enter: handleDropdownEnter, leave: handleDropdownLeave } = createHoverLogic(showDropdown);

// Routing state logic for active links
const route = useRoute();

const destinationsPaths = [
  "/destinations/australia",
  "/destinations/usa",
  "/destinations/canada",
  "/destinations/uk",
  "/destinations/newzealand",
];
const isDestinationsActive = computed(() => destinationsPaths.includes(route.path));

const explorePaths = [
  "/university/australia",
  "/university/usa",
  "/university/uk",
  "/university/canada",
  "/scholarships",
  "/news",
  "/test-prep"
];
const isExploreActive = computed(() => explorePaths.includes(route.path));

</script>

<style scoped>
/* Transitions for dropdowns */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: top;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scaleY(0.95);
}

/* Transitions for mobile menu overlay and slide */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>