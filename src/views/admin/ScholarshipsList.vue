<template>
  <div class="bg-white shadow rounded-lg p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold">Scholarships</h2>
      <button
        @click="openCreateModal"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Scholarship
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
              Title / Country
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Deadline
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="scholarship in scholarships" :key="scholarship.id">
            <td class="px-6 py-4">
              <div class="font-medium text-gray-900">
                {{ scholarship.title }}
              </div>
              <div class="text-sm text-gray-500">{{ scholarship.country }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{
                scholarship.deadline
                  ? new Date(scholarship.deadline).toLocaleDateString()
                  : "N/A"
              }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                :class="{
                  'bg-green-100 text-green-800': scholarship.published,
                  'bg-gray-100 text-gray-800': !scholarship.published,
                }"
              >
                {{ scholarship.published ? "Published" : "Draft" }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                @click="togglePublish(scholarship)"
                class="text-indigo-600 hover:text-indigo-900 mr-4"
              >
                {{ scholarship.published ? "Unpublish" : "Publish" }}
              </button>
              <button
                @click="deleteScholarship(scholarship.id)"
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
          <form @submit.prevent="saveScholarship">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                Add Scholarship
              </h3>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Title</label
                  >
                  <input
                    v-model="formData.title"
                    type="text"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Slug</label
                  >
                  <input
                    v-model="formData.slug"
                    type="text"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Country</label
                  >
                  <input
                    v-model="formData.country"
                    type="text"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <textarea
                    v-model="formData.description"
                    rows="3"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Link URL</label
                  >
                  <input
                    v-model="formData.link"
                    type="url"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div class="flex items-center">
                  <input
                    v-model="formData.published"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label class="ml-2 block text-sm text-gray-900"
                    >Publish immediately</label
                  >
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

const scholarships = ref([]);
const loading = ref(true);
const error = ref("");
const showModal = ref(false);

const formData = reactive({
  title: "",
  slug: "",
  country: "",
  description: "",
  link: "",
  published: false,
});

const fetchScholarships = async () => {
  loading.value = true;
  try {
    const response = await api.get("/scholarships");
    scholarships.value = response.data.data.items || response.data.data;
  } catch (err) {
    error.value = "Failed to load scholarships";
  } finally {
    loading.value = false;
  }
};

const togglePublish = async (scholarship) => {
  try {
    await api.patch(`/scholarships/${scholarship.id}/publish`);
    scholarship.published = !scholarship.published;
  } catch (err) {
    alert("Failed to update status");
  }
};

const deleteScholarship = async (id) => {
  if (!confirm("Are you sure you want to delete this scholarship?")) return;
  try {
    await api.delete(`/scholarships/${id}`);
    fetchScholarships();
  } catch (err) {
    alert("Failed to delete scholarship");
  }
};

const openCreateModal = () => {
  Object.assign(formData, {
    title: "",
    slug: "",
    country: "",
    description: "",
    link: "",
    published: false,
  });
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveScholarship = async () => {
  try {
    await api.post("/scholarships", formData);
    closeModal();
    fetchScholarships();
  } catch (err) {
    alert(
      "Failed to save scholarship: " +
        (err.response?.data?.message || err.message),
    );
  }
};

onMounted(() => {
  fetchScholarships();
});
</script>
