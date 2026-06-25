<template>
  <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100 p-6 sm:p-8 font-poppins relative">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
      <div>
        <h2 class="text-2xl font-bold text-blue-900">Destinations</h2>
        <p class="text-sm text-slate-500 mt-1">Manage study abroad countries and featured locations.</p>
      </div>
      <button
        @click="openCreateModal"
        class="inline-flex items-center justify-center px-5 py-2.5 bg-blue-800 text-white text-sm font-medium rounded-xl shadow-lg hover:-translate-y-0.5 hover:bg-blue-900 transition-all duration-200"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        Add Destination
      </button>
    </div>

    <div v-if="loading" class="flex flex-col items-center justify-center py-12">
      <div class="w-8 h-8 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin"></div>
      <p class="mt-4 text-sm text-blue-800 font-medium tracking-widest uppercase">Loading destinations...</p>
    </div>

    <div v-else-if="error" class="p-4 mb-6 rounded-xl bg-red-50 border border-red-100 flex items-center">
      <svg class="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span class="text-sm font-medium text-red-800">{{ error }}</span>
    </div>

    <div v-else class="overflow-x-auto rounded-xl border border-blue-100 shadow-sm">
      <table class="min-w-full divide-y divide-blue-100">
        <thead class="bg-blue-50/50">
          <tr>
            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-widest">
              Country / Slug
            </th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-widest">
              Featured
            </th>
            <th scope="col" class="px-6 py-4 text-right text-xs font-semibold text-blue-900 uppercase tracking-widest">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-blue-50">
          <tr v-if="destinations.length === 0">
            <td colspan="3" class="px-6 py-12 text-center text-slate-500 text-sm italic">
              No destinations found. Add your first destination!
            </td>
          </tr>
          <tr v-for="dest in destinations" :key="dest.id" class="hover:bg-blue-50/30 transition-colors duration-150 group">
            <td class="px-6 py-5">
              <div class="flex flex-col">
                <span class="text-sm font-bold text-blue-900 group-hover:text-green-600 transition-colors">{{ dest.country }}</span>
                <span class="text-xs text-slate-500 mt-1 font-mono bg-slate-100 inline-flex w-fit px-2 py-0.5 rounded">{{ dest.slug }}</span>
              </div>
            </td>
            <td class="px-6 py-5 whitespace-nowrap">
              <span
                class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border"
                :class="{
                  'bg-green-50 text-green-700 border-green-200': dest.featured,
                  'bg-slate-50 text-slate-600 border-slate-200': !dest.featured,
                }"
              >
                <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="dest.featured ? 'bg-green-500' : 'bg-slate-400'"></span>
                {{ dest.featured ? "Featured" : "Standard" }}
              </span>
            </td>
            <td class="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex items-center justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button @click="toggleFeatured(dest)" class="text-slate-400 hover:text-blue-600 transition-colors p-1" title="Toggle Featured">
                  <svg v-if="dest.featured" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                </button>
                <button @click="deleteDestination(dest.id)" class="text-slate-400 hover:text-red-600 transition-colors p-1" title="Delete">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-poppins" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          
          <Transition name="backdrop-fade">
            <div v-if="showModal" class="fixed inset-0 bg-blue-900/40 backdrop-blur-sm transition-opacity" @click="closeModal" aria-hidden="true"></div>
          </Transition>
          
          <Transition name="slide-up">
            <div v-if="showModal" class="relative bg-white rounded-2xl text-left shadow-2xl transform transition-all w-full max-w-lg flex flex-col border border-blue-100 overflow-hidden">
              <form @submit.prevent="saveDestination" class="flex flex-col h-full">
                
                <div class="bg-blue-50/50 px-6 py-5 border-b border-blue-100 flex justify-between items-center">
                  <h3 class="text-lg font-bold text-blue-900" id="modal-title">
                    Add Destination
                  </h3>
                  <button type="button" @click="closeModal" class="text-slate-400 hover:text-blue-800 bg-white hover:bg-blue-100 rounded-full p-2 transition-colors focus:outline-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                
                <div class="px-6 py-6 space-y-6">
                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-1">Country</label>
                    <input
                      v-model="formData.country"
                      type="text"
                      required
                      class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-1">Slug</label>
                    <input
                      v-model="formData.slug"
                      type="text"
                      required
                      class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 bg-slate-50 text-slate-600 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow font-mono outline-none"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-1">Description</label>
                    <textarea
                      v-model="formData.description"
                      rows="3"
                      required
                      class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none"
                    ></textarea>
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-1">Image URL</label>
                    <input
                      v-model="formData.imageUrl"
                      type="url"
                      class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none"
                    />
                  </div>
                  <div class="flex items-center bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    <div class="flex items-center h-5">
                      <input
                        v-model="formData.featured"
                        id="featured-toggle"
                        type="checkbox"
                        class="h-5 w-5 text-blue-800 focus:ring-blue-800 border-blue-300 rounded cursor-pointer transition-colors"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="featured-toggle" class="font-bold text-blue-900 cursor-pointer">Featured Destination</label>
                      <p class="text-slate-500">Highlight this destination on the home page.</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-blue-50/50 px-6 py-4 border-t border-blue-100 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 rounded-b-2xl">
                  <button
                    type="button"
                    @click="closeModal"
                    class="mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 border-2 border-blue-800 shadow-sm text-sm font-bold rounded-xl text-blue-800 bg-white hover:-translate-y-0.5 focus:outline-none transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 border border-transparent shadow-lg text-sm font-bold rounded-xl text-white bg-blue-800 hover:-translate-y-0.5 hover:bg-blue-900 focus:outline-none transition-all"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import api from "@/utils/api";

const destinations = ref([]);
const loading = ref(true);
const error = ref("");
const showModal = ref(false);

const formData = reactive({
  country: "",
  slug: "",
  description: "",
  imageUrl: "",
  featured: false,
});

const fetchDestinations = async () => {
  loading.value = true;
  try {
    const response = await api.get("/destinations");
    destinations.value = response.data.data;
  } catch (err) {
    error.value = "Failed to load destinations";
  } finally {
    loading.value = false;
  }
};

const toggleFeatured = async (dest) => {
  try {
    await api.patch(`/destinations/${dest.id}`, { featured: !dest.featured });
    dest.featured = !dest.featured;
  } catch (err) {
    alert("Failed to update status");
  }
};

const deleteDestination = async (id) => {
  if (
    !confirm(
      "Are you sure you want to delete this destination? It may also delete associated universities.",
    )
  )
    return;
  try {
    await api.delete(`/destinations/${id}`);
    fetchDestinations();
  } catch (err) {
    alert("Failed to delete destination");
  }
};

const openCreateModal = () => {
  Object.assign(formData, {
    country: "",
    slug: "",
    description: "",
    imageUrl: "",
    featured: false,
  });
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveDestination = async () => {
  try {
    await api.post("/destinations", formData);
    closeModal();
    fetchDestinations();
  } catch (err) {
    alert(
      "Failed to save destination: " +
        (err.response?.data?.message || err.message),
    );
  }
};

onMounted(() => {
  fetchDestinations();
});
</script>

<style scoped>
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