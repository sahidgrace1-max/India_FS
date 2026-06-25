<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-poppins relative overflow-hidden">
    
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-600/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute top-1/4 right-1/4 w-32 h-32 border-[1px] border-dashed border-blue-800/20 rounded-full animate-rotate-dashed hidden lg:block"></div>
    </div>

    <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-blue-800/5 to-green-600/5 transform -skew-y-1"></div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10 transition-all duration-1000 ease-out transform" :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
      
      <div class="flex items-center justify-center text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
        <span class="w-8 h-1 bg-green-600 rounded-full mr-3"></span>
        Restricted Area
        <span class="w-8 h-1 bg-green-600 rounded-full ml-3"></span>
      </div>

      <h2 class="mt-2 text-center text-4xl font-extrabold text-blue-900 tracking-tight">
        Admin 
        <span class="relative inline-block text-green-500">
          Login
          <span class="absolute -bottom-1 left-0 w-full h-1.5 bg-green-500 rounded-full"></span>
        </span>
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 transition-all duration-1000 ease-out delay-200 transform" :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
      <div class="bg-white/70 backdrop-blur-sm py-8 px-4 shadow-xl border border-blue-100 sm:rounded-2xl sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-bold text-blue-900 tracking-wide mb-2">
              Email address
            </label>
            <div class="mt-1 relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full pl-10 pr-3 py-3 border border-blue-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm bg-white/50 focus:bg-white transition-all duration-200"
                placeholder="admin@graceintl.com"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-bold text-blue-900 tracking-wide mb-2">
              Password
            </label>
            <div class="mt-1 relative">
               <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none block w-full pl-10 pr-3 py-3 border border-blue-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm bg-white/50 focus:bg-white transition-all duration-200"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div v-if="authStore.error" class="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100 flex items-start gap-2">
             <svg class="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {{ authStore.error }}
          </div>

          <div>
            <button
              type="submit"
              :disabled="authStore.loading"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed group"
            >
              <svg v-if="authStore.loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-if="!authStore.loading" class="mr-2 group-hover:translate-x-1 transition-transform">Sign in</span>
              <span v-else>Signing in...</span>
              <svg v-if="!authStore.loading" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();
const router = useRouter();

const isVisible = ref(false);

onMounted(() => {
  // Trigger animation shortly after mount
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const handleLogin = async () => {
  const success = await authStore.login(email.value, password.value);
  if (success) {
    router.push("/admin");
  }
};
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