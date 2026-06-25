<template>
  <section
    ref="sectionRef"
    class="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden font-poppins"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <div 
        class="text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <div class="flex justify-center mb-4">
          <div class="flex items-center text-green-600 font-bold uppercase tracking-widest text-xs">
            <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
            Our Experts
          </div>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
          Meet Our 
          <span class="relative inline-block text-green-500">
            {{ selectedBranch }}
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
          </span>
          Office Experts
        </h2>
        <p class="text-slate-600 text-lg">
          {{ getTeamDescription(selectedBranch) }}
        </p>
      </div>

      <div v-if="loading" class="text-center py-20 text-blue-800 font-bold">Loading expert team...</div>
      <div v-else-if="currentBranchMembers.length === 0" class="text-center py-20 text-slate-500">
        No team members found for this branch.
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(member, index) in currentBranchMembers"
          :key="member.id"
          class="group bg-white/70 backdrop-blur-sm border border-blue-100 rounded-[2rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center translate-y-12 opacity-0"
          :class="[isVisible ? 'is-visible' : '']"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div class="relative w-40 h-40 mb-6">
            <div class="absolute inset-0 bg-blue-100 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div v-else class="relative w-full h-full rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold text-4xl">
              {{ member.name.charAt(0) }}
            </div>
          </div>

          <h4 class="font-bold text-blue-900 text-xl mb-1">{{ member.name }}</h4>
          <span class="text-green-600 font-bold uppercase tracking-widest text-[10px] mb-6">
            {{ member.position }}
          </span>

          <p class="text-slate-600 text-sm leading-relaxed bg-blue-50/50 p-4 rounded-2xl flex-1">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useBranchStore } from "@/stores/branchStore";
import api from "@/utils/api";

const { selectedBranch } = useBranchStore();
const allTeamMembers = ref([]);
const loading = ref(true);
const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

const fetchTeamMembers = async () => {
  try {
    const response = await api.get("/team");
    allTeamMembers.value = response.data.data.items || response.data.data || [];
  } catch (err) {
    console.error("Failed to load team members:", err);
  } finally {
    loading.value = false;
  }
};

const currentBranchMembers = computed(() => {
  return allTeamMembers.value.filter((member) => member.branch === selectedBranch.value);
});

function getTeamDescription(branch) {
  const descriptions = {
    Delhi: "Our experienced team in Delhi understands the unique needs of North Indian students.",
    Ahmedabad: "Our Ahmedabad team is dedicated to supporting students from Western India.",
    Kathmandu: "A passionate group of professionals dedicated to delivering excellence across every project in our Kathmandu office.",
    Pokhara: "Our Pokhara team brings creativity and regional expertise to every challenge they tackle.",
    Chitwan: "Meet the driven experts powering our Chitwan operations with skill and dedication.",
  };
  return descriptions[branch] || `Meet the talented professionals at our ${branch} office.`;
}

onMounted(() => {
  fetchTeamMembers();
  
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
      observer.disconnect();
    }
  }, { threshold: 0.1 });

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.is-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>