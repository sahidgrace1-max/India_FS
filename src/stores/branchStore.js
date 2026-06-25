import { ref } from "vue";

// Helper function to get cookie value
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Helper function to set cookie
function setCookie(name, value, days = 30) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

// Helper function to get URL parameter
function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Helper function to update URL parameter
function updateUrlParameter(key, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value.toLowerCase());
  window.history.replaceState({}, "", url);
}

// Get saved branch from URL, localStorage, cookie, or default to "Delhi"
function getInitialBranch() {
  const urlCity = getUrlParameter("city");
  if (urlCity) {
    // Capitalize first letter
    return urlCity.charAt(0).toUpperCase() + urlCity.slice(1).toLowerCase();
  }
  return (
    localStorage.getItem("selectedBranch") || getCookie("user_city") || "Delhi"
  );
}

const selectedBranch = ref(getInitialBranch());

export function useBranchStore() {
  const setSelectedBranch = (branch) => {
    selectedBranch.value = branch;
    localStorage.setItem("selectedBranch", branch);
    setCookie("user_city", branch, 30);
    updateUrlParameter("city", branch);
  };

  const getBranches = () => ["Delhi", "Ahmedabad"];

  return {
    selectedBranch,
    setSelectedBranch,
    getBranches,
  };
}
