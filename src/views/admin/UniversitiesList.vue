<template>
  <div class="bg-white shadow rounded-lg p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold">Universities</h2>
      <button
        @click="openCreateModal"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add University
      </button>
    </div>

    <div v-if="loading" class="text-center py-4">Loading...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>

    <div v-else class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Location
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Destination
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="uni in universities" :key="uni.id">
            <td class="px-6 py-4">
              <div class="font-medium text-gray-900">{{ uni.name }}</div>
              <a
                v-if="uni.website"
                :href="uni.website"
                target="_blank"
                class="text-sm text-blue-500 hover:underline"
                >Website</a
              >
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ uni.location }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ getDestinationName(uni.destinationId) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                @click="deleteUniversity(uni.id)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create Modal -->
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 transition-opacity"
          aria-hidden="true"
          @click="closeModal"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <form @submit.prevent="saveUniversity">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                Add University
              </h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Name</label
                  >
                  <input
                    v-model="formData.name"
                    type="text"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Location</label
                  >
                  <input
                    v-model="formData.location"
                    type="text"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Destination</label
                  >
                  <select
                    v-model="formData.destinationId"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="" disabled>Select a destination</option>
                    <option
                      v-for="dest in destinations"
                      :key="dest.id"
                      :value="dest.id"
                    >
                      {{ dest.country }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Website URL</label
                  >
                  <input
                    v-model="formData.website"
                    type="url"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Logo URL</label
                  >
                  <input
                    v-model="formData.logoUrl"
                    type="url"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="submit"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Save
              </button>
              <button
                type="button"
                @click="closeModal"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import api from "@/utils/api";

const universities = ref([]);
const destinations = ref([]);
const loading = ref(true);
const error = ref("");
const showModal = ref(false);

const formData = reactive({
  name: "",
  location: "",
  website: "",
  logoUrl: "",
  destinationId: "",
});

const fetchData = async () => {
  loading.value = true;
  try {
    const [uniRes, destRes] = await Promise.all([
      api.get("/universities"),
      api.get("/destinations"),
    ]);
    universities.value = uniRes.data.data;
    destinations.value = destRes.data.data;
  } catch (err) {
    error.value = "Failed to load data";
  } finally {
    loading.value = false;
  }
};

const getDestinationName = (id) => {
  const dest = destinations.value.find((d) => d.id === id);
  return dest ? dest.country : "Unknown";
};

const deleteUniversity = async (id) => {
  if (!confirm("Are you sure you want to delete this university?")) return;
  try {
    await api.delete(`/universities/${id}`);
    fetchData(); // Refresh list
  } catch (err) {
    alert("Failed to delete university");
  }
};

const openCreateModal = () => {
  Object.assign(formData, {
    name: "",
    location: "",
    website: "",
    logoUrl: "",
    destinationId: "",
  });
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveUniversity = async () => {
  try {
    await api.post("/universities", formData);
    closeModal();
    fetchData();
  } catch (err) {
    alert(
      "Failed to save university: " +
        (err.response?.data?.message || err.message),
    );
  }
};

onMounted(() => {
  fetchData();
});
</script>
