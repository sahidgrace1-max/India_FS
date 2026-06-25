<template>
  <section 
    ref="sectionRef" 
    class="relative min-h-screen py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform -translate-x-1/3"></div>
      <div class="absolute top-1/4 right-1/4 w-64 h-64 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100 p-6 sm:p-8 transition-all duration-1000 ease-out transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12']"
      >
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-3">
              <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
              Admin Dashboard
            </div>
            <h2 class="text-3xl font-bold text-blue-900">
              Student 
              <span class="relative inline-block text-green-500">
                Inquiries
                <span class="absolute -bottom-1 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
              </span>
            </h2>
            <p class="text-sm text-slate-500 mt-3 font-medium">Manage and track study abroad applications.</p>
          </div>

          <!-- Export Button -->
          <button
            @click="exportToExcel"
            :disabled="filteredInquiries.length === 0 || loading"
            class="flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-sm transition-all hover:-translate-y-0.5 shrink-0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export XLS
          </button>
        </div>

        <!-- Filters -->
        <div class="mb-8 flex flex-col gap-4 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
          <!-- Row 1: Search + Status -->
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1 relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name or email..."
                class="block w-full pl-10 pr-3 py-2.5 border border-blue-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm font-medium shadow-sm transition-all"
              />
            </div>
            <div class="w-full sm:w-48 relative">
              <select
                v-model="statusFilter"
                class="block w-full pl-4 pr-10 py-2.5 text-base border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm rounded-xl bg-white font-medium shadow-sm transition-all appearance-none cursor-pointer"
              >
                <option value="ALL">All Statuses</option>
                <option value="PENDING">Pending</option>
                <option value="REVIEWED">Reviewed</option>
                <option value="CONTACTED">Contacted</option>
                <option value="CLOSED">Closed</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-800">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <!-- Row 2: Date filters -->
          <div class="flex flex-col sm:flex-row gap-4 items-end">
            <div class="flex-1 relative">
              <label class="block text-xs font-bold text-blue-800 uppercase tracking-widest mb-1.5 ml-1">From Date</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  v-model="dateFrom"
                  type="date"
                  class="block w-full pl-9 pr-3 py-2.5 border border-blue-200 rounded-xl bg-white text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 shadow-sm transition-all cursor-pointer"
                />
              </div>
            </div>
            <div class="flex-1 relative">
              <label class="block text-xs font-bold text-blue-800 uppercase tracking-widest mb-1.5 ml-1">To Date</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  v-model="dateTo"
                  type="date"
                  class="block w-full pl-9 pr-3 py-2.5 border border-blue-200 rounded-xl bg-white text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 shadow-sm transition-all cursor-pointer"
                />
              </div>
            </div>
            <button
              v-if="dateFrom || dateTo"
              @click="clearDateFilter"
              class="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-red-600 bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 rounded-xl transition-all shadow-sm shrink-0"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear Dates
            </button>
          </div>

          <!-- Active filter summary -->
          <div v-if="dateFrom || dateTo" class="flex items-center gap-2 text-xs text-blue-800 font-medium bg-blue-100/60 px-3 py-2 rounded-lg border border-blue-200">
            <svg class="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Showing
            <span class="font-bold">{{ filteredInquiries.length }}</span>
            {{ filteredInquiries.length === 1 ? 'inquiry' : 'inquiries' }}
            <template v-if="dateFrom && dateTo">from <span class="font-bold">{{ formatDisplayDate(dateFrom) }}</span> to <span class="font-bold">{{ formatDisplayDate(dateTo) }}</span></template>
            <template v-else-if="dateFrom">from <span class="font-bold">{{ formatDisplayDate(dateFrom) }}</span> onwards</template>
            <template v-else-if="dateTo">up to <span class="font-bold">{{ formatDisplayDate(dateTo) }}</span></template>
          </div>
        </div>

        <div v-if="loading" class="flex flex-col items-center justify-center py-16">
          <div class="w-10 h-10 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin"></div>
          <p class="mt-4 text-sm text-blue-800 font-bold tracking-widest uppercase">Loading inquiries...</p>
        </div>

        <div v-else-if="error" class="p-4 mb-6 rounded-xl bg-red-50 border border-red-100 flex items-center">
          <svg class="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-sm font-bold text-red-800">{{ error }}</span>
        </div>

        <div v-else class="overflow-x-auto rounded-xl border border-blue-100 shadow-sm bg-white">
          <table class="min-w-full divide-y divide-blue-100">
            <thead class="bg-blue-50/80">
              <tr>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">Name</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">Contact</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">Details</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">Status</th>
                <th scope="col" class="px-6 py-4 text-right text-xs font-bold text-blue-900 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-blue-50">
              <tr v-if="filteredInquiries.length === 0">
                <td colspan="5" class="px-6 py-12 text-center text-slate-500 text-sm italic font-medium">
                  No inquiries match your search criteria.
                </td>
              </tr>
              <tr 
                v-for="inquiry in filteredInquiries" 
                :key="inquiry.id" 
                class="hover:bg-blue-50/40 transition-colors duration-200 group"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-blue-900">{{ inquiry.name }}</div>
                  <div class="text-xs text-slate-500 mt-1">{{ new Date(inquiry.createdAt).toLocaleDateString() }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-slate-700">{{ inquiry.email }}</div>
                  <div class="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    {{ inquiry.phone }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {{ inquiry.destination }}
                  </div>
                  <div class="text-xs text-slate-500 mt-1 flex gap-2">
                    <span class="bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{{ inquiry.course || "N/A" }}</span>
                    <span class="bg-green-50 px-2 py-0.5 rounded border border-green-100 text-green-700">{{ inquiry.intake || "N/A" }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border"
                    :class="{
                      'bg-amber-50 text-amber-700 border-amber-200': inquiry.status === 'PENDING',
                      'bg-blue-50 text-blue-700 border-blue-200': inquiry.status === 'REVIEWED',
                      'bg-green-50 text-green-700 border-green-200': inquiry.status === 'CONTACTED',
                      'bg-slate-50 text-slate-700 border-slate-200': inquiry.status === 'CLOSED',
                    }"
                  >
                    <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="{
                      'bg-amber-500': inquiry.status === 'PENDING',
                      'bg-blue-500': inquiry.status === 'REVIEWED',
                      'bg-green-500': inquiry.status === 'CONTACTED',
                      'bg-slate-500': inquiry.status === 'CLOSED',
                    }"></span>
                    {{ inquiry.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right">
                  <div class="flex items-center justify-end space-x-3">
                    <div class="relative">
                      <select
                        v-model="inquiry.status"
                        @change="updateStatus(inquiry.id, inquiry.status)"
                        class="block w-full pl-3 pr-8 py-1.5 text-xs font-bold text-blue-900 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 rounded-lg bg-blue-50/50 cursor-pointer appearance-none shadow-sm hover:bg-blue-50 transition-colors"
                      >
                        <option value="PENDING">Set Pending</option>
                        <option value="REVIEWED">Set Reviewed</option>
                        <option value="CONTACTED">Set Contacted</option>
                        <option value="CLOSED">Set Closed</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-800">
                        <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                    <button 
                      @click="openModal(inquiry)" 
                      class="text-blue-800 hover:text-green-600 bg-blue-50 hover:bg-green-50 px-3 py-1.5 rounded-lg border border-blue-100 hover:border-green-200 transition-all duration-200 font-bold text-xs shadow-sm flex items-center gap-1"
                    >
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      View
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-poppins" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          
          <Transition name="backdrop-fade">
            <div v-if="isModalOpen" class="fixed inset-0 bg-blue-900/40 backdrop-blur-sm transition-opacity" @click="closeModal" aria-hidden="true"></div>
          </Transition>
          
          <Transition name="slide-up">
            <div v-if="isModalOpen" class="relative bg-white rounded-2xl text-left shadow-2xl transform transition-all w-full max-w-2xl max-h-[90vh] flex flex-col border border-blue-100 overflow-hidden">
              
              <div class="bg-blue-50/50 px-6 py-5 border-b border-blue-100 flex justify-between items-center shrink-0">
                <h3 class="text-xl font-bold text-blue-900" id="modal-title">
                  Inquiry Details
                </h3>
                <button type="button" @click="closeModal" class="text-slate-400 hover:text-blue-800 bg-white hover:bg-blue-100 rounded-full p-2 transition-colors focus:outline-none">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              
              <div class="px-6 py-6 overflow-y-auto grow" v-if="selectedInquiry">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p class="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">Full Name</p>
                    <p class="text-lg font-bold text-blue-900">{{ selectedInquiry.name }}</p>
                  </div>
                  <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p class="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">Date Submitted</p>
                    <p class="text-base font-medium text-slate-800">{{ new Date(selectedInquiry.createdAt).toLocaleString() }}</p>
                  </div>
                  <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p class="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">Email Address</p>
                    <a :href="'mailto:' + selectedInquiry.email" class="text-base font-bold text-green-600 hover:underline flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      {{ selectedInquiry.email }}
                    </a>
                  </div>
                  <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p class="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">Phone Number</p>
                    <a :href="'tel:' + selectedInquiry.phone" class="text-base font-bold text-green-600 hover:underline flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      {{ selectedInquiry.phone }}
                    </a>
                  </div>
                </div>

                <div class="bg-blue-50/50 p-6 rounded-xl mt-6 border border-blue-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase text-blue-800 mb-1 flex items-center gap-2">
                      <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Desired Destination
                    </p>
                    <p class="text-lg font-bold text-blue-900">{{ selectedInquiry.destination || 'Not specified' }}</p>
                  </div>
                  <div>
                    <p class="text-xs font-bold tracking-widest uppercase text-blue-800 mb-1 flex items-center gap-2">
                      <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      Target Intake
                    </p>
                    <p class="text-lg font-bold text-blue-900">{{ selectedInquiry.intake || 'Not specified' }}</p>
                  </div>
                  <div class="sm:col-span-2 pt-4 border-t border-blue-100">
                    <p class="text-xs font-bold tracking-widest uppercase text-blue-800 mb-1 flex items-center gap-2">
                      <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                      Course of Interest
                    </p>
                    <p class="text-lg font-bold text-blue-900">{{ selectedInquiry.course || 'Not specified' }}</p>
                  </div>
                </div>

                <div class="mt-8">
                  <p class="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    Message / Notes
                  </p>
                  <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 text-slate-700 whitespace-pre-wrap min-h-[120px] font-medium leading-relaxed">
                    {{ selectedInquiry.message || 'No additional message provided.' }}
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-50/50 px-6 py-4 border-t border-blue-100 flex justify-end shrink-0">
                <button 
                  type="button" 
                  @click="closeModal" 
                  class="w-full sm:w-auto inline-flex justify-center items-center px-6 py-2.5 border-2 border-blue-800 shadow-sm text-sm font-bold rounded-xl text-blue-800 bg-white hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import * as XLSX from "xlsx";
import api from "@/utils/api";

const inquiries = ref([]);
const loading = ref(true);
const error = ref("");

const searchQuery = ref("");
const statusFilter = ref("ALL");
const dateFrom = ref("");
const dateTo = ref("");

const isModalOpen = ref(false);
const selectedInquiry = ref(null);

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const filteredInquiries = computed(() => {
  return inquiries.value.filter((inquiry) => {
    const matchesStatus = statusFilter.value === "ALL" || inquiry.status === statusFilter.value;

    const query = searchQuery.value.toLowerCase();
    const matchesSearch =
      inquiry.name.toLowerCase().includes(query) ||
      inquiry.email.toLowerCase().includes(query);

    const inquiryDate = new Date(inquiry.createdAt);
    inquiryDate.setHours(0, 0, 0, 0);

    let matchesDate = true;
    if (dateFrom.value) {
      const from = new Date(dateFrom.value);
      from.setHours(0, 0, 0, 0);
      matchesDate = matchesDate && inquiryDate >= from;
    }
    if (dateTo.value) {
      const to = new Date(dateTo.value);
      to.setHours(23, 59, 59, 999);
      matchesDate = matchesDate && inquiryDate <= to;
    }

    return matchesStatus && matchesSearch && matchesDate;
  });
});

const formatDisplayDate = (dateStr) => {
  return new Date(dateStr + "T00:00:00").toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const clearDateFilter = () => {
  dateFrom.value = "";
  dateTo.value = "";
};

const fetchInquiries = async () => {
  loading.value = true;
  try {
    const response = await api.get("/inquiries");
    inquiries.value = response.data.data.items || response.data.data;
  } catch (err) {
    error.value = "Failed to load inquiries";
  } finally {
    loading.value = false;
  }
};

const updateStatus = async (id, status) => {
  try {
    await api.patch(`/inquiries/${id}`, { status });
  } catch (err) {
    alert("Failed to update status");
    fetchInquiries();
  }
};

const exportToExcel = () => {
  const exportData = filteredInquiries.value.map((inquiry) => ({
    Name: inquiry.name,
    Email: inquiry.email,
    Phone: inquiry.phone,
    Destination: inquiry.destination || "N/A",
    Course: inquiry.course || "N/A",
    Intake: inquiry.intake || "N/A",
    Status: inquiry.status,
    Message: inquiry.message || "",
    "Date Submitted": new Date(inquiry.createdAt).toLocaleString(),
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);

  worksheet["!cols"] = [
    { wch: 22 }, // Name
    { wch: 30 }, // Email
    { wch: 16 }, // Phone
    { wch: 18 }, // Destination
    { wch: 24 }, // Course
    { wch: 14 }, // Intake
    { wch: 12 }, // Status
    { wch: 44 }, // Message
    { wch: 22 }, // Date Submitted
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Inquiries");

  const dateTag = dateFrom.value && dateTo.value
    ? `_${dateFrom.value}_to_${dateTo.value}`
    : dateFrom.value
    ? `_from_${dateFrom.value}`
    : dateTo.value
    ? `_to_${dateTo.value}`
    : `_${new Date().toISOString().slice(0, 10)}`;

  XLSX.writeFile(workbook, `grace_inquiries${dateTag}.xlsx`);
};

const openModal = (inquiry) => {
  selectedInquiry.value = inquiry;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedInquiry.value = null;
  }, 300);
};

onMounted(() => {
  fetchInquiries();

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      if (observer) observer.disconnect();
    }
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
@keyframes rotateDashed {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-rotate-dashed {
  animation: rotateDashed 30s linear infinite;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 0.3s ease;
}
.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
</style>