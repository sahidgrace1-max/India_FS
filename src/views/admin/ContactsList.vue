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
              Contact 
              <span class="relative inline-block text-green-500">
                Inquiries
                <span class="absolute -bottom-1 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
              </span>
            </h2>
            <p class="text-sm text-slate-500 mt-3 font-medium">Manage and respond to student inquiries.</p>
          </div>
        </div>

        <div v-if="loading" class="flex flex-col items-center justify-center py-16">
          <div class="w-10 h-10 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin"></div>
          <p class="mt-4 text-sm text-blue-800 font-bold tracking-widest uppercase">Loading contacts...</p>
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
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">
                  Name
                </th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">
                  Contact Info
                </th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">
                  Message
                </th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">
                  Status
                </th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">
                  Date
                </th>
                <th scope="col" class="px-6 py-4 text-right text-xs font-bold text-blue-900 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-blue-50">
              <tr v-if="contacts.length === 0">
                <td colspan="6" class="px-6 py-12 text-center text-slate-500 text-sm italic font-medium">
                  No contact inquiries found.
                </td>
              </tr>
              <tr 
                v-for="contact in contacts" 
                :key="contact.id"
                class="hover:bg-blue-50/40 transition-colors duration-200 group"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-blue-900">{{ contact.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-slate-700">{{ contact.email }}</div>
                  <div class="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    {{ contact.phone || "N/A" }}
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-slate-600 max-w-xs truncate font-medium" :title="contact.message">
                    {{ contact.message }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border"
                    :class="{
                      'bg-amber-50 text-amber-700 border-amber-200': !contact.isRead,
                      'bg-green-50 text-green-700 border-green-200': contact.isRead,
                    }"
                  >
                    <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="contact.isRead ? 'bg-green-500' : 'bg-amber-500'"></span>
                    {{ contact.isRead ? "Read" : "Unread" }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                  {{ new Date(contact.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    @click="toggleReadStatus(contact)"
                    class="inline-flex items-center justify-center px-3 py-1.5 border-2 border-blue-800 text-blue-800 text-xs font-bold rounded-lg hover:bg-blue-800 hover:text-white hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  >
                    Mark {{ contact.isRead ? "Unread" : "Read" }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import api from "@/utils/api";

const contacts = ref([]);
const loading = ref(true);
const error = ref("");
const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const fetchContacts = async () => {
  loading.value = true;
  try {
    const response = await api.get("/contact");
    contacts.value = response.data.data.items || response.data.data;
  } catch (err) {
    error.value = "Failed to load contacts";
  } finally {
    loading.value = false;
  }
};

const toggleReadStatus = async (contact) => {
  try {
    await api.patch(`/contact/${contact.id}/read`);
    contact.isRead = !contact.isRead;
  } catch (err) {
    alert("Failed to update status");
  }
};

onMounted(() => {
  fetchContacts();

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
</style>