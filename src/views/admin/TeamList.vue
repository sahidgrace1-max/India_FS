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
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div>
            <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs mb-3">
              <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
              Admin Dashboard
            </div>
            <h2 class="text-3xl font-bold text-blue-900">
              Team 
              <span class="relative inline-block text-green-500">
                Members
                <span class="absolute -bottom-1 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
              </span>
            </h2>
            <p class="text-sm text-slate-500 mt-3 font-medium">Manage your consultancy experts and staff profiles.</p>
          </div>
          <button
            @click="openCreateModal"
            class="inline-flex items-center justify-center px-5 py-2.5 bg-blue-800 text-white text-sm font-bold rounded-xl shadow-lg hover:-translate-y-0.5 hover:bg-blue-900 transition-all duration-200"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Add Team Member
          </button>
        </div>

        <div v-if="loading" class="flex flex-col items-center justify-center py-16">
          <div class="w-10 h-10 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin"></div>
          <p class="mt-4 text-sm text-blue-800 font-bold tracking-widest uppercase">Loading team members...</p>
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
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">Image</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">Name / Position</th>
                <th scope="col" class="px-6 py-4 text-left text-xs font-bold text-blue-900 uppercase tracking-widest">Branch</th>
                <th scope="col" class="px-6 py-4 text-right text-xs font-bold text-blue-900 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-blue-50">
              <tr v-if="teamMembers.length === 0">
                <td colspan="4" class="px-6 py-12 text-center text-slate-500 text-sm italic font-medium">
                  No team members found. Add your first member!
                </td>
              </tr>
              <tr 
                v-for="member in teamMembers" 
                :key="member.id"
                class="hover:bg-blue-50/40 transition-colors duration-200 group"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-blue-100">
                    <img
                      v-if="member.image"
                      :src="member.image"
                      :alt="member.name"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      v-else
                      class="w-full h-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold"
                    >
                      {{ member.name.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-blue-900 group-hover:text-green-600 transition-colors">{{ member.name }}</div>
                  <div class="text-xs font-medium text-slate-500 mt-1">{{ member.position }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-widest uppercase bg-slate-100 text-slate-700 border border-slate-200">
                    {{ member.branch }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    @click="deleteMember(member.id)"
                    class="inline-flex items-center justify-center p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    title="Delete Member"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-poppins" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          
          <Transition name="backdrop-fade">
            <div v-if="showModal" class="fixed inset-0 bg-blue-900/40 backdrop-blur-sm transition-opacity" @click="closeModal" aria-hidden="true"></div>
          </Transition>
          
          <Transition name="slide-up">
            <div v-if="showModal" class="relative bg-white rounded-2xl text-left shadow-2xl transform transition-all w-full max-w-2xl max-h-[90vh] flex flex-col border border-blue-100 overflow-hidden">
              <form @submit.prevent="saveMember" class="flex flex-col h-full overflow-hidden">
                
                <div class="bg-blue-50/50 px-6 py-5 border-b border-blue-100 flex justify-between items-center shrink-0">
                  <h3 class="text-lg font-bold text-blue-900" id="modal-title">
                    Add Team Member
                  </h3>
                  <button type="button" @click="closeModal" class="text-slate-400 hover:text-blue-800 bg-white hover:bg-blue-100 rounded-full p-2 transition-colors focus:outline-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                
                <div class="px-6 py-6 space-y-6 overflow-y-auto grow">
                  
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label class="block text-sm font-bold text-blue-900 mb-1">Full Name</label>
                      <input
                        v-model="formData.name"
                        type="text"
                        required
                        class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-bold text-blue-900 mb-1">Position / Role</label>
                      <input
                        v-model="formData.position"
                        type="text"
                        required
                        class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none"
                        placeholder="Senior Counselor"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-1">Branch</label>
                    <div class="relative">
                      <select
                        v-model="formData.branch"
                        required
                        class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select Branch</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Kathmandu">Kathmandu</option>
                        <option value="Pokhara">Pokhara</option>
                        <option value="Chitwan">Chitwan</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-800">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-2">Profile Image</label>
                    <div class="relative flex justify-center px-6 pt-8 pb-8 border-2 border-blue-200 border-dashed rounded-xl hover:border-blue-800 hover:bg-blue-50/50 transition-colors group cursor-pointer">
                      <div class="space-y-2 text-center">
                        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-white shadow-sm transition-colors">
                          <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <div class="flex text-sm text-slate-600 justify-center mt-4">
                          <label for="image-upload" class="relative cursor-pointer rounded-md font-bold text-blue-800 focus-within:outline-none hover:underline decoration-green-500 underline-offset-4">
                            <span>Upload a photo</span>
                            <input id="image-upload" name="image-upload" type="file" class="sr-only" @change="handleImageUpload" accept="image/*" />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-slate-500 tracking-widest uppercase">PNG, JPG up to 5MB</p>
                      </div>
                    </div>
                    <div v-if="formData.image" class="mt-3 flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span class="text-sm text-green-800 font-bold truncate">{{ formData.image.name }}</span>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-1">Professional Bio</label>
                    <textarea
                      v-model="formData.description"
                      rows="4"
                      required
                      class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none"
                      placeholder="Brief overview of experience and role..."
                    ></textarea>
                  </div>

                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label class="block text-sm font-bold text-blue-900 mb-1 flex items-center gap-2">
                        <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        LinkedIn URL
                      </label>
                      <input
                        v-model="formData.linkedin"
                        type="url"
                        class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-bold text-blue-900 mb-1 flex items-center gap-2">
                        <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        Facebook URL
                      </label>
                      <input
                        v-model="formData.facebook"
                        type="url"
                        class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none"
                        placeholder="https://facebook.com/..."
                      />
                    </div>
                  </div>

                </div>
                
                <div class="bg-blue-50/50 px-6 py-4 border-t border-blue-100 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 shrink-0 rounded-b-2xl">
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
                    Save Member
                  </button>
                </div>
              </form>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import api from "@/utils/api";

const teamMembers = ref([]);
const loading = ref(true);
const error = ref("");
const showModal = ref(false);

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const formData = reactive({
  name: "",
  position: "",
  description: "",
  branch: "",
  image: null,
  linkedin: "",
  facebook: "",
});

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.image = file;
  }
};

const fetchMembers = async () => {
  loading.value = true;
  try {
    const response = await api.get("/team");
    teamMembers.value = response.data.data.items || response.data.data;
  } catch (err) {
    error.value = "Failed to load team members";
  } finally {
    loading.value = false;
  }
};

const deleteMember = async (id) => {
  if (!confirm("Are you sure you want to delete this team member?")) return;
  try {
    await api.delete(`/team/${id}`);
    fetchMembers();
  } catch (err) {
    alert("Failed to delete team member");
  }
};

const openCreateModal = () => {
  Object.assign(formData, {
    name: "",
    position: "",
    description: "",
    branch: "",
    image: null,
    linkedin: "",
    facebook: "",
  });
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveMember = async () => {
  try {
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("position", formData.position);
    payload.append("branch", formData.branch);
    payload.append("description", formData.description);

    if (formData.linkedin) payload.append("linkedin", formData.linkedin);
    if (formData.facebook) payload.append("facebook", formData.facebook);
    if (formData.image) payload.append("image", formData.image);

    await api.post("/team", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    closeModal();
    fetchMembers();
  } catch (err) {
    alert(
      "Failed to save team member: " +
        (err.response?.data?.message || err.message),
    );
  }
};

onMounted(() => {
  fetchMembers();

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

/* Modal Transition Animations */
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