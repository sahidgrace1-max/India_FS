import { defineStore } from "pinia";
import api from "../utils/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("admin_token") || null,
    user: null,
    loading: false,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.post("/auth/login", { email, password });
        if (response.data.success) {
          this.token = response.data.data.accessToken;
          this.user = response.data.data.user;
          localStorage.setItem("admin_token", this.token);
          return true;
        } else {
          this.error = response.data.message || "Login failed";
          return false;
        }
      } catch (err) {
        this.error =
          err.response?.data?.message || err.message || "Login failed";
        return false;
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem("admin_token");
    },
    async fetchMe() {
      if (!this.token) return;
      try {
        const response = await api.get("/auth/me");
        if (response.data.success) {
          this.user = response.data.data;
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
        this.logout();
      }
    },
  },
});
